"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolio } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const { ref, isInView } = useInView();
  const { ref: summaryRef, isInView: summaryVisible } = useInView();

  const totalValue = portfolio.reduce((sum, p) => sum + p.current * 100, 0);
  const totalCost = portfolio.reduce((sum, p) => sum + p.entry * 100, 0);
  const totalGain = totalValue - totalCost;
  const totalGainPct = ((totalGain / totalCost) * 100).toFixed(2);

  const gainCount = useCountUp(Math.round(totalGain), 2000, summaryVisible);
  const valueCount = useCountUp(Math.round(totalValue), 2000, summaryVisible);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-[oklch(0.12_0.03_260)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.15 175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.15 175) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider">
              Paper Trading
            </span>
            <div className="px-2.5 py-1 rounded-full bg-[oklch(0.75_0.15_150/0.1)] border border-[oklch(0.75_0.15_150/0.2)]">
              <span className="text-[oklch(0.75_0.15_150)] text-xs font-semibold flex items-center gap-1">
                <TrendingUp size={11} /> Live
              </span>
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            BFN Portfolio
          </h1>
          <p className="text-lg text-white/55 max-w-2xl">
            Active equity positions managed by BFN members. Fully public — track our performance.
          </p>
        </div>
      </section>

      {/* Summary Dashboard */}
      <section className="bg-[oklch(0.15_0.03_260)] border-b border-white/5">
        <div ref={summaryRef} className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[oklch(0.18_0.03_260)] border border-white/5">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">Portfolio Value</p>
              <p className="font-display text-3xl font-bold text-white">
                ${summaryVisible ? valueCount.toLocaleString("en-US") : "0"}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[oklch(0.18_0.03_260)] border border-[oklch(0.75_0.15_150/0.15)]">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">Total Gain/Loss</p>
              <p className="font-display text-3xl font-bold text-[oklch(0.75_0.15_150)]">
                +${summaryVisible ? gainCount.toLocaleString("en-US") : "0"}
                <span className="text-lg ml-2 text-[oklch(0.75_0.15_80)]">({totalGainPct}%)</span>
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[oklch(0.18_0.03_260)] border border-white/5">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2 font-medium">Active Positions</p>
              <p className="font-display text-3xl font-bold text-white">{portfolio.length}</p>
              <p className="text-xs text-white/30 mt-1">Updated weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Table */}
      <section className="py-16 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container">
          <div className="overflow-x-auto rounded-xl border border-[oklch(0.92_0.005_260)] bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[oklch(0.92_0.005_260)] bg-[oklch(0.97_0.002_260)]">
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">Ticker</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">Company</th>
                  <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">Entry</th>
                  <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">Current</th>
                  <th className="text-right px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">Return</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[oklch(0.50_0.02_260)]">Thesis</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((pos, i) => {
                  const gain = pos.current - pos.entry;
                  const gainPct = ((gain / pos.entry) * 100).toFixed(1);
                  const isPositive = gain >= 0;
                  return (
                    <tr
                      key={pos.ticker}
                      className={`border-b border-[oklch(0.95_0.002_260)] hover:bg-[oklch(0.97_0.002_260)] transition-all ${
                        isInView ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transitionDelay: `${i * 60}ms`, transitionDuration: "500ms" }}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[oklch(0.15_0.03_260)] flex items-center justify-center">
                            <span className="text-[10px] font-bold text-[oklch(0.75_0.15_175)]">{pos.ticker.slice(0, 2)}</span>
                          </div>
                          <span className="font-display font-bold text-[oklch(0.15_0.03_260)]">{pos.ticker}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-[oklch(0.35_0.02_260)]">{pos.company}</td>
                      <td className="px-6 py-5 text-right text-sm text-[oklch(0.45_0.02_260)] font-mono">${pos.entry.toFixed(2)}</td>
                      <td className="px-6 py-5 text-right text-sm font-medium text-[oklch(0.15_0.03_260)] font-mono">${pos.current.toFixed(2)}</td>
                      <td className="px-6 py-5 text-right">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          isPositive
                            ? "bg-[oklch(0.92_0.08_150)] text-[oklch(0.40_0.15_150)]"
                            : "bg-red-50 text-red-600"
                        }`}>
                          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                          {isPositive ? "+" : ""}{gainPct}%
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-[oklch(0.45_0.02_260)] max-w-[220px]">{pos.thesis}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-[oklch(0.55_0.02_260)]">
              Last updated: June 16, 2026 · Paper trading only — no real capital at risk.
            </p>
            <div className="flex items-center gap-1 text-xs text-[oklch(0.55_0.02_260)]">
              <ArrowUpRight size={12} className="text-[oklch(0.75_0.15_175)]" />
              All positions are positive
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
