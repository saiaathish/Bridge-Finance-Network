"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";

function ImpactStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isInView } = useInView();
  const count = useCountUp(value, 2000, isInView);

  return (
    <div ref={ref} data-card className="gsap-hidden p-8 rounded-xl bg-white border border-border text-center">
      <div className="font-mono text-5xl md:text-6xl text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{label}</div>
    </div>
  );
}

export default function Impact() {
  const statsRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tweens = [
      statsRef.current && sectionEntrance(statsRef.current, "[data-card]"),
      panelRef.current && sectionEntrance(panelRef.current, "[data-row]"),
    ];
    return () => {
      tweens.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen page-surface text-foreground">
      <Navbar />

      <PageHero
        kicker="Our Impact"
        title="Measuring what matters."
        accent="matters."
        subtitle="Since our founding, BFN has grown into a national network of students building real finance experience."
      />

      {/* Stats — Haze band, white data cards */}
      <section className="py-20 md:py-24 bg-card">
        <div className="container">
          <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ImpactStat value={200} suffix="+" label="Student Members" />
            <ImpactStat value={3} suffix="" label="Active Chapters" />
            <ImpactStat value={3} suffix="" label="States Represented" />
            <ImpactStat value={50} suffix="+" label="Opportunities Curated" />
          </div>

          <div ref={panelRef} className="p-10 rounded-xl bg-white border border-border">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div data-row className="gsap-hidden">
                <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                  Growing every semester
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  BFN is expanding to new schools, adding more curated opportunities, and building deeper curriculum every month. Our goal is to make high-quality finance education accessible to any motivated student, regardless of their school or background.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Chapters launching Fall 2026", value: "5+" },
                  { label: "New opportunities added monthly", value: "10+" },
                  { label: "Guest speaker sessions completed", value: "8" },
                ].map((item) => (
                  <div key={item.label} data-row className="gsap-hidden flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="font-mono text-signal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
