# mshkodra.com

```
api/                    Vercel serverless functions. Must stay at the repo
  vote.sh               root -- this is where Vercel looks for them.
public/                 Everything served as static files.
  index.html            The site. Tabs are driven by the URL fragment.
  better-radius.js      Userscript. Must stay at the served root: its
                        @updateURL points at /better-radius.js, and moving
                        it would silently break auto-update for anyone who
                        has it installed.
  assets/
    styles.css
    image.jpg           Referenced from styles.css, so it lives beside it.
  writing/
    do-people-even-read-these.html
test/
  vote.test.sh          Offline tests for the API. No credentials needed.
vercel.json             Maps public/ to the site root and api/*.sh to the
                        vercel-bash runtime.
```

## Local

The static pages open fine over a local server:

```sh
python3 -m http.server 8000 --directory public
```

Note that `/api/vote` will 404 that way, so the vote widget hides itself. To
run the API too you need `vercel dev`, which requires the Upstash credentials:

```sh
npx vercel link
npx vercel env pull        # writes .env.local, which is gitignored
npx vercel dev
```

## The API

`/api/vote` is a Bash serverless function. Upstash exposes Redis over REST, so
it needs only `curl` and `jq` -- there are no dependencies and no package.json.

```sh
bash test/vote.test.sh     # 22 assertions, stubs curl and the runtime helpers
shellcheck api/vote.sh
```

Adding a post means adding its slug to the allowlist in `api/vote.sh`.
Free-form slugs would let anyone create unbounded keys in the Redis store.
