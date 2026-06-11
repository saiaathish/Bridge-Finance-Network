# Bridge Finance Network Website

Sites-compatible public website scaffold for Bridge Finance Network.

## Commands

```bash
npm run dev
npm run build
```

The build emits a Cloudflare Worker-compatible artifact at `dist/server/index.js`
and static assets at `dist/server/public`.

## Source Notes

- Product scope and copy direction come from `BFN Website Mastersheet`.
- Slack search found `#all-bfn`, but no discoverable Figma URL or detailed website thread.
- The generated hero image lives in `public/assets/bfn-hero-source.png`; the page uses the compressed `public/assets/bfn-hero.jpg`.
- Secrets from source documents are intentionally excluded. Put real runtime keys in Sites environment settings, not in this repo.
