"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useEffect, useLayoutEffect, type DependencyList, type RefObject } from "react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

/* ------------------------------------------------------------------ */
/* Shared motion language                                               */
/* Timings and eases mirror sashipalla.vercel.app: masked text rises on  */
/* power4.out, content on power3.out, small fades on power2.out, pops on */
/* back.out, rules draw on power2.inOut. Every scroll reveal fires once. */
/* Only transform and opacity are ever animated.                         */
/* ------------------------------------------------------------------ */

export const EASE = {
  rise: "power4.out",
  content: "power3.out",
  fade: "power2.out",
  pop: "back.out(1.7)",
  draw: "power2.inOut",
} as const

export const START = {
  section: "top 85%",
  block: "top 82%",
  item: "top 88%",
} as const

/** Exactly one of these is true at any time: reduced wins over viewport. */
export const MOTION_QUERIES = {
  isDesktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  isMobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
  reduced: "(prefers-reduced-motion: reduce)",
} as const

export type MotionEnv = { isDesktop: boolean; isMobile: boolean; reduced: boolean }
type Targets = gsap.TweenTarget

/**
 * Runs `setup` inside a gsap.context scoped to `scope`, under gsap.matchMedia
 * so it re-runs (after a full revert) when the viewport crosses the mobile
 * breakpoint or the reduced-motion preference changes. Everything created
 * inside — tweens, ScrollTriggers, SplitText — is reverted on unmount.
 */
export function useGsap(
  scope: RefObject<HTMLElement | null>,
  setup: (env: MotionEnv, q: (selector: string) => HTMLElement[]) => void,
  deps: DependencyList = [],
) {
  useIsomorphicLayoutEffect(() => {
    const root = scope.current
    if (!root) return
    const q = (selector: string) => Array.from(root.querySelectorAll<HTMLElement>(selector))
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_QUERIES, (c) => setup(c.conditions as MotionEnv, q))
    }, root)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

/** Show targets in their final state with no motion (reduced-motion path). */
export function showNow(targets: Targets) {
  gsap.set(targets, { autoAlpha: 1, clearProps: "transform" })
}

const once = (trigger: Element, start: string) => ({ trigger, start, once: true })

/**
 * Small fade-up for eyebrows, body copy and lists. 0.6s power2.out,
 * y 14 (8 on mobile), 0.12s stagger.
 */
export function fadeUp(
  targets: Targets,
  env: MotionEnv,
  opts: { trigger?: Element; start?: string; delay?: number; stagger?: number } = {},
): gsap.core.Tween | void {
  if (env.reduced) return showNow(targets)
  const scrollTrigger = opts.trigger ? once(opts.trigger, opts.start ?? START.block) : undefined
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y: env.isMobile ? 8 : 14 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: EASE.fade,
      delay: opts.delay ?? 0,
      stagger: opts.stagger ?? (env.isMobile ? 0.08 : 0.12),
      scrollTrigger,
    },
  )
}

/**
 * Directional slide-in for split layouts (text from one side, panel from
 * the other). Same timing as fadeUp; distance drops to 16px on mobile.
 */
export function slideIn(
  targets: Targets,
  env: MotionEnv,
  opts: { from?: "left" | "right"; trigger?: Element; start?: string; delay?: number; stagger?: number } = {},
): gsap.core.Tween | void {
  if (env.reduced) return showNow(targets)
  const distance = env.isMobile ? 16 : 40
  const x = opts.from === "right" ? distance : -distance
  const scrollTrigger = opts.trigger ? once(opts.trigger, opts.start ?? START.block) : undefined
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, x },
    {
      autoAlpha: 1,
      x: 0,
      duration: 0.7,
      ease: EASE.content,
      delay: opts.delay ?? 0,
      stagger: opts.stagger ?? (env.isMobile ? 0.06 : 0.12),
      scrollTrigger,
    },
  )
}

/**
 * Card entrance: rise + settle (y 28, scale .96, origin 50% 30%), 0.65s
 * power3.out. Cards are batched as they scroll in, so long grids never
 * queue a multi-second stagger; mobile batches fewer cards with less travel.
 */
export function cardsIn(cards: Element[], env: MotionEnv, opts: { start?: string } = {}) {
  if (cards.length === 0) return
  if (env.reduced) return showNow(cards)
  const from = env.isMobile
    ? { autoAlpha: 0, y: 16, scale: 0.98 }
    : { autoAlpha: 0, y: 28, scale: 0.96 }
  gsap.set(cards, { ...from, transformOrigin: "50% 30%" })
  ScrollTrigger.batch(cards, {
    start: opts.start ?? START.item,
    once: true,
    batchMax: env.isMobile ? 2 : 6,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: EASE.content,
        stagger: env.isMobile ? 0.05 : 0.08,
        overwrite: true,
      }),
  })
}

