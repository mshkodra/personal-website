#!/bin/bash
# GET  /api/vote?slug=<post>             -> { "up": N, "down": N }
# POST /api/vote?slug=<post>&dir=up|down -> the same, after incrementing
#
# Upstash exposes Redis over a plain REST API, so this needs no Redis client --
# just curl and a bearer token. That's the only reason writing an API endpoint
# in Bash is reasonable rather than merely funny.
#
# Runs on the vercel-bash community runtime (see vercel.json). The runtime
# provides http_response_code / http_response_header / http_response_json, and
# passes the request event as a JSON file in $1.
#
# NOTE: bootstrap runs under `set -euo pipefail`, so any command that can
# legitimately "fail" (grep finding nothing) needs an explicit guard.

UPSTASH_URL="${UPSTASH_REDIS_REST_URL:-${KV_REST_API_URL:-}}"
UPSTASH_TOKEN="${UPSTASH_REDIS_REST_TOKEN:-${KV_REST_API_TOKEN:-}}"

RATE_LIMIT=5      # votes per IP...
RATE_WINDOW=60    # ...per this many seconds

# Each argument is one token of a Redis command. jq builds the JSON array so
# quoting and escaping are handled properly rather than by string concatenation.
redis_cmd() {
	jq -cn '$ARGS.positional' --args "$@" \
		| curl -sS -X POST "$UPSTASH_URL" \
			-H "Authorization: Bearer $UPSTASH_TOKEN" \
			-H "Content-Type: application/json" \
			--data-binary @-
}

# HGETALL comes back as a flat array, ["up","3","down","1"]. Fold it into an
# object and coerce to numbers so the browser always gets the same shape, even
# for a post nobody has voted on yet.
read_counts() {
	redis_cmd HGETALL "$1" | jq -c '
		(.result // []) as $a
		| reduce range(0; ($a | length); 2) as $i ({}; .[$a[$i]] = $a[$i + 1])
		| { up: ((.up // "0") | tonumber), down: ((.down // "0") | tonumber) }'
}

# Fixed-window limiter: one counter per IP per window, expired by Redis itself.
# INCR is atomic, so two simultaneous requests can't both see a low count.
rate_limit_ok() {
	local ip="$1" window key count
	window=$(( $(date +%s) / RATE_WINDOW ))
	key="ratelimit:vote:${ip}:${window}"

	count="$(redis_cmd INCR "$key" | jq -r '.result // 0')"
	[[ "$count" =~ ^[0-9]+$ ]] || count=1

	# Only the request that created the key needs to set its TTL.
	if [ "$count" -eq 1 ]; then
		redis_cmd EXPIRE "$key" "$RATE_WINDOW" > /dev/null
	fi

	[ "$count" -le "$RATE_LIMIT" ]
}

# Pull one parameter out of QUERY. Values are validated by the caller, so no
# percent-decoding happens here -- anything unexpected is rejected outright.
query_param() {
	printf '%s\n' "$QUERY" | tr '&' '\n' | grep -m1 "^${1}=" | cut -d= -f2- || true
}

handler() {
	local event="$1" path method ip slug dir key

	http_response_json

	if [ -z "$UPSTASH_URL" ] || [ -z "$UPSTASH_TOKEN" ]; then
		http_response_code 500
		echo '{"error":"redis is not configured"}'
		return
	fi

	path="$(jq -r '.path // ""' < "$event")"
	method="$(jq -r '.method // "GET"' < "$event")"

	ip="$(jq -r '.headers["x-forwarded-for"] // ""' < "$event" | cut -d, -f1 | tr -d '[:space:]')"
	[ -n "$ip" ] || ip="unknown"

	QUERY=""
	case "$path" in *\?*) QUERY="${path#*\?}" ;; esac

	slug="$(query_param slug)"
	dir="$(query_param dir)"

	# Allowlist, not free-form. Arbitrary slugs would let anyone create
	# unbounded keys in the store, which is how you get a surprise bill.
	# Add each new post here.
	case "$slug" in
		do-people-even-read-these) ;;
		*)
			http_response_code 404
			echo '{"error":"unknown post"}'
			return
			;;
	esac

	key="votes:${slug}"

	if [ "$method" = "POST" ]; then
		if [ "$dir" != "up" ] && [ "$dir" != "down" ]; then
			http_response_code 400
			echo '{"error":"dir must be up or down"}'
			return
		fi

		if ! rate_limit_ok "$ip"; then
			http_response_code 429
			echo '{"error":"too many votes, slow down"}'
			return
		fi

		# HINCRBY is atomic. Read, add one, write back would silently drop
		# votes whenever two people click at the same moment.
		redis_cmd HINCRBY "$key" "$dir" 1 > /dev/null

	elif [ "$method" != "GET" ]; then
		http_response_code 405
		http_response_header "Allow" "GET, POST"
		echo '{"error":"method not allowed"}'
		return
	fi

	http_response_header "Cache-Control" "no-store"
	read_counts "$key"
}
