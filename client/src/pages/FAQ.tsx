import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqItems } from "@/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight, HelpCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function FAQ() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.12_0.03_260)] relative overflow-hidden">
        {/* Bridge arch accent */}
        <div className="absolute top-20 right-10 w-[300px] h-[150px] opacity-[0.04]">
          <svg viewBox="0 0 300 150" fill="none" className="w-full h-full">
            <path d="M10 140 Q150 10 290 140" stroke="oklch(0.75 0.15 175)" strokeWidth="2" fill="none" />
            <path d="M40 140 Q150 30 260 140" stroke="oklch(0.75 0.15 80)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="container relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Frequently asked questions.
          </h1>
          <p className="text-lg text-white/55 max-w-2xl">
            Everything you need to know about joining and participating in Bridge Finance Network.
          </p>
        </div>
      </section>

      {/* Diagonal transition */}
      <div className="bg-[oklch(0.98_0.002_260)]">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full -mt-1" preserveAspectRatio="none">
          <path d="M0 0L1440 40L1440 0Z" fill="oklch(0.12 0.03 260)" />
        </svg>
      </div>

      <section className="py-16 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container max-w-3xl">
          {/* Quick stats */}
          <div className={`grid grid-cols-3 gap-4 mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {[
              { label: "Response Time", value: "48hrs" },
              { label: "Grade Levels", value: "9-12" },
              { label: "Time/Week", value: "2-4hrs" },
            ].map(item => (
              <div key={item.label} className="text-center p-4 rounded-xl bg-white border border-[oklch(0.92_0.005_260)]">
                <p className="font-display text-xl font-bold text-[oklch(0.65_0.15_175)]">{item.value}</p>
                <p className="text-xs text-[oklch(0.55_0.02_260)] mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={`bg-white border border-[oklch(0.92_0.005_260)] rounded-xl px-6 data-[state=open]:border-[oklch(0.75_0.15_175/0.3)] data-[state=open]:shadow-lg data-[state=open]:shadow-[oklch(0.75_0.15_175/0.05)] transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: `${100 + i * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-display font-semibold text-[oklch(0.15_0.03_260)] hover:text-[oklch(0.65_0.15_175)] py-5 text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[oklch(0.40_0.02_260)] leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className={`mt-16 p-10 rounded-2xl bg-[oklch(0.13_0.03_260)] text-center relative overflow-hidden transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Subtle arch motif */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] opacity-[0.06]">
              <svg viewBox="0 0 200 100" fill="none" className="w-full h-full">
                <path d="M10 90 Q100 10 190 90" stroke="oklch(0.75 0.15 175)" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <HelpCircle size={28} className="text-[oklch(0.75_0.15_175/0.4)] mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-white/55 mb-6 text-sm">
              Reach out to us directly and we'll get back to you within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.75_0.15_175)] text-[oklch(0.12_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97]"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
