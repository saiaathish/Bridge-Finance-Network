"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Headline clip reveal: each word sits inside an overflow-hidden container
 * and rises from translateY(105%) to 0 — no opacity change. Words are grouped
 * into visual lines at runtime and staggered 0.08s per line. Fires once.
 */
export function RevealHeading({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>("[data-word]"));

    // Group words into lines by their vertical offset
    const lines = new Map<number, HTMLElement[]>();
    words.forEach((w) => {
      const top = w.offsetTop;
      if (!lines.has(top)) lines.set(top, []);
      lines.get(top)!.push(w);
    });
    const lineGroups = [...lines.values()];

    gsap.set(words, { yPercent: 105 });
    const tweens: gsap.core.Tween[] = [];
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        lineGroups.forEach((group, i) => {
          tweens.push(
            gsap.to(group, {
              yPercent: 0,
              duration: 0.9,
              ease: "power4.out",
              // 0.15s behind the eyebrow line draw, +0.08s per line
              delay: 0.15 + i * 0.08,
            }),
          );
        });
      },
    });
    return () => {
      st.kill();
      tweens.forEach((t) => t.kill());
      gsap.set(words, { yPercent: 0 });
    };
  }, [text]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom">
          <span data-word className="inline-block">
            {word}
            {" "}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Eyebrow label: accent text with a static 24px rule to its left.
 * The rule draws in via scaleX(0 → 1) over 0.6s before the headline rises.
 */
export function Eyebrow({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const line = ref.current?.querySelector("[data-line]");
    if (!line || prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <span ref={ref} className={`eyebrow ${className}`}>
      <span data-line className="eyebrow-line" aria-hidden="true" />
      {text}
    </span>
  );
}

/**
 * Scroll reveal. Default (body text): opacity 0→1, y 20→0, 0.7s power2.out —
 * a softer secondary moment. variant="item" (cards / list items): opacity
 * 0→1, x -16→0, 0.5s power2.out; stagger via the delay prop. Fires once.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "body",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "body" | "item";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    const from = variant === "item" ? { x: -16, opacity: 0 } : { y: 20, opacity: 0 };
    const to =
      variant === "item"
        ? { x: 0, opacity: 1, duration: 0.5 }
        : { y: 0, opacity: 1, duration: 0.7 };
    const tween = gsap.fromTo(ref.current, from, {
      ...to,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Stat count-up: number increments 0 → value over 1.4s power1.inOut once in
 * view; any suffix/symbol is present from the instant the count starts.
 */
export function CountUp({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      ref.current.textContent = `${value}${suffix}`;
      return;
    }
    const counter = { n: 0 };
    const el = ref.current;
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.4,
      ease: "power1.inOut",
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/**
 * Nav entrance on initial page load only (not scroll-triggered).
 * Logo at 0s, links stagger 0.06s from 0.2s, CTA last.
 */
export function useNavEntrance(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = scope.current;
    if (!root || prefersReducedMotion()) return;
    const logo = root.querySelectorAll("[data-nav-logo]");
    const links = root.querySelectorAll("[data-nav-link]");
    const cta = root.querySelectorAll("[data-nav-cta]");
    const from = { opacity: 0, y: -8 };
    const tweens = [
      gsap.fromTo(logo, from, { opacity: 1, y: 0, duration: 0.4 }),
      gsap.fromTo(links, from, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.2,
        stagger: 0.06,
      }),
      gsap.fromTo(cta, from, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.2 + links.length * 0.06 + 0.4,
      }),
    ];
    return () => tweens.forEach((t) => t.kill());
  }, [scope]);
}
