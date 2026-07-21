"use client"

import { useReveal } from "@/hooks/use-reveal"
import { wordReveal } from "@/lib/motion"
import gsap from "gsap"
import { useEffect, useRef } from "react"

/**
 * Team preview — desk leadership.
 *
 * Template: DATA-CARD GRID (§1). A strict internal skeleton (glyph, name,
 * role, hairline divider, tabular stat) repeated across four cards so every
 * field lines up column-to-column — distinct from the stepped path above it
 * and from the ledger earlier on the page. The "stat" is the desk each lead
 * runs, kept honest: an index tag, not an invented headcount.
 */

const LEADS = [
  { glyph: "01", name: "Founder & President", role: "Sets the vision and leads chapter growth.", deskLabel: "Strategy", desk: "—" },
  { glyph: "02", name: "Head of Research", role: "Oversees coverage and publishing standards.", deskLabel: "Desk", desk: "02" },
  { glyph: "03", name: "Head of Banking", role: "Runs modeling and pitch book training.", deskLabel: "Desk", desk: "01" },
  { glyph: "04", name: "Head of Markets", role: "Leads trade ideas and risk frameworks.", deskLabel: "Desk", desk: "03" },
]

export function TeamSection() {
  const { ref, isVisible } = useReveal(0.3)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    // gsap.context so the wordReveal ScrollTrigger is reverted on unmount (§4).
    const ctx = gsap.context(() => {
      if (headingRef.current) wordReveal(headingRef.current)
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2
            ref={headingRef}
            className="mb-2 font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Our Team
          </h2>
          <p className="font-mono text-sm text-muted-foreground md:text-base">/ Students leading the desks</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADS.map((lead, i) => (
            <div
              key={lead.name}
              className={`transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <article className="data-card hover-wiggle">
                <div className="data-card-top">
                  <span className="wiggle-target data-card-glyph">{lead.glyph}</span>
                  <span className="data-card-tier">Lead</span>
                </div>
                <h3 className="data-card-name">{lead.name}</h3>
                <p className="data-card-role">{lead.role}</p>
                <div className="data-card-foot">
                  <span className="data-card-foot-label">{lead.deskLabel}</span>
                  <span className="data-card-foot-value">{lead.desk}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
