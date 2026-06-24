import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { Link } from "wouter";
import { ArrowRight, Handshake } from "lucide-react";

const partners = [
  { name: "Coming Soon", type: "Financial Services" },
  { name: "Coming Soon", type: "Education" },
  { name: "Coming Soon", type: "Technology" },
];

export default function Partners() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Partners
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Organizations we work with.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            BFN partners with firms and organizations that share our mission of expanding access to finance education for students.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-20 h-20 rounded-2xl bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center mx-auto mb-6">
              <Handshake size={36} className="text-[oklch(0.65_0.15_175)]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[oklch(0.15_0.03_260)] mb-4">
              Partnership opportunities are open
            </h2>
            <p className="text-[oklch(0.45_0.02_260)] max-w-xl mx-auto leading-relaxed">
              We're actively seeking partnerships with financial institutions, educational organizations, and technology companies who want to invest in the next generation of finance talent.
            </p>
          </div>

          {/* What partnership looks like */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Sponsorship", desc: "Support competitions, events, and chapter operations with financial backing." },
              { title: "Mentorship", desc: "Connect your professionals with BFN members for career guidance and industry insight." },
              { title: "Opportunities", desc: "Provide internship placements, project work, or educational resources for our members." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-8 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] transition-all duration-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_260)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-2xl bg-[oklch(0.15_0.03_260)] text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Interested in partnering with BFN?
            </h3>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              Reach out to discuss how your organization can support the next generation of finance professionals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.75_0.15_175)] text-[oklch(0.15_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97]"
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
