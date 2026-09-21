"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ApproachSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Narrative */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
                }`}
            >
              <p className="mb-4 font-mono text-sm text-muted-foreground md:text-base">/ Building real skills</p>
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                We provide the foundation
                <br />
                for a career in <span className="text-muted-foreground">Finance.</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                BFN is a structured pathway into finance built for students at any experience level. Members don&apos;t just study curriculums — they engage with industry professionals, join structured cohorts, discover opportunities across partner organizations, and participate in specialized tracks tailored to their goals.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
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
              const getRevealClass = () => {
                if (!isVisible) {
                  return item.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`group border-l border-foreground/30 pl-4 transition-all duration-700 hover:border-foreground/60 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "90%",
                  }}
                >
                  <div className="mb-1 flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <h3 className="font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
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

