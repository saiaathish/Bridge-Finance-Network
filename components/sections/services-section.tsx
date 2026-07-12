"use client"

import { useReveal } from "@/hooks/use-reveal"
import { wordReveal } from "@/lib/motion"
import { useEffect, useRef } from "react"

export function ServicesSection() {
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
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 ref={headingRef} className="mb-2 font-display text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl">
            What BFN Organizes
          </h2>
          <p className="font-mono text-sm text-muted-foreground md:text-base">
            / One clear path for students entering finance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Learn",
              description: "Finance fundamentals, templates, and recruiting preparation.",
              direction: "top",
            },
            {
              title: "Find",
              description: "Curated internships, programs, competitions, and deadlines.",
              direction: "right",
            },
            {
              title: "Practice",
              description: "Stock pitches, case work, research briefs, and presentations.",
              direction: "left",
            },
            {
              title: "Lead",
              description: "Chapter roles, team work, local events, and student projects.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.description}</p>
    </div>
  )
}
