# BFN Site — Layout, Component, Shader, Animation & Typography Redesign

Paste this whole thing into Claude Code as your task prompt. This is now a full redesign pass, not just a polish pass: layout, section structure, and component design are explicitly in scope, alongside the stats bar bug, the shader background, animation variety, and typography. Don't touch the actual copy/content (headlines, body text, page titles) or the nav routes — restructure how everything is *placed and built*, not what it says. The Signal Blue palette stays as the base palette unless a specific section below says otherwise.

**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Vercel. GSAP + ScrollTrigger already in use.

Before touching anything: find the stats/impact component, the hero background component, every section component on the landing and About pages, and the global CSS/Tailwind config. Read them fully before editing.

**The core problem to fix, stated plainly:** almost every section on this site right now is the same template repeated — big headline stacked on the left, a paragraph and maybe a CTA or a numbered list on the right, roughly the same column split every time. That's the thing that actually has to change. "Fintech" here doesn't mean navy-and-serif more of the same — it means the site should feel like it was built with the same precision, structure, and information-density instincts as an actual trading desk or research terminal: tight alignment grids, real data treatment, tabular numbers, hairline structure. But precision isn't the same as clutter — every section still needs one clear focal point and room to breathe. The balance is: vary the structure section to section, introduce a couple of genuinely new component types, and never let a section carry more than one "novel" idea at once.

---

## 1. Layout & component redesign — vary the structure, add real fintech components

**What's wrong right now:** every section is the same recipe — a big stacked headline on the left, a paragraph (sometimes with a numbered list or a CTA pair) on the right, roughly the same column split, repeated down the page. The About hero and the "Wall Street standard" section are structurally identical, just with different words in the same two slots. That repetition is what reads as generic, independent of whether any single section looks fine in isolation.

**Principle: 3–4 layout templates, recombined — not a bespoke one-off per section.** "Vary everything" without a system just creates a different kind of chaos. Define a small, fixed set of section templates that are structurally distinct from each other, then assign each section on the page to one based on what that section is actually communicating, not randomly and not "whichever's next in rotation." Build the actual set from what's in the existing components, but this is the shape to aim for:
- **Statement split** — the current headline-left/paragraph-right idea, but with real variation: a true 7/5 or 8/4 column ratio instead of the current near-even split, the headline living on the right instead of the left in at least one section, and mixed vertical alignment (top-aligned in one, baseline-anchored to the other column in another).
- **Ledger/data grid** — for anything that's actually a list of parallel items (the 4 coverage desks, Team, Programs, the stats): a real grid or tabular structure instead of a stacked numbered list with a vertical rule. This is the natural home for the fintech instinct — tight column alignment, right-aligned numbers, hairline row dividers, tabular figures.
- **Full-bleed statement** — one section (the hero, or one deliberate mid-page break) that isn't split into columns at all: a single large statement with generous surrounding space, working as a pacing break between denser sections.
- **Offset/overlap** — one section where a supporting element (a stat, a short quote, a small data card) breaks out of the grid and overlaps the edge of the primary column — one moment of real asymmetry, used once, not on every section.

Reuse each template more than once across the site (that repetition with variation is what makes it read as a system rather than noise), but never place the same template on two sections that are directly stacked back to back.

**New component ideas — pick 2–3, not all of them everywhere:**
- **Ledger row / line-item component**: for content like "What BFN Organizes" or the coverage desks — styled like a real line item on a term sheet or research note: a thin rule, a tabular-aligned label and descriptor, a hover state that reveals one more line of detail rather than a full card flip.
- **Data card grid**: for Team or Programs — cards on a strict internal grid (glyph/avatar, name, tier or role, one stat), aligned on a consistent baseline, not free-floating.
- **Ticker rail**: the redesigned stats bar from below, leaned into as an explicit "market ticker" reference — tabular figures, a thin separating rule, quiet and continuous, not literal Bloomberg-terminal cosplay.
- **Pull-figure break**: a single oversized stat or short line dropped into its own full-width moment between two denser sections — this is one concrete way to build the "full-bleed statement" template above.

**What "not convoluted" means as hard constraints:**
- One dominant focal point per section — if a section has a big headline, nothing else in that section competes with it in size or color intensity.
- No section combines more than one novel structural idea at once (don't put an offset overlapping element inside a section that's also introducing a brand-new grid pattern — pick one per section).
- Whitespace budget stays real: a dense ledger/data-grid section needs quieter sections around it, not two more dense sections stacked immediately after it.
- Alignment discipline is the actual fintech tell, more than any single component choice — every column, rule, and number sitting on a consistent grid reads as *actually* precise; a merely dark-and-serif look with sloppy alignment reads as trying to look like fintech instead.

