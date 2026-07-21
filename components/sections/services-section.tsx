"use client"

import { useReveal } from "@/hooks/use-reveal"
import { wordReveal } from "@/lib/motion"
import gsap from "gsap"
import { useEffect, useRef } from "react"

/**
 * Services — "What BFN Organizes".
 *
 * Template: STEPPED PATH (§1). Learn → Find → Practice → Lead is a genuine
 * progression, not four parallel items, so the numbering encodes real
 * sequence: a connected rail of numbered nodes rather than the free-floating
 * card grid it used to share with the Team section below. Steps reveal
 * left-to-right, reinforcing the direction of the path.
 */

const STEPS = [
  { title: "Learn", description: "Finance fundamentals, templates, and recruiting preparation." },
  { title: "Find", description: "Curated internships, programs, competitions, and deadlines." },
  { title: "Practice", description: "Stock pitches, case work, research briefs, and presentations." },
  { title: "Lead", description: "Chapter roles, team work, local events, and student projects." },
]

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    // gsap.context so the wordReveal ScrollTrigger is reverted (killed) on
    // unmount — killing the tween alone leaves the trigger listening (§4).
    const ctx = gsap.context(() => {
      if (headingRef.current) wordReveal(headingRef.current)
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-14 transition-all duration-700 md:mb-20 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2
            ref={headingRef}
            className="mb-2 font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            What BFN Organizes
          </h2>
          <p className="font-mono text-sm text-muted-foreground md:text-base">
            / One clear path for students entering finance
          </p>
        </div>

        {/* Stepped path: a connecting rail threads the four numbered nodes.
            The rail is the structural signature — it says "sequence", not
            "grid". Horizontal on desktop, vertical on mobile. */}
        <ol className="path" aria-label="The BFN path">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`path-step transition-all duration-700 ${
                isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-8 opacity-0 md:translate-y-0"
              }`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <div className="path-node tabular-figures" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="path-title">{step.title}</h3>
              <p className="path-desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
