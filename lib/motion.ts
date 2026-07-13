"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
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
