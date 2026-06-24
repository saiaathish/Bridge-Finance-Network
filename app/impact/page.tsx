"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

function ImpactStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, isInView } = useInView();
  const count = useCountUp(value, 2000, isInView);

  return (
    <div
      ref={ref}
      className="p-8 rounded-2xl bg-white border border-[oklch(0.92_0.005_260)] text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="font-display text-5xl md:text-6xl font-bold text-[oklch(0.65_0.15_175)] mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-[oklch(0.45_0.02_260)] uppercase tracking-wider font-medium">{label}</div>
    </div>
  );
}

export default function Impact() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Our Impact
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Measuring what matters.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Since our founding, BFN has grown into a national network of students building real finance experience.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ImpactStat value={200} suffix="+" label="Student Members" delay={0} />
            <ImpactStat value={3} suffix="" label="Active Chapters" delay={100} />
            <ImpactStat value={3} suffix="" label="States Represented" delay={200} />
            <ImpactStat value={50} suffix="+" label="Opportunities Curated" delay={300} />
          </div>

          <div
            className={`p-10 rounded-2xl bg-[oklch(0.15_0.03_260)] transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Growing every semester
                </h2>
                <p className="text-white/60 leading-relaxed">
                  BFN is expanding to new schools, adding more curated opportunities, and building deeper curriculum every month. Our goal is to make high-quality finance education accessible to any motivated student, regardless of their school or background.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Chapters launching Fall 2026", value: "5+" },
                  { label: "New opportunities added monthly", value: "10+" },
                  { label: "Guest speaker sessions completed", value: "8" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-lg bg-[oklch(0.20_0.03_260)] border border-white/5">
                    <span className="text-sm text-white/70">{item.label}</span>
                    <span className="font-display font-bold text-[oklch(0.75_0.15_175)]">{item.value}</span>
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
