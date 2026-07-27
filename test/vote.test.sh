#!/bin/bash
# Exercises api/vote.sh offline: stubs the vercel-bash response helpers and
# replaces curl with canned Upstash REST replies, so the routing, validation and
# rate-limit logic can be checked without credentials or a deployment.
#
# Runs under the same `set -euo pipefail` the real bootstrap uses.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# State has to live in files, not variables: the stubbed curl runs inside a
# pipeline and handler runs redirected, both of which are subshells whose
# variable assignments are lost on exit.
FAKE_INCR="$TMP/fake_incr"; echo 1 > "$FAKE_INCR"
HINCRBY_LOG="$TMP/hincrby"; : > "$HINCRBY_LOG"

# --- stubs for the runtime-provided helpers ------------------------------
_STATUS=200
_HEADERS=""
http_response_code()   { _STATUS="$1"; }
http_response_header() { _HEADERS="${_HEADERS}${1}: ${2}"$'\n'; }
http_response_json()   { http_response_header "content-type" "application/json"; }

# --- stub for curl: reads the JSON command from stdin --------------------
curl() {
	local body cmd
	body="$(cat)"
	cmd="$(jq -r '.[0]' <<< "$body")"
	case "$cmd" in
		HGETALL)  echo '{"result":["up","3","down","1"]}' ;;
		HINCRBY)  jq -r '.[2]' <<< "$body" > "$HINCRBY_LOG"; echo '{"result":4}' ;;
		INCR)     echo "{\"result\":$(cat "$FAKE_INCR")}" ;;
		EXPIRE)   echo '{"result":1}' ;;
		*)        echo '{"result":null}' ;;
	esac
}

# shellcheck disable=SC1091
. "$REPO/api/vote.sh"

# --- harness -------------------------------------------------------------
FAILURES=0
run() { # run <method> <path> [xff]
	local event="$TMP/event.json"
	jq -n --arg m "$1" --arg p "$2" --arg ip "${3:-1.2.3.4}" \
		'{method:$m, path:$p, headers:{"x-forwarded-for":$ip}}' > "$event"
	_STATUS=200; _HEADERS=""; : > "$HINCRBY_LOG"
	# Redirected, not $(...), so handler runs in THIS shell and its calls to
	# http_response_code actually reach the assertions below.
	handler "$event" > "$TMP/body"
	BODY="$(cat "$TMP/body")"
	HINCRBY="$(cat "$HINCRBY_LOG")"
}
check() {
	if [ "$2" = "$3" ]; then
		printf 'ok    %s\n' "$1"
	else
		FAILURES=$((FAILURES + 1))
		printf 'FAIL  %s\n        got:  %s\n        want: %s\n' "$1" "$2" "$3"
	fi
}

export UPSTASH_REDIS_REST_URL="https://example.upstash.io"
export UPSTASH_REDIS_REST_TOKEN="test-token"
UPSTASH_URL="$UPSTASH_REDIS_REST_URL"
UPSTASH_TOKEN="$UPSTASH_REDIS_REST_TOKEN"

echo "--- GET happy path"
run GET "/api/vote?slug=do-people-even-read-these"
check "status 200"        "$_STATUS" "200"
check "counts returned"   "$BODY"    '{"up":3,"down":1}'
check "no write on GET"   "$HINCRBY" ""
check "no-store header"   "$(grep -c 'Cache-Control: no-store' <<< "$_HEADERS")" "1"
check "json content-type" "$(grep -c 'content-type: application/json' <<< "$_HEADERS")" "1"

echo "--- POST happy path"
run POST "/api/vote?slug=do-people-even-read-these&dir=up"
check "status 200"          "$_STATUS" "200"
check "incremented 'up'"    "$HINCRBY" "up"
run POST "/api/vote?slug=do-people-even-read-these&dir=down"
check "incremented 'down'"  "$HINCRBY" "down"

echo "--- validation"
run GET "/api/vote?slug=some-other-post"
check "unknown slug -> 404"  "$_STATUS" "404"
run GET "/api/vote"
check "missing slug -> 404"  "$_STATUS" "404"
run POST "/api/vote?slug=do-people-even-read-these&dir=sideways"
check "bad dir -> 400"       "$_STATUS" "400"
check "bad dir writes nothing" "$HINCRBY" ""
run POST "/api/vote?slug=do-people-even-read-these"
check "missing dir -> 400"   "$_STATUS" "400"
run DELETE "/api/vote?slug=do-people-even-read-these"
check "DELETE -> 405"        "$_STATUS" "405"

echo "--- slug allowlist blocks key injection"
run POST "/api/vote?slug=../../etc&dir=up"
check "traversal slug -> 404" "$_STATUS" "404"
run POST "/api/vote?slug=attacker-made-this&dir=up"
check "arbitrary slug -> 404" "$_STATUS" "404"
check "no key created"        "$HINCRBY" ""

echo "--- rate limiting"
echo 5 > "$FAKE_INCR"
run POST "/api/vote?slug=do-people-even-read-these&dir=up"
check "5th vote allowed"  "$_STATUS" "200"
echo 6 > "$FAKE_INCR"
run POST "/api/vote?slug=do-people-even-read-these&dir=up"
check "6th vote -> 429"   "$_STATUS" "429"
check "429 writes nothing" "$HINCRBY" ""

echo "--- misconfiguration"
UPSTASH_URL=""
run GET "/api/vote?slug=do-people-even-read-these"
check "no redis config -> 500" "$_STATUS" "500"
UPSTASH_URL="$UPSTASH_REDIS_REST_URL"

echo
if [ "$FAILURES" -eq 0 ]; then echo "all passed"; else echo "$FAILURES failed"; exit 1; fi
