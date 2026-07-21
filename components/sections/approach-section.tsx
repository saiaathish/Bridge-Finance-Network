"use client"

import { useReveal } from "@/hooks/use-reveal"
import { Ledger, type LedgerItem } from "@/components/ledger"

/**
 * Approach — the "we operate like a real firm" section.
 *
 * Template: LEDGER/DATA-GRID (§1). Deliberately NOT the headline-left /
 * prose-right split it used to share with the About section directly above
 * it. A compact statement caps the section, then the four coverage desks
 * render as a real term-sheet line-item table — the natural home for the
 * fintech alignment instinct, and the section's single dominant focal point.
 */

const DESKS: LedgerItem[] = [
  {
    label: "Investment Banking",
    descriptor: "Pitch books, valuation models, and live deal teardowns.",
    detail: "Comps, DCF, and precedent transactions held to sell-side standards.",
    tag: "Desk 01",
  },
  {
    label: "Equity Research",
    descriptor: "Coverage initiations, earnings notes, and price targets.",
    detail: "Published with a rating, thesis, and downside case — like a real note.",
    tag: "Desk 02",
  },
  {
    label: "Markets & Trading",
    descriptor: "Macro views, trade ideas, and risk-managed pitches.",
    detail: "Every idea carries an entry, a stop, and a sizing rationale.",
    tag: "Desk 03",
  },
  {
    label: "Private Capital",
    descriptor: "LBO models, diligence memos, and IC presentations.",
    detail: "Returns bridged across entry, leverage, and exit multiple.",
    tag: "Desk 04",
  },
]

export function ApproachSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section ref={ref} className="w-full overflow-x-clip px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Statement cap — compact, so the ledger stays the focal point */}
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 font-mono text-sm text-muted-foreground md:text-base">
              / The Wall Street standard
            </p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              We operate like a real <span className="text-muted-foreground">firm.</span>
            </h2>
          </div>
          <p
            className={`max-w-sm text-sm leading-relaxed text-foreground/90 transition-all duration-700 md:text-base ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            Members don&apos;t just study markets — they replicate the workflow of a Wall Street
            firm across four coverage desks, each held to the standard of a real trading floor.
          </p>
        </div>

        {/* The four desks as a term-sheet line-item table */}
        <div className="mt-12 md:mt-16">
          <Ledger items={DESKS} />
        </div>
      </div>
    </section>
  )
}
