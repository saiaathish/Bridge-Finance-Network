"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { speakers } from "@/lib/speakers-data";
import { contentSwitch, heroIntro } from "@/lib/motion";

export default function GuestSpeakersPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const tween = heroIntro(headerRef.current.querySelectorAll("[data-header-item]"));
    return () => {
      tween.kill();
    };
  }, []);

  useLayoutEffect(() => {
    if (!gridRef.current) return;
    const tween = contentSwitch(gridRef.current.querySelectorAll("[data-card]"));
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHeader />

      <main>
        <section className="pt-32 pb-20 md:pt-36 md:pb-24">
          <div className="container">
            <div ref={headerRef} className="mb-10 max-w-2xl md:mb-12">
              <h1 data-header-item className="gsap-hidden font-display text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Guest <span className="accent-word">Speakers</span>
              </h1>
              <p data-header-item className="gsap-hidden mt-4 text-lg text-muted-foreground">
                Hear from industry professionals across various fields of finance.
              </p>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map(speaker => (
                <div
                  key={speaker.id}
                  data-card
                  className="gsap-hidden flex flex-col rounded-xl border border-border bg-white p-6 transition-colors duration-150 hover:border-muted-foreground"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-card">
                      {speaker.photo ? (
                        <Image
                          src={speaker.photo}
                          alt={`Portrait of ${speaker.name}`}
                          width={64}
                          height={64}
                          sizes="64px"
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <User size={22} className="text-muted-foreground" strokeWidth={1.5} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-sans text-lg font-semibold text-foreground">{speaker.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-signal">{speaker.title}</p>
                      <p className="text-sm text-muted-foreground">{speaker.organization}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>

                  {speaker.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {speaker.tags.map(tag => (
                        <span
                          key={tag}
                          className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
