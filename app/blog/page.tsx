"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Calendar, ArrowRight } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Announcement": "bg-[oklch(0.90_0.08_175)] text-[oklch(0.45_0.15_175)]",
  "Recap": "bg-[oklch(0.90_0.08_250)] text-[oklch(0.45_0.15_250)]",
  "Spotlight": "bg-[oklch(0.90_0.08_80)] text-[oklch(0.45_0.15_80)]",
  "Update": "bg-[oklch(0.90_0.05_300)] text-[oklch(0.45_0.15_300)]",
};

export default function Blog() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Blog & News
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Updates from the network.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Competition recaps, member spotlights, chapter announcements, and organizational updates.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container max-w-4xl">
          {blogPosts.length > 0 && (
            <div
              className={`mb-10 p-8 md:p-10 rounded-2xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-xl transition-all duration-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[blogPosts[0].category] || "bg-gray-100 text-gray-600"}`}>
                  {blogPosts[0].category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-[oklch(0.55_0.02_260)]">
                  <Calendar size={13} /> {blogPosts[0].date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[oklch(0.15_0.03_260)] mb-3">
                {blogPosts[0].title}
              </h2>
              <p className="text-[oklch(0.40_0.02_260)] leading-relaxed mb-5">
                {blogPosts[0].excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.65_0.15_175)]">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <div
                key={post.title}
                className={`p-6 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[oklch(0.55_0.02_260)]">{post.date}</span>
                </div>
                <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] mb-2">{post.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_260)] leading-relaxed">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
