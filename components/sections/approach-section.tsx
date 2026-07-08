"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ApproachSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Narrative */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <p className="mb-4 font-mono text-sm text-foreground/60 md:text-base">/ The Wall Street standard</p>
              <h2 className="font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                We operate like
                <br />
                a real <span className="text-foreground/40">firm.</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                BFN is built to mirror the desks, deadlines, and deliverables of high finance. Members don&apos;t just
                study markets, they replicate the actual workflow of a Wall Street firm.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                From pitch books and DCF models to live coverage and investment memos, every project is held to the
                same standard expected on a real trading floor or banking desk.
              </p>
            </div>
          </div>

          {/* Right side - Practice areas */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-7">
            {[
              {
                desk: "Investment Banking",
                detail: "Pitch books, valuation models, and live deal teardowns.",
                direction: "right",
              },
              {
                desk: "Equity Research",
                detail: "Coverage initiations, earnings notes, and price targets.",
                direction: "left",
              },
              {
                desk: "Markets & Trading",
                detail: "Macro views, trade ideas, and risk-managed pitches.",
                direction: "right",
              },
              {
                desk: "Private Capital",
                detail: "LBO models, diligence memos, and IC presentations.",
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
                    <span className="font-mono text-xs text-foreground/60">0{i + 1}</span>
                    <h3 className="font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                      {item.desk}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-foreground/60 md:text-sm">{item.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
