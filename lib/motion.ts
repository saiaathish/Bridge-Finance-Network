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
 * Link a tween's ScrollTrigger to its own teardown (§4).
 *
 * gsap's `tween.kill()` does NOT kill an attached ScrollTrigger — the trigger
 * keeps listening and recalculating on every scroll after the component that
 * created it has unmounted, which is the single biggest cause of scroll jank
 * accumulating across route changes. Callers throughout the app only ever call
 * `.kill()` on the returned tween, so we override that one instance method to
 * also kill the trigger. Centralising it here fixes every caller at once.
 */
function linkTriggerToKill(tween: gsap.core.Tween): gsap.core.Tween {
  const st = tween.scrollTrigger
  if (!st) return tween
  const origKill = tween.kill.bind(tween)
  tween.kill = ((...args: Parameters<typeof origKill>) => {
    st.kill()
    return origKill(...args)
  }) as typeof tween.kill
  return tween
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
  return linkTriggerToKill(
    gsap.fromTo(
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
    ),
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

  return linkTriggerToKill(
    gsap.to(state, {
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
    }),
  )
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
  return linkTriggerToKill(
    gsap.fromTo(
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
    ),
  )
}

/**
 * Scroll-scrubbed colour reveal on text (§4). The element carries a two-tone
 * `background-clip: text` gradient (`.text-fill`); this scrubs its
 * background-position tied directly to scroll progress so the copy visibly
 * "fills in" with colour as it passes through the viewport, rather than
 * fading in already-coloured. Under reduced motion it snaps to fully filled.
 *
 * Returns the ScrollTrigger so the caller can kill it on cleanup.
 */
export function scrubTextFill(el: Element): ScrollTrigger | null {
  if (prefersReducedMotion()) {
    gsap.set(el, { backgroundPositionX: "0%" })
    return null
  }
  const tween = gsap.fromTo(
    el,
    { backgroundPositionX: "100%" },
    {
      backgroundPositionX: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
        end: "top 38%",
        scrub: true,
      },
    },
  )
  return tween.scrollTrigger ?? null
}

/**
 * Staggered section entrance: items rise, scale, and settle with a varied
 * stagger (not a flat fade-up). One trigger per section container.
 */
export function sectionEntrance(container: Element, itemSelector: string): gsap.core.Tween {
  const items = container.querySelectorAll(itemSelector)
  const reduced = prefersReducedMotion()
  return linkTriggerToKill(
    gsap.fromTo(
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
    ),
  )
}

/**
 * Landing-hero sky parallax + fade: the gradient moves at a fraction of
 * scroll velocity for depth, then fades and compresses as the next content
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
      // band actually dominates the screen (a fixed 200–300px range
      // finished while the hero still filled most of the viewport,
      // leaving its right half blank).
      gsap.to(sky, {
        opacity: 0,
        scale: 0.85,
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
  return linkTriggerToKill(
    gsap.fromTo(
      el,
      { width: "0%" },
      {
        width: target,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      },
    ),
  )
}
