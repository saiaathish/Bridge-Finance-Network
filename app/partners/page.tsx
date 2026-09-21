"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { partners } from "@/lib/partners-data";
import { contentSwitch, heroIntro } from "@/lib/motion";

export default function PartnersPage() {
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
                Our <span className="accent-word">Partners</span>
              </h1>
              <p data-header-item className="gsap-hidden mt-4 text-lg text-muted-foreground">
                The organizations that help make BFN&apos;s mission possible.
              </p>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map(partner => (
                <div
                  key={partner.id}
                  data-card
                  className="gsap-hidden flex w-full flex-col items-center rounded-xl border border-border bg-white p-8 text-center transition-colors duration-150 hover:border-muted-foreground"
                >
                  <div className="flex h-24 w-full items-center justify-center rounded-lg border border-border bg-card p-4">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={160}
                        height={80}
                        className="max-h-16 w-auto max-w-full object-contain"
                      />
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {partner.name}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-sans text-lg font-semibold text-foreground">{partner.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
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