/**
 * Masked text rise: splits into lines (masked) and words or chars, which
 * rise from yPercent 120. Chars for short titles (1.1s, 0.03 stagger),
 * words for long ones (0.8s, 0.04 stagger). SplitText keeps an aria-label
 * with the original text, so the copy itself is untouched.
 */
export function textRise(
  el: HTMLElement,
  env: MotionEnv,
  opts: { by?: "chars" | "words"; trigger?: Element; start?: string; delay?: number } = {},
): gsap.core.Tween | void {
  if (env.reduced) return showNow(el)
  const by = env.isMobile ? "words" : (opts.by ?? "words")
  const split = SplitText.create(el, {
    type: by === "chars" ? "lines,words,chars" : "lines,words",
    mask: "lines",
  })
  const parts = by === "chars" ? split.chars : split.words
  gsap.set(el, { autoAlpha: 1 })
  const scrollTrigger = opts.trigger ? once(opts.trigger, opts.start ?? START.section) : undefined
  return gsap.fromTo(
    parts,
    { yPercent: 120 },
    {
      yPercent: 0,
      duration: by === "chars" ? 1.1 : 0.8,
      ease: EASE.rise,
      delay: opts.delay ?? 0,
      stagger: by === "chars" ? 0.03 : 0.04,
      scrollTrigger,
    },
  )
}

/** Section rise: the whole block lifts into place (y 48, scale .985). */
export function sectionRise(el: Element, env: MotionEnv, opts: { start?: string } = {}): gsap.core.Tween | void {
  if (env.reduced) return showNow(el)
  return gsap.fromTo(
    el,
    { autoAlpha: 0, y: env.isMobile ? 20 : 48, scale: env.isMobile ? 1 : 0.985, transformOrigin: "50% 0%" },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: EASE.content,
      scrollTrigger: once(el, opts.start ?? START.section),
    },
  )
}

/** Pop-in for small items (chips, icons): scale .6 → 1 on back.out. */
export function popIn(
  targets: Targets,
  env: MotionEnv,
  opts: { trigger?: Element; start?: string; delay?: number } = {},
): gsap.core.Tween | void {
  if (env.reduced) return showNow(targets)
  const scrollTrigger = opts.trigger ? once(opts.trigger, opts.start ?? START.block) : undefined
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, scale: 0.6 },
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.45,
      ease: EASE.pop,
      delay: opts.delay ?? 0,
      stagger: env.isMobile ? 0.05 : 0.08,
      scrollTrigger,
    },
  )
}

/** Rule draw: hairlines scale in from the left. */
export function drawRule(
  targets: Targets,
  env: MotionEnv,
  opts: { trigger?: Element; start?: string; delay?: number } = {},
): gsap.core.Tween | void {
  if (env.reduced) {
    gsap.set(targets, { scaleX: 1 })
    return
  }
  const scrollTrigger = opts.trigger ? once(opts.trigger, opts.start ?? START.block) : undefined
  return gsap.fromTo(
    targets,
    { scaleX: 0, transformOrigin: "left center" },
    { scaleX: 1, duration: 0.8, ease: EASE.draw, delay: opts.delay ?? 0, stagger: 0.1, scrollTrigger },
  )
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Page-load hero intro: headline + subhead fade up. One shot only.
 * Pass the elements in visual order; they stagger 0.08s.
 */
export function heroIntro(targets: gsap.TweenTarget): gsap.core.Tween {
  const reduced = prefersReducedMotion()
  return gsap.fromTo(
    targets,
    { y: 24, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.08,
    },
  )
}

/**
 * Scroll reveal for section headers: same fade-up, fires once at 80%
 * viewport entry. Cards within a section do NOT get their own trigger.
 */
export function scrollReveal(target: gsap.DOMTarget): gsap.core.Tween {
  return gsap.fromTo(
    target,
    { y: 24, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target as gsap.DOMTarget,
        start: "top 80%",
        once: true,
      },
    },
  )
}

/**
 * Stat counter: tweens the number up on scroll-into-view. Render the target
 * with monospace digits so width doesn't jump mid-count.
 */
export function statCounter(
  el: Element,
  endValue: number,
  options: { prefix?: string; suffix?: string; decimals?: number; immediate?: boolean } = {},
): gsap.core.Tween {
  // `immediate: true` starts the count right away — for elements inside
  // horizontal scrollers where vertical ScrollTrigger never fires.
  const { prefix = "", suffix = "", decimals = 0, immediate = false } = options
  const state = { value: 0 }
  const format = (v: number) =>
    `${prefix}${v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`

  if (prefersReducedMotion()) {
    el.textContent = format(endValue)
    return gsap.to(state, { value: endValue, duration: 0 })
  }

  return gsap.to(state, {
    value: endValue,
    duration: 1.2,
    ease: "power2.out",
    ...(immediate ? {} : { scrollTrigger: { trigger: el, start: "top 80%", once: true } }),
    onUpdate: () => {
      el.textContent = format(state.value)
    },
    onComplete: () => {
      el.textContent = format(endValue)
    },
  })
}

