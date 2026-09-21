"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { HomeHeader } from "@/components/HomeHeader";
import { MagneticButton } from "@/components/magnetic-button";
import Footer from "@/components/Footer";
import { partners } from "@/lib/partners-data";
import { contentSwitch, heroIntro } from "@/lib/motion";

const CONTACT_EMAIL = "bridgefinancenetwork@gmail.com";

export default function PartnersPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    if (!ctaRef.current) return;
    const tween = heroIntro(ctaRef.current.querySelectorAll("[data-header-item]"));
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
                  className="gsap-hidden flex w-full flex-col items-center rounded-xl border border-border bg-white p-6 text-center transition-colors duration-150 hover:border-muted-foreground"
                >
                  <div className="relative flex h-40 w-full items-center justify-center">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-2"
                      />
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {partner.name}
                      </span>
                    )}
                  </div>

                  <div className="mt-3">
                    <h3 className="font-sans text-lg font-semibold text-foreground">{partner.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              ref={ctaRef}
              className="mt-16 rounded-2xl border border-border bg-card px-8 py-12 text-center md:mt-20 md:px-16 md:py-16"
            >
              <h2 data-header-item className="gsap-hidden font-display text-3xl font-medium leading-tight text-foreground md:text-4xl">
                Want to join the <span className="accent-word">Coalition?</span>
              </h2>
              <p data-header-item className="gsap-hidden mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether you&apos;re a student organization, nonprofit, company, educator, or community organization, we&apos;d love to hear what you&apos;re working on and explore how we could collaborate.
              </p>
              <div data-header-item className="gsap-hidden mt-8">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(`mailto:${CONTACT_EMAIL}`)}
                >
                  <span className="group flex items-center justify-center gap-2">
                    Reach Out
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
