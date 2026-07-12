"use client"

import { useReveal } from "@/hooks/use-reveal"
import { wordReveal } from "@/lib/motion"
import { useEffect, useRef } from "react"

export function TeamSection() {
  const { ref, isVisible } = useReveal(0.3)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    const tween = wordReveal(headingRef.current)
    return () => {
      tween.kill()
    }
  }, [])

  return (
    <section
      ref={ref}
      className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 ref={headingRef} className="mb-2 font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Team
          </h2>
          <p className="font-mono text-sm text-muted-foreground md:text-base">/ Students leading the desks</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-x-12 md:gap-y-12">
          {[
            {
              name: "Founder & President",
              role: "Strategy & Partnerships",
              detail: "Sets the vision and leads chapter growth.",
              direction: "top",
            },
            {
              name: "Head of Research",
              role: "Equity Research Desk",
              detail: "Oversees coverage and publishing standards.",
              direction: "bottom",
            },
            {
              name: "Head of Banking",
              role: "Investment Banking Desk",
              detail: "Runs modeling and pitch book training.",
              direction: "top",
            },
            {
              name: "Head of Markets",
              role: "Trading & Macro Desk",
              detail: "Leads trade ideas and risk frameworks.",
              direction: "bottom",
            },
          ].map((member, i) => {
            const getRevealClass = () => {
              if (!isVisible) {
                return member.direction === "top" ? "-translate-y-16 opacity-0" : "translate-y-16 opacity-0"
              }
              return "translate-y-0 opacity-100"
            }

            return (
              <div
                key={i}
                className={`group transition-all duration-700 ${getRevealClass()}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="hover-wiggle mb-4 flex aspect-square items-center justify-center rounded-xl border border-border bg-card transition-colors duration-150 group-hover:border-muted-foreground">
                  <span className="wiggle-target font-mono text-4xl text-muted-foreground md:text-5xl">0{i + 1}</span>
                </div>
                <h3 className="mb-1 font-sans text-lg font-medium text-foreground md:text-xl">{member.name}</h3>
                <p className="mb-2 font-mono text-xs text-muted-foreground">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
