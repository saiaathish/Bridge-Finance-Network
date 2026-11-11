"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { TeamTabs } from "@/components/team/TeamTabs";
import { CompactMemberCard, TeamMemberCard } from "@/components/team/TeamMemberCard";
import { teamCategories, teamMembers, type TeamCategory } from "@/lib/team-data";
import { contentSwitch, heroIntro } from "@/lib/motion";

const ID_PREFIX = "directory";

export default function Directory() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>(teamCategories[0]);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const members = teamMembers.filter((member) => member.category === activeCategory);
  // Members is a long, text-only list, so every card there is compact.
  // Elsewhere, only roster-only people (no hand-written card) are compact.
  const isCompact = (member: (typeof members)[number]) =>
    activeCategory === "Members" || member.rosterOnly === true;
  const compactGrid = members.length > 0 && members.every(isCompact);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const tween = heroIntro(headerRef.current.querySelectorAll("[data-header-item]"));
    return () => {
      tween.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    // The Members list is long enough that the usual stagger takes many
    // seconds to finish — show it instantly instead. Every other tab keeps
    // the normal staggered reveal.
    const tween = contentSwitch(gridRef.current.querySelectorAll("[data-card]"), {
      instant: activeCategory === "Members",
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
            <h1 data-header-item className="font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Meet the <span className="accent-word">Team</span>
            </h1>
            <p data-header-item className="mt-4 text-lg text-muted-foreground">
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
              <div
                className={
                  compactGrid
                    ? "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
                    : `grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                        // C-Suite cards keep matching heights; on other teams each
                        // card sizes to its own content.
                        activeCategory === "C-Suite" ? "" : "items-start"
                      }`
                }
              >
                {members.map((member) =>
                  isCompact(member) ? (
                    <CompactMemberCard key={member.id} member={member} />
                  ) : (
                    <TeamMemberCard key={member.id} member={member} />
                  ),
                )}
              </div>
            ) : (
              <div data-card className="rounded-xl border border-border bg-white p-12 text-center">
                <p className="text-muted-foreground">Team members will be added soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