This also slightly expands Anthropic Mono's role from the typography section below: use it for the tabular/numeric figures inside ledger or ticker-style components (stat values, line-item numbers), not only literal code — that's a legitimate data-display use, still never for body prose or headings.

---

## 2. Stats bar — number fix + the actual bug

**Number:** wherever "200+" (or "00+") Student Members appears, change to **220+**. If it's pulled from a data array/config object shared between the live set and the duplicated clone (see below), update the source once, not each instance.

**The bug you're chasing:** it looks like an infinite marquee (duplicated content translated to loop seamlessly), and the loop mechanics themselves are probably fine. What's actually happening: the count-up animation on each stat is almost certainly triggered per-DOM-node (IntersectionObserver or ScrollTrigger `onEnter`, one instance per clone). The *original* set counts up to 220 once and stays there. The *duplicated* clone — which exists only for the seamless loop — either never had its own trigger fire, or fires and resets independently. So as the marquee scrolls, you get a live "220+" sliding out and a stale "0" (or a mid-count clone) sliding in behind it, which reads exactly like what you're describing: it runs smooth, then the numbers visibly reset/pop back in.

Fix it one of two ways, pick whichever is cleaner in the existing code:
- Run the count-up once on mount (not on scroll-into-view — a marquee is already always visible), and drive both the original and cloned DOM nodes off the same already-resolved value instead of two independent animations.
- Or don't animate the count at all for a looping marquee. A count-up makes sense for a stat that appears once as you scroll to it. It doesn't make sense for a stat that's perpetually visible and drifting sideways — the counting effect will always fight the perpetual duplication. Static final numbers in a smooth marquee will actually look more premium than a stuttering count-up doing that.

**Size:** with 4 data points, the current marquee has too much horizontal travel. Cut the container width/track length so the loop cycle is noticeably tighter — this alone will make it feel more premium, since right now it reads as padded-out to fill space it doesn't need.

**Polish direction:** once the duplication bug is fixed, treat this as a quiet, continuous ticker — even spacing, a subtle divider between stats (a thin vertical rule or a dot, not the `+` sprite-like separators currently doing double duty), consistent baseline alignment between the number and label. No hover-jitter, no easing that overshoots. Smooth and quiet reads as premium; anything springy here will read as a template.

---

## 3. Background shader — full-page persistence + swap to Mesh Drift

**The bug:** the gradient looks good, then disappears the instant you scroll. That's because it's almost certainly mounted *inside* the hero section (e.g. `absolute` positioned within a `100vh` hero `<section>`), so it scrolls away with the hero content instead of sitting behind the whole page.

**Fix:** mount it once in the root layout (`app/layout.tsx`), not per-page and not inside any section. Use `position: fixed; inset: 0; z-index: -1; pointer-events: none` (pointer-events re-enabled only if you want the cursor-swirl to track real cursor position, which needs a `mousemove` listener on `window`, not on the canvas — the canvas itself should stay click/scroll-through so it never blocks page interaction). Sized to the viewport, not to any single section, so it persists identically no matter how far down the page you are.

