"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { TeamTabs } from "@/components/team/TeamTabs";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { teamCategories, teamMembers, type TeamCategory } from "@/lib/team-data";
import { contentSwitch, heroIntro } from "@/lib/motion";

const ID_PREFIX = "directory";

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>(teamCategories[0]);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const members = teamMembers.filter((member) => member.category === activeCategory);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const tween = heroIntro(headerRef.current.querySelectorAll("[data-header-item]"));
    return () => {
      tween.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    // The Interns list is long enough that the usual stagger takes many
    // seconds to finish — show it instantly instead. Every other tab keeps
    // the normal staggered reveal.
    const tween = contentSwitch(gridRef.current.querySelectorAll("[data-card]"), {
      instant: activeCategory === "Interns",
    });
    return () => {
      tween.kill();
    };
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />

      {/* Simple page header + directory — no landing-style hero, just the
          title, subtitle, tabs, and cards, matching the homepage's own
          colors and spacing (this page intentionally isn't scoped to the
          muted `.inner-page` navy palette used on the other inner pages). */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="container">
          <div ref={headerRef} className="mb-10 max-w-2xl md:mb-12">
            <h1 data-header-item className="gsap-hidden font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Meet the <span className="accent-word">Team</span>
            </h1>
            <p data-header-item className="gsap-hidden mt-4 text-lg text-muted-foreground">
              Meet the people building Bridge Finance Network.
            </p>
          </div>

          <TeamTabs categories={teamCategories} active={activeCategory} onChange={setActiveCategory} idPrefix={ID_PREFIX} />

          <div
            key={activeCategory}
            ref={gridRef}
            role="tabpanel"
            id={`${ID_PREFIX}-panel-${activeCategory}`}
            aria-labelledby={`${ID_PREFIX}-tab-${activeCategory}`}
            tabIndex={0}
          >
            {members.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <div data-card className="gsap-hidden rounded-xl border border-border bg-white p-12 text-center">
                <p className="text-muted-foreground">Team members will be added soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social/contact bar only — no Organization/Programs/Access link
          columns above it, matching the shared Footer's own bottom row. */}
      <footer className="bg-card border-t border-border text-muted-foreground">
        <div className="container py-16">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Bridge Finance Network. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/bridge-finance-network/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-signal transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bridgefinancenetwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-signal transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="mailto:bridgefinancenetwork@gmail.com"
                className="text-muted-foreground hover:text-signal transition-colors text-xs"
              >
                bridgefinancenetwork@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
