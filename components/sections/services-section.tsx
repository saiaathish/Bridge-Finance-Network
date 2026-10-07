"use client"

import { cardsIn, drawRule, fadeUp, textRise, useGsap } from "@/lib/motion"
import { APPLICATION_URL } from "@/lib/constants"
import { useRef } from "react"

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)

  useGsap(ref, (env, q) => {
    const section = ref.current!
    const [heading] = q("[data-rise]")
    if (heading) textRise(heading, env, { by: "words", trigger: section, start: "top 75%" })
    fadeUp(q("[data-eyebrow]"), env, { trigger: section, start: "top 75%", delay: 0.3 })
    cardsIn(q("[data-card]"), env)
    drawRule(q("[data-rule]"), env, { trigger: section, start: "top 60%", delay: 0.4 })
  })

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h2 data-rise className="gsap-hidden type-h2 mb-2 text-foreground">
            Specialized programs we offer
          </h2>
          <p data-eyebrow className="gsap-hidden type-eyebrow text-muted-foreground">
            / One clear path for students entering finance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
          {[
            {
              title: "Intro to Investment",
              description: "Learn the stock market and intro to pitching your stock.",
              direction: "top",
            },
            {
              title: "Fundamentals of Financial Literacy",
              description: "Learn how to save, budget, invest, and spend wisely.",
              direction: "right",
            },
            {
              title: "Basics of Accounting",
              description: "Learn how accounting works in the financial industry and why it is the language of finance",
              direction: "left",
            },
            {
              title: "Valuation Modeling",
              description: "Provided by our trusted partner Wall Street Oasis at zero cost. Learn how valuation modeling works in big banks.",
              direction: "bottom",
            },
          ].map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; description: string; direction: string }
  index: number
}) {
  return (
    <div data-card className="gsap-hidden group">
      <div className="mb-3 flex items-center gap-3">
        <div data-rule className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <h3
        onClick={() => window.open(APPLICATION_URL, "_blank")}
        className="type-title mb-2 cursor-pointer text-foreground"
      >
        {service.title}
      </h3>
      <p className="type-card max-w-sm text-foreground/80">{service.description}</p>
    </div>
  )
}
