# Context handoff — resuming the BFN site redesign

You're picking this up mid-project in a fresh session with no memory of prior conversation. Read this fully before touching anything. Full original spec is `bfn-site-fixes-prompt.md` (the layout/component/shader/animation/typography doc) — if that file isn't already in this repo/session, ask for it before proceeding, don't guess at the details it contains.

**Stack:** Next.js 15 (not 14 — corrected from the original spec doc), Tailwind v4 (no `tailwind.config` — fonts are wired through `@theme` in `globals.css`, not a JS config file). Fonts currently load via `next/font/google`, not a Google Fonts `<link>` tag.

---

## Where things actually stand

We agreed to sequence this project as: **foundations first (typography, shader, stats bar fix) → stop and review → then layout templates/new components/animation variety.** That sequencing decision stands. Foundations pass is done and was reviewed. Two real problems came out of that review and need to be fixed **before** any layout work starts. Do not start on layout, new components, or animation variety until both of these are resolved and re-reviewed.

### Already done (foundations pass, shipped and building across all 16 routes)
- **Typography:** all five families (Source Serif 4, Inter, JetBrains Mono, EB Garamond, Figtree) load via `next/font/google`, exposed as CSS variables matching the original token names. `--font-display` resolves to Anthropic Serif sitewide; EB Garamond is scoped to a single `.signature-display` class used only on the hero headline (tight line-height, negative tracking), paired with `.signature-ui` (Figtree) on the badge/subhead next to it. Everything else — body, buttons, nav, labels — is the Anthropic system. This was a deliberate call to avoid EB Garamond sprinkling across the whole site — it's confirmed correct, don't revisit it.
- **Shader:** Mesh Drift shader is live, mounted once in the root layout as a fixed full-viewport canvas. Fullscreen triangle, plain WebGL1, exact uniforms per spec, DPR capped at 2, pauses on tab-hidden, pointer normalized to -1..1 from a window-level listener, resizes the actual backing buffer on window resize, full GL teardown on unmount, mobile (<768px) renders lower-res with CSS upscale, `prefers-reduced-motion` freezes to one static frame. A real stacking bug was caught and fixed here: `body` had an opaque background painting over the `z-index: -1` shader — base color moved to `html`, `body` made transparent so the shader can actually show through.
- **Stats bar / ticker:** now shows 220+ (single source of truth, no drift between duplicate marquee copies), hairline `border-l` dividers replacing the old sprite separators, tabular figures, tightened max-width, hover-pause removed. There are only 3 stats in the real data, not 4 — don't invent a 4th membership number, that was flagged and correctly declined last pass.

### Known issue from that pass, not yet confirmed fixed
The seam-jump bug in the marquee was never actually reproduced in-browser (no visual tooling was connected in that session). The fix that shipped is a plausible hypothesis — async webfont loading reflowing the track width mid-cycle, which self-hosting fonts via `next/font` should eliminate as a side effect — but it's unconfirmed. **Watch two full loop cycles and confirm the seam is actually gone before assuming this is resolved.** If it still pops, this needs real reproduction and root-cause work, not another hypothesis.

---

## Two things to fix right now, before layout work starts

### 1. Shader is missing entirely on About/Approach/Team
It only renders on the homepage. Other routes are flat solid-color backgrounds with no shader visible at all — not "faded," not "quieter," just absent. This happened because those pages were given explicit opaque backgrounds during the stacking-bug fix above, as a side effect of that fix rather than a deliberate decision, and it was never explicitly signed off. Bring the shader back on every route. If it genuinely needs to be quieter on text-dense pages for legibility, that's a legitimate call to make deliberately (lower opacity, lower intensity, whatever), but it must still be visibly present and continuous — a hard cutoff to zero color on any route is exactly the bug this whole effort started by fixing on the homepage, don't reintroduce it elsewhere.

### 2. Hero legibility during the blue phase of the drift
At certain points in the shader's cycle, the blue blob drifts directly behind the hero headline and body copy and the text becomes hard to read against it. This needs two separate fixes, not one:
- **A scrim/overlay behind the text column** — a static gradient (transparent on the far side, fading toward the page's base background color behind the text) so copy stays legible regardless of where the shader's blobs currently sit. This is the actual fix for the legibility failure, not a color tweak.
- **Separately, rebalance the color weighting** so gold dominates more of the cycle and blue reads as an accent rather than a co-equal color — less time/area in the heavy-blue phase overall. This is a deliberate departure from the original exact-spec uniform values and that's fine at this point — it's now a live design call, not a spec to match precisely.

**Before calling this done:** get a screenshot of the hero specifically at a heavy-blue moment in the cycle, not a calm/average frame, and confirm the scrim holds up under that worst case. A fix that only looks fine in a lucky frame isn't actually fixed.

---

## After both of those are confirmed fixed

Move to the remaining scope from the original spec: **layout templates, new fintech-style components (ledger rows, data card grid, ticker rail treatment, pull-figure breaks), and animation variety (directional entrances, text-splitting, scroll-scrubbed color reveals, GSAP cleanup for the mobile jank issue).** All of that detail lives in `bfn-site-fixes-prompt.md` sections 1 and 4 — don't start it from a cold guess, pull the actual constraints from there (one dominant focal point per section, max one novel structural idea per section, no two stacked sections sharing a template, etc.).
