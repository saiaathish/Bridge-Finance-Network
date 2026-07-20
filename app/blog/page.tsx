"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/data";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const categoryClasses: Record<string, string> = {
  "Announcement": "tier-analyst",
  "Recap": "tier-associate",
  "Spotlight": "tier-senior",
  "Update": "tier-intern",
};

export default function Blog() {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tween = listRef.current && sectionEntrance(listRef.current, "[data-card]");
    return () => {
      tween && tween.kill();
    };
  }, []);

  return (
    <div className="min-h-screen page-surface text-foreground">
      <Navbar />

      <PageHero
        kicker="Blog & News"
        title="Updates from the network."
        accent="network."
        subtitle="Competition recaps, member spotlights, chapter announcements, and organizational updates."
      />

      {/* Posts — Haze band, white cards */}
      <section className="py-20 md:py-24 band-haze">
        <div ref={listRef} className="container max-w-4xl">
          {blogPosts.length > 0 && (
            <div
              data-card
              className="gsap-hidden mb-10 p-8 md:p-10 rounded-xl bg-white border border-border hover:border-muted-foreground transition-colors duration-150"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryClasses[blogPosts[0].category] || "tier-intern"}`}>
                  {blogPosts[0].category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                  <Calendar size={13} /> {blogPosts[0].date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {blogPosts[0].excerpt}
              </p>
              <span className="group inline-flex items-center gap-2 text-sm font-semibold text-signal">
                Read more <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
              </span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.title}
                data-card
                className="gsap-hidden p-6 rounded-xl bg-white border border-border hover:border-muted-foreground transition-colors duration-150"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryClasses[post.category] || "tier-intern"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
