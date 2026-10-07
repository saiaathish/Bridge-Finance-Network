"use client"

import { useRef } from "react"
import { fadeUp, slideIn, textRise, useGsap } from "@/lib/motion"

export function ApproachSection() {
  const ref = useRef<HTMLElement>(null)

  useGsap(ref, (env, q) => {
    const section = ref.current!
    fadeUp(q("[data-eyebrow]"), env, { trigger: section, start: "top 75%" })
    const [heading] = q("[data-rise]")
    if (heading) textRise(heading, env, { by: "words", trigger: section, start: "top 75%", delay: 0.1 })
    fadeUp(q("[data-fade]"), env, { trigger: section, start: "top 75%", delay: 0.3 })
    q("[data-item]").forEach((item, i) => {
      slideIn(item, env, {
        from: item.dataset.item === "left" ? "left" : "right",
        trigger: section,
        start: "top 75%",
        delay: 0.3 + i * (env.isMobile ? 0.08 : 0.12),
      })
    })
  })

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Narrative */}
          <div>
            <div className="mb-6 md:mb-10">
              <p data-eyebrow className="gsap-hidden type-eyebrow mb-4 text-muted-foreground">/ Building real skills</p>
              <h2 data-rise className="gsap-hidden type-h2 text-foreground">
                We provide the foundation
                <br />
                for a career in <span className="text-muted-foreground">Finance.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p data-fade className="gsap-hidden type-body max-w-md text-foreground/90">
                BFN is a structured pathway into finance built for students at any experience level. Members don&apos;t just study curriculums — they engage with industry professionals, join structured cohorts, discover opportunities across partner organizations, and participate in specialized tracks tailored to their goals.
              </p>
              <p data-fade className="gsap-hidden type-body max-w-md text-foreground/90">
                Every step is designed to build a community where the next generation of finance professionals can grow together.
              </p>
            </div>
          </div>

          {/* Right side - Practice areas */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-7">
            {[
              {
                desk: "Specialized Programs",
                detail: "Explore the various aspects of finance through our curated, hands-on tracks.",
                direction: "right",
              },
              {
                desk: "Cohorts",
                detail: "Join a group of like-minded students to complete a program alongside peers and a dedicated mentor.",
                direction: "left",
              },
              {
                desk: "Partnerships",
                detail: "Access exclusive opportunities sourced through BFN's network of partner organizations.",
                direction: "right",
              },
              {
                desk: "Professional Development",
                detail: "Connect with industry professionals through guest speaker sessions, networking events, and real-world finance exposure.",
                direction: "left",
              },
              {
                desk: "Community",
                detail: "Rise through the ranks from Intern to VP and play an active role in shaping the future of BFN.",
                direction: "right",
              },
            ].map((item, i) => {
              return (
                <div
                  key={i}
                  data-item={item.direction}
                  className="gsap-hidden group border-l border-foreground/30 pl-4 transition-colors duration-300 hover:border-foreground/60 md:pl-8"
                  style={{
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "90%",
                  }}
                >
                  <div className="mb-1 flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="type-title text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      {item.desk}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground md:text-sm">{item.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

