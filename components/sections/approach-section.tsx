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
                We teach the
                <br />
                entrance for <span className="text-muted-foreground">Finance.</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                BFN is a structured pathway into finance built for students with no prior experience. Members don&apos;t just read about markets, they research real companies, build investment theses, and present stock pitches to a live committee.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Every assignment is designed to develop the analytical habits that matter in finance: asking the right questions, backing your thesis with data, and communicating your ideas clearly.
              </p>
            </div>
          </div>

          {/* Right side - Practice areas */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-7">
            {[
              {
                desk: "Financial Research",
                detail: "Company deep dives, industry analysis, and investment theses.",
                direction: "right",
              },
              {
                desk: "Stock Pitching",
                detail: "Price targets, relative valuation, and live pitch presentations.",
                direction: "left",
              },
              {
                desk: "Financial Literacy",
                detail: "Markets, accounting fundamentals, and basics of financing.",
                direction: "right",
              },
              {
                desk: "Professional Development",
                detail: "Guest speakers, networking opportunities, and real-world exposure to the finance industry.",
                direction: "left",
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

