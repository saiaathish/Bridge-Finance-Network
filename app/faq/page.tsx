"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqItems } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { useLayoutEffect, useRef } from "react";

export default function FAQ() {
  const statsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tweens = [
      statsRef.current && sectionEntrance(statsRef.current, "[data-card]"),
      listRef.current && sectionEntrance(listRef.current, "[data-card]"),
    ];
    return () => {
      tweens.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground inner-page">
      <Navbar />

      <PageHero
        kicker="FAQ"
        title="Frequently asked questions."
        accent="questions."
        subtitle="Everything you need to know about joining and participating in Bridge Finance Network."
      />

      {/* Questions — Haze band */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-3xl">
          <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-12">
            {[
              { label: "Response Time", value: "48hrs" },
              { label: "Grade Levels", value: "9-12" },
              { label: "Time/Week", value: "2-4hrs" },
            ].map(item => (
              <div key={item.label} data-card className="gsap-hidden text-center p-4 rounded-xl bg-white border border-border">
                <p className="font-mono text-xl text-signal">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div ref={listRef}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  data-card
                  className="gsap-hidden bg-white border border-border rounded-xl px-6 data-[state=open]:border-muted-foreground transition-colors duration-150"
                >
                  <AccordionTrigger className="text-left font-sans font-semibold text-foreground hover:text-signal py-5 text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 p-10 rounded-xl bg-white border border-border text-center">
            <HelpCircle size={28} className="text-signal mx-auto mb-4" />
            <h3 className="font-display text-xl font-medium text-foreground mb-3">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Reach out to us directly and we&apos;ll get back to you within 48 hours.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150"
            >
              Contact Us <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
