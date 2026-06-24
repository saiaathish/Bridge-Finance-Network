"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { Lock, Wrench, BookOpen, Youtube, Rocket, Headphones, ArrowRight } from "lucide-react";

const categories = [
  { name: "Tools", icon: <Wrench size={24} />, description: "Financial modeling templates, valuation frameworks, and productivity tools." },
  { name: "Reading Lists", icon: <BookOpen size={24} />, description: "Curated books and articles on investing, banking, and career development." },
  { name: "YouTube Channels", icon: <Youtube size={24} />, description: "Educational finance content from industry professionals and educators." },
  { name: "Programs", icon: <Rocket size={24} />, description: "External programs, bootcamps, and structured learning opportunities." },
  { name: "Podcasts", icon: <Headphones size={24} />, description: "Finance and career podcasts recommended by BFN members and advisors." },
];

export default function Resources() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Resource Library
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Everything you need to get ahead.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Curated tools, reading lists, programs, and more — all vetted by BFN members and advisors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container max-w-4xl">
          <div className="space-y-4">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className={`group relative p-6 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center text-[oklch(0.65_0.15_175)]">
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] text-lg">{cat.name}</h3>
                      <div className="flex items-center gap-1.5 text-[oklch(0.55_0.02_260)]">
                        <Lock size={13} />
                        <span className="text-xs">Members Only</span>
                      </div>
                    </div>
                    <p className="text-sm text-[oklch(0.45_0.02_260)] mt-1">{cat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-[oklch(0.15_0.03_260)] text-center">
            <Lock size={24} className="text-white/30 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Sign in to access the full library
            </h3>
            <p className="text-white/60 text-sm max-w-md mx-auto mb-6">
              Approved members get direct links to all resources, tools, and curated content.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.75_0.15_175)] text-[oklch(0.15_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97]"
              >
                Sign In <ArrowRight size={14} />
              </Link>
              <Link
                href="/open-roles"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                Apply to Join
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
