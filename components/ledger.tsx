"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export interface LedgerItem {
  /** Line-item label — the desk / program name. */
  label: string
  /** One-line descriptor sitting in the middle column. */
  descriptor: string
  /** Extra line revealed on row hover — a term-sheet-style detail. */
  detail: string
  /** Right-aligned tag (e.g. a coverage count or category). Tabular. */
  tag?: string
}

/**
 * Ledger — a term-sheet / research-note line-item table (§1).
 *
 * Each row is a hairline-ruled line item: a tabular index, a label and a
 * descriptor on a strict alignment grid, an optional right-aligned tabular
 * tag, and one more line of detail that reveals on hover rather than a full
 * card flip. This is the fintech "alignment discipline" tell — every rule,
 * number, and column lines up.
 *
 * Rows enter with a scrubless, staggered rise scoped to a gsap.context so the
 * ScrollTrigger is reverted on unmount (no accumulation across route changes).
 */
export function Ledger({ items }: { items: LedgerItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-ledger-row]")
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduced) {
        gsap.set(rows, { autoAlpha: 1, y: 0 })
        return
      }
      const mm = gsap.matchMedia()
      mm.add(
        { isDesktop: "(min-width: 768px)", isMobile: "(max-width: 767px)" },
        (self) => {
          const { isMobile } = self.conditions as { isMobile: boolean }
          gsap.fromTo(
            rows,
            { autoAlpha: 0, y: isMobile ? 12 : 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.4 : 0.6,
              ease: "power3.out",
              stagger: isMobile ? 0.05 : 0.09,
              scrollTrigger: { trigger: root, start: "top 82%", once: true },
            },
          )
        },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="ledger" role="table" aria-label="Coverage desks">
      {items.map((item, i) => (
        <div
          key={item.label}
          data-ledger-row
          className="ledger-row gsap-hidden group"
          role="row"
        >
          <span className="ledger-index tabular-figures" role="cell" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="ledger-body" role="cell">
            <div className="ledger-head">
              <h3 className="ledger-label">{item.label}</h3>
              {item.tag && (
                <span className="ledger-tag tabular-figures" aria-hidden="true">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="ledger-descriptor">{item.descriptor}</p>
            {/* Revealed on hover / focus — one more line, not a card flip */}
            <p className="ledger-detail" tabIndex={0}>
              <span>{item.detail}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