/**
 * Typewriter headline: reveals the element's existing character spans one
 * by one. Expects children marked with [data-char]. Instant under
 * prefers-reduced-motion.
 */
export function typewriter(container: Element, options: { onComplete?: () => void } = {}): gsap.core.Tween {
  const chars = container.querySelectorAll("[data-char]")
  if (prefersReducedMotion()) {
    gsap.set(chars, { autoAlpha: 1 })
    options.onComplete?.()
    return gsap.to(container, { duration: 0 })
  }
  return gsap.fromTo(
    chars,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.01,
      stagger: 0.055,
      ease: "none",
      onComplete: options.onComplete,
    },
  )
}

/**
 * Word-by-word reveal on scroll: splits the element's text into word spans
 * and staggers them up. Fires once at 80% viewport entry.
 */
export function wordReveal(el: HTMLElement): gsap.core.Tween {
  if (!el.dataset.split) {
    const words = (el.textContent ?? "").split(/\s+/).filter(Boolean)
    el.textContent = ""
    words.forEach((word, i) => {
      const span = document.createElement("span")
      span.textContent = word
      span.style.display = "inline-block"
      span.dataset.word = ""
      el.appendChild(span)
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "))
    })
    el.dataset.split = "true"
  }
  const words = el.querySelectorAll("[data-word]")
  const reduced = prefersReducedMotion()
  return gsap.fromTo(
    words,
    { y: 24, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.06,
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    },
  )
}

/**
 * Staggered section entrance: items rise, scale, and settle with a varied
 * stagger (not a flat fade-up). One trigger per section container.
 */
export function sectionEntrance(container: Element, itemSelector: string): gsap.core.Tween {
  const items = container.querySelectorAll(itemSelector)
  const reduced = prefersReducedMotion()
  return gsap.fromTo(
    items,
    { y: 32, autoAlpha: 0, scale: 0.97 },
    {
      y: 0,
      autoAlpha: 1,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: reduced ? 0 : { each: 0.1, from: "start" },
      scrollTrigger: { trigger: container, start: "top 80%", once: true },
    },
  )
}

/**
 * Landing-hero sky parallax + fade: the gradient moves at a fraction of
 * scroll velocity for depth, then fades as the next content
 * zone (fadeTrigger) enters at 80% viewport. Additive to the CSS drift
 * loops; skipped entirely under prefers-reduced-motion.
 */
export function heroSkyParallax(sky: Element, fadeTrigger: Element): gsap.MatchMedia | null {
  if (prefersReducedMotion()) return null

  const mm = gsap.matchMedia()
  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (ctx) => {
      const { isMobile } = ctx.conditions as { isMobile: boolean }
      const velocity = isMobile ? 0.15 : 0.3

      // Parallax: sky trails the scroll at `velocity`. Trigger on the hero
      // section (the sky's positioned parent), not the transformed sky
      // itself — a scrubbed y-transform on the trigger element makes the
      // trigger's own start/end positions drift as it animates.
      const hero = sky.parentElement ?? sky
      gsap.to(sky, {
        y: () => window.innerHeight * velocity,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })

      // Fade + compress as the next zone arrives. The fade spans from the
      // next band entering at 80% viewport until it reaches 15% — a
      // proportional range, so the sky only fully releases once the next
      // band actually dominates the screen. Keep scale at 1: scaling this
      // full-bleed layer exposes blank edges while it is still visible.
      gsap.to(sky, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: fadeTrigger,
          start: "top 80%",
          end: "top 15%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    },
  )
  return mm
}

/**
 * Immediate (non-scroll-gated) fade-up for content that swaps in response
 * to a user action — e.g. a tab switch — rather than scroll position.
 * Same easing/duration as sectionEntrance for a consistent feel.
 */
export function contentSwitch(targets: gsap.TweenTarget, options: { instant?: boolean } = {}): gsap.core.Tween {
  const reduced = prefersReducedMotion()
  const instant = options.instant ?? false
  return gsap.fromTo(
    targets,
    { y: 16, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: instant ? 0 : 0.45,
      ease: "power3.out",
      stagger: instant || reduced ? 0 : 0.06,
    },
  )
}

/**
 * Tier-ladder gradient track fill, left-to-right on scroll-into-view.
 * `fraction` is 0–1 progress along the ladder.
 */
export function tierLadderFill(el: Element, fraction = 1): gsap.core.Tween {
  const target = `${Math.round(fraction * 100)}%`
  if (prefersReducedMotion()) {
    return gsap.set(el, { width: target }) as unknown as gsap.core.Tween
  }
  return gsap.fromTo(
    el,
    { width: "0%" },
    {
      width: target,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    },
  )
}