Content sections below the hero should sit on top of it with their normal backgrounds (don't make every section transparent — that's not what's being asked). The point is that the *page itself* no longer has a hard cutoff into flat color the moment you scroll past the hero; the shader is simply always there, and the hero is the one place it's most visible before content starts stacking on top of it.

**Replace the current hero shader** with the "Mesh Drift" shader below. This is a full spec, follow the uniform values exactly as given — don't approximate them or substitute in the theme's existing color logic.

```
Colours (low → high): #FFBF00, #050514, #F3B007, #2600FB (blended in OKLab)
Feel: speed 39/100, zoom 35/100, intensity 72/100, warp 51/100,
      contrast 53/100, brightness 55/100, saturation 62/100, hue 25°,
      vignette 21/100, grain 18/100
Cursor: swirl, strength 77/100, radius 48/100
```

Render a fullscreen triangle in a plain WebGL1 context, no libraries. Fragment shader (feed `u_colors` plus the packed `u_scene` / `u_shape` / `u_surface` / `u_finish` / `u_transform` / `u_space` / `u_cursor` uniforms exactly as commented in the header):

```glsl
// "Mesh drift" — made with the 21st.dev Shader Builder
// Packed WebGL1 uniforms (the shader exposes readable u_* aliases as macros):
//   u_colors[8] (first 4 used)
//   vec3(1.000, 0.749, 0.000)
//   vec3(0.020, 0.020, 0.078)
//   vec3(0.953, 0.690, 0.027)
//   vec3(0.149, 0.000, 0.984)
//   u_scene = vec4(canvas width, canvas height, seconds * 0.84, 4.0)
//   u_shape = vec4(1.20, 0.72, 0.77, 0.31)
//   u_surface = vec4(2.37, 1.08, 0.05, 1.24)
//   u_finish = vec4(0.44, 0.21, 0.005, 0.06)
//   u_transform = vec4(8853.0, 1.43, 0.04, 1.0)
//   u_space = vec4(-0.10, 0.11, pointer x, pointer y)
//   u_cursor = vec4(presence, 2.0, 0.77, 0.45)

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec3 u_colors[8];
uniform vec4 u_scene;      // resolution.xy, time, colour count
uniform vec4 u_shape;      // scale, intensity, paramA, warp
uniform vec4 u_surface;    // detail, contrast, brightness, saturation
uniform vec4 u_finish;     // hue, vignette, blur, grain
uniform vec4 u_transform;  // seed, rotation, drift, OKLab toggle
uniform vec4 u_space;      // offset.xy, pointer.xy
uniform vec4 u_cursor;

#define u_resolution u_scene.xy
#define u_time u_scene.z
#define u_colorCount u_scene.w
#define u_scale u_shape.x
#define u_intensity u_shape.y
#define u_paramA u_shape.z
#define u_warp u_shape.w
#define u_detail u_surface.x
#define u_contrast u_surface.y
#define u_brightness u_surface.z
#define u_saturation u_surface.w
#define u_hue u_finish.x
#define u_vignette u_finish.y
#define u_blur u_finish.z
#define u_grain u_finish.w
#ifdef GL_FRAGMENT_PRECISION_HIGH
#define u_seed u_transform.x
#else
#define u_seed mod(u_transform.x, 31.0)
#endif
#define u_rotate u_transform.y
#define u_drift u_transform.z
#define u_oklab u_transform.w
#define u_offset u_space.xy
#define u_mouse u_space.zw
#define u_cursorPresence u_cursor.x
#define u_cursorEffect u_cursor.y
#define u_cursorStrength u_cursor.z
#define u_cursorRadius u_cursor.w

float hash21(vec2 p) {
#ifndef GL_FRAGMENT_PRECISION_HIGH
  p = mod(p, 31.0);
#endif
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float grainHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
#ifndef GL_FRAGMENT_PRECISION_HIGH
  p = mod(p, 31.0);
#endif
  float n = sin(dot(p, vec2(41.0, 289.0)));
  return fract(vec2(15731.743, 7892.321) * n);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
    mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
    u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(17.0, 9.2);
    a *= 0.5;
  }
  return v;
}

vec3 srgbToLinear(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)),
    step(0.04045, c));
}
vec3 linearToSrgb(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, c));
}
vec3 linToOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = pow(max(l, 0.0), 1.0 / 3.0);
  m = pow(max(m, 0.0), 1.0 / 3.0);
  s = pow(max(s, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s);
}
vec3 oklabToLin(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l; m = m * m * m; s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);
}
vec3 mixColour(vec3 a, vec3 b, float t) {
  if (u_oklab > 0.5) {
    vec3 la = linToOklab(srgbToLinear(a));
    vec3 lb = linToOklab(srgbToLinear(b));
    return clamp(linearToSrgb(oklabToLin(mix(la, lb, t))), 0.0, 1.0);
  }
  return mix(a, b, t);
}

vec3 palette(float x) {
  float n = max(u_colorCount - 1.0, 1.0);
  float f = clamp(x, 0.0, 1.0) * n;
  vec3 col = u_colors[0];
  for (int i = 0; i < 7; i++) {
    if (float(i) < n)
      col = mixColour(col, u_colors[i + 1],
        smoothstep(0.0, 1.0, clamp(f - float(i), 0.0, 1.0)));
  }
  return col;
}

vec3 hueRotate(vec3 col, float a) {
  const mat3 toYIQ = mat3(0.299, 0.596, 0.211,
                          0.587, -0.274, -0.523,
                          0.114, -0.322, 0.312);
  const mat3 toRGB = mat3(1.0, 1.0, 1.0,
                          0.956, -0.272, -1.106,
                          0.621, -0.647, 1.703);
  vec3 yiq = toYIQ * col;
  float ca = cos(a), sa = sin(a);
  yiq = vec3(yiq.x, yiq.y * ca - yiq.z * sa, yiq.y * sa + yiq.z * ca);
  return toRGB * yiq;
}

vec3 shade(vec2 uv, vec2 p, float t) {
  vec3 acc = u_colors[0] * 0.15;
  float total = 0.15;
  for (int i = 0; i < 8; i++) {
    if (float(i) >= u_colorCount) break;
    float fi = float(i);
    vec2 c = vec2(
      sin(t * (0.21 + fi * 0.071) + fi * 2.4 + u_seed),
      cos(t * (0.17 + fi * 0.093) + fi * 1.7)) * (0.45 + u_intensity * 0.35);
    float w = exp(-dot(p - c, p - c) * 6.0);
    acc += u_colors[i] * w;
    total += w;
  }
  return acc / total;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 screenUv = uv;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy)
    / min(u_resolution.x, u_resolution.y);
  float cursorMask = 0.0;

  if (u_cursorPresence > 0.001) {
    vec2 cursor = (0.5 * u_mouse * u_resolution.xy)
      / min(u_resolution.x, u_resolution.y);
    vec2 cursorDelta = p - cursor;
    if (u_cursorEffect < 0.5) {
      p += cursor * u_cursorPresence * u_cursorStrength * 0.55;
    } else {
      float cursorDistance = length(cursorDelta);
      vec2 cursorDirection = cursorDelta / max(cursorDistance, 0.0001);
      cursorMask = u_cursorPresence
        * (1.0 - smoothstep(0.0, u_cursorRadius, cursorDistance));
      if (u_cursorEffect < 1.5) {
        p -= cursorDirection * cursorMask * u_cursorStrength * 0.24;
      } else if (u_cursorEffect < 2.5) {
        float cursorAngle = cursorMask * u_cursorStrength * 2.2;
        float cc = cos(cursorAngle), cs = sin(cursorAngle);
        p = cursor + mat2(cc, -cs, cs, cc) * cursorDelta;
      } else if (u_cursorEffect < 3.5) {
        float ripple = sin(
          cursorDistance / max(u_cursorRadius, 0.001) * 18.0 - u_time * 5.0);
        p -= cursorDirection * ripple * cursorMask * u_cursorStrength * 0.07;
      }
    }
  }

  uv = p * min(u_resolution.x, u_resolution.y) / u_resolution.xy + 0.5;
  p *= u_scale;
  if (abs(u_rotate) > 0.0001) {
    float cr = cos(u_rotate), sr = sin(u_rotate);
    p = mat2(cr, -sr, sr, cr) * p;
  }
  p += u_offset;
  if (u_drift > 0.0001)
    p += u_drift * vec2(sin(u_time * 0.31), cos(u_time * 0.23));
  if (u_warp > 0.0) {
    p += u_warp * (vec2(
      fbm(p * u_detail + u_seed),
      fbm(p * u_detail + vec2(5.2, 1.3))) - 0.5);
  }
  vec3 col;
  if (u_blur > 0.0) {
    float e = u_blur;
    float pe = e * u_scale;
    vec2 uvE = vec2(e) * min(u_resolution.x, u_resolution.y) / u_resolution.xy;
    col  = shade(uv, p, u_time) * 0.36;
    col += shade(uv + vec2(uvE.x, 0.0), p + vec2(pe, 0.0), u_time) * 0.16;
    col += shade(uv - vec2(uvE.x, 0.0), p - vec2(pe, 0.0), u_time) * 0.16;
    col += shade(uv + vec2(0.0, uvE.y), p + vec2(0.0, pe), u_time) * 0.16;
    col += shade(uv - vec2(0.0, uvE.y), p - vec2(0.0, pe), u_time) * 0.16;
  } else {
    col = shade(uv, p, u_time);
  }
  if (abs(u_contrast - 1.0) > 0.0001)
    col = (col - 0.5) * u_contrast + 0.5;
  if (abs(u_saturation - 1.0) > 0.0001) {
    float luma = dot(col, vec3(0.299, 0.587, 0.114));
    col = mix(vec3(luma), col, u_saturation);
  }
  if (abs(u_hue) > 0.0001)
    col = hueRotate(col, u_hue);
  if (abs(u_brightness) > 0.0001)
    col += u_brightness;
  if (u_vignette > 0.0001) {
    float vd = length(screenUv - 0.5) * 1.41421356;
    col *= 1.0 - u_vignette * smoothstep(0.35, 1.0, vd);
  }
  if (u_cursorPresence > 0.001 && u_cursorEffect > 3.5)
    col += (vec3(0.18) + col * 0.12) * cursorMask * u_cursorStrength;
  if (u_grain > 0.0001)
    col += (grainHash(
      gl_FragCoord.xy + vec2(u_seed * 17.0, u_seed * 31.0)) - 0.5) * u_grain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
```

**Implementation requirements:**
- Fullscreen triangle, not a two-triangle quad, plain WebGL1, no libraries.
- Cap `devicePixelRatio` at 2.
- Pause the RAF loop on `document.visibilitychange` (hidden tab = stop rendering).
- `pointer x/pointer y` in `u_space.zw` should be normalized to -1..1, updated from a `window`-level `mousemove` listener, not scoped to the canvas.
- Recalculate `u_scene.xy` (resolution) on window resize, and resize the canvas's actual backing buffer, not just its CSS size.
- Client component only (`'use client'`), instantiated once in the root layout so it survives route changes without re-initializing the WebGL context on every navigation.
- On mobile widths (below 768px), consider internally rendering at a lower resolution and letting CSS upscale the canvas — full-res WebGL shader loops are a real battery/heat cost on phones. This one's a judgment call for you to make if the exact-spec version runs hot on a mid-range phone; the uniform values themselves should stay exactly as given regardless.

---

## 4. Animation cleanup — variety + performance

**Root cause of "laggy and buggy, especially on mobile/older devices":** in Next.js App Router, components mount and unmount on every route change. If ScrollTrigger instances aren't killed on unmount, they pile up across navigations — each one still listening, still calculating on scroll, long after the section that created it is gone. This is the single most common cause of exactly the symptom described. Every GSAP animation tied to scroll needs to live inside `gsap.context()`, scoped to the component's ref, with the context reverted in the `useEffect` cleanup function. No exceptions, no "it's just one more ScrollTrigger."

Other performance requirements:
- Animate only `transform` and `opacity`. Nothing that touches layout (`width`, `height`, `top`, `left`) inside a scroll-driven animation.
- Use `ScrollTrigger.batch()` for repeated card/list reveals instead of one ScrollTrigger per card.
- Use `gsap.matchMedia()` to run lighter/faster variants (or skip entirely) below a mobile breakpoint.
- Respect `prefers-reduced-motion`: reduced-motion users get instant or near-instant transitions, not the full effect.
- `ScrollTrigger.refresh()` on route change if the page height changes, so triggers don't fire at stale scroll positions.

**Variety — this is the actual creative ask.** Right now everything is the same fade/reveal. Replace with a real mix, distributed deliberately across sections rather than randomly:

- **Directional entrances:** vary `xPercent`/`yPercent` per section — some content genuinely slides in from the left, some from the right, some from below, some from above. Don't default every element to "fade up 20px," that's the one you're trying to get away from.
- **Text splitting (GSAP `SplitText`, free as of the Webflow acquisition — no Club GreenSock paywall anymore):** split headlines into chars/words/lines and stagger them in on scroll. Use this specifically for the big display headlines, not every paragraph — restraint matters here or it becomes its own cliché.
- **Typewriter effect:** for one or two specific short lines (a hero subhead, a section eyebrow) — literal character-by-character reveal, `steps()`-style, not a fade.
- **Scroll-scrubbed color reveal on text:** this is the one you specifically asked for — set the text with a two-tone `background-clip: text` gradient, and scrub the gradient's position (or a `clip-path`) tied directly to scroll progress via `ScrollTrigger` with `scrub: true`, so the text visibly "fills in" with color as the user scrolls past it, rather than just fading in already-colored.
- **The numbered items (`01 Investment Banking`, `02 Equity Research`, etc.):** these can each get a different entrance direction from their neighbor, since they're already a visually sequential list — that's one place where staggered, varied-direction reveals actually make sense structurally.
- Keep one page-load orchestrated sequence (e.g. the hero) as the single most "produced" moment, and keep everything else quieter by comparison. If every section is trying to be the showstopper, none of them read as intentional.

---

## 5. Typography — full replacement, two systems with a clear split

Nothing about the current type (whatever's currently rendering — check the Tailwind config and any `next/font` calls in `layout.tsx`) should survive this pass. Two systems are being merged; without a firm rule for where each lives, five typefaces on one site will read as noise rather than design. Here's the split — override it if you had a different intent, but build to *some* explicit rule, not an ad hoc mix per page:

**Anthropic system (Serif + Sans + Mono) — the site's default voice.** Used everywhere: nav, buttons, footer, badges, card titles, all body copy, all section headings except the one hero moment below.
- **Anthropic Serif** (editorial voice): substitute with Source Serif Pro (or Charter/Georgia as fallback). Weights 400/600. Sizes: 14, 18, 20, 24, 68px. Line-height 1.10 (display), 1.40, 1.43 (body/paragraph). Normal letter-spacing. Use for body copy at 20px, card titles, supporting paragraphs, and any display heading at 68px that isn't the one signature EB Garamond moment.
- **Anthropic Sans** (UI chrome + bold declarative headings): substitute Inter. Weights 400/500/600/700. Sizes: 12, 15, 16, 20, 24, 61px. Letter-spacing: -0.02em at 12px, -0.005em at 15–16px, -0.002em at larger sizes. Use for nav links, buttons, footer, badges, and the bold 61px sans display heading (sits beside the serif display as the deliberate dual-system: sans for declarative statements, serif for editorial ones).
- **Anthropic Mono**: substitute JetBrains Mono. 400 weight, 16px, 1.40 line-height. Reserved for code/technical snippets and, per the layout redesign above, the tabular/numeric figures inside ledger or ticker-style components — it should still never carry body prose or headings. (Note: the current site already has mono-styled captions like `/ The Wall Street standard` — decide whether those move to Anthropic Sans at small tracked-out sizes instead, since Mono's role is data figures and code, not general label styling.)

**EB Garamond + Figtree — reserved for one signature moment, not sprinkled throughout.** This is the pairing from Sashi's personal portfolio (sashipalla.vercel.app), and it's being brought in specifically for its own distinct feel, not blended sentence-by-sentence with the Anthropic system. Use it for exactly one high-impact place — the strongest candidate is the hero's biggest headline (the "Bridge Finance Network" mark, or whichever line is the single most characteristic statement on the landing page) — pushed up toward the top of its size range for real impact, with any directly adjacent micro-copy or label in that same hero moment set in Figtree. Once you're a section or two past the hero, you're back in the Anthropic system for the rest of the page.
- **EB Garamond**: weight 400 only. Sizes: 32, 48, 64, 120px. Line-height 0.85–1.3 (tight, 0.85–0.95 at display sizes — this is what makes big serif type feel like one confident horizontal gesture instead of loose stacked lines). Letter-spacing: -3.6px at 120px, -1.92px at 64px, -0.96px at 32px.
- **Figtree**: weights 400/500/600/700. Sizes: 14, 16, 20, 22, 24, 32px. Line-height 1.3 throughout. Use only adjacent to the EB Garamond moment — a subhead, a small label, a caption sitting right next to that one big headline.

**Implementation:** load everything through `next/font/google` (Source Serif Pro or Charter, Inter, JetBrains Mono, EB Garamond, Figtree), expose each as a CSS variable matching the token names exactly (`--font-anthropic-serif`, `--font-anthropic-sans`, `--font-anthropic-mono`, `--font-eb-garamond`, `--font-figtree`), and wire those into `tailwind.config` as font families so the split above is enforced through utility classes, not one-off inline styles scattered across components.

---

## Before you call this done

- Scroll the full site top to bottom and confirm no two directly-stacked sections use the same layout template — if two adjacent sections both read as "headline left, text right," that's the exact problem this pass was supposed to fix.
- Check alignment discipline specifically in any new ledger/data-grid or ticker component: numbers right-aligned and lining up column to column, rules consistent width, nothing eyeballed.
- Confirm each section still has exactly one dominant focal point — if you can't tell what a section wants you to look at first within a second, it's carrying too much.
- Kill every stray ScrollTrigger/GSAP context on route navigation — check this by navigating between 3–4 pages and confirming scroll listeners aren't accumulating (DevTools performance panel or just watching for growing jank).
- Test the marquee fix by watching a full loop cycle twice in a row, not just once — the bug only shows up on the seam.
- Test the shader on an actual mobile viewport size, not just a resized desktop browser window, and check it doesn't tank scroll performance.
- Confirm `prefers-reduced-motion` actually disables/shortens the heavier animations.
- Confirm the type split reads as intentional on the actual built pages, not just in isolation — if the EB Garamond moment feels buried or the Anthropic system feels bland in comparison, that's worth flagging back rather than shipping quietly.
