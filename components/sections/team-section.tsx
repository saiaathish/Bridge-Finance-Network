"use client"

import { useReveal } from "@/hooks/use-reveal"

export function TeamSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Team
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Students leading the desks</p>
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
                <div className="mb-4 flex aspect-square items-center justify-center rounded-2xl border border-foreground/15 bg-foreground/10 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-foreground/20">
                  <span className="font-sans text-4xl font-light text-foreground/70 md:text-5xl">0{i + 1}</span>
                </div>
                <h3 className="mb-1 font-sans text-lg font-light text-foreground md:text-xl">{member.name}</h3>
                <p className="mb-2 font-mono text-xs text-foreground/60">{member.role}</p>
                <p className="text-sm leading-relaxed text-foreground/80">{member.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
