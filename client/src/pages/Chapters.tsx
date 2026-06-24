import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { chapters } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

export default function Chapters() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779700473/XyRRDSUVQFY5bUs5A449mY/bfn-chapters-VJnxJFFC5S3FT6YYyM3SnV.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.03_260)] to-[oklch(0.15_0.03_260)]" />
        </div>
        <div className="container relative z-10">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Chapters
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Built locally. Connected nationally.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Each chapter operates at a specific school with local leadership, sessions, and events — all connected to the broader BFN network.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container">
          <h2 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_260)] mb-8">
            Active Chapters
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {chapters.map((chapter, i) => (
              <div
                key={chapter.school}
                className={`group p-8 rounded-2xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-xl hover:shadow-[oklch(0.75_0.15_175/0.05)] transition-all duration-300 hover:-translate-y-1 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-[oklch(0.15_0.03_260)] flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-[oklch(0.75_0.15_175)]">{chapter.state}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[oklch(0.15_0.03_260)] mb-3">
                  {chapter.school}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[oklch(0.45_0.02_260)]">
                    <MapPin size={14} className="text-[oklch(0.55_0.02_260)]" />
                    {chapter.city}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[oklch(0.45_0.02_260)]">
                    <Calendar size={14} className="text-[oklch(0.55_0.02_260)]" />
                    Founded {chapter.founded}
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-[oklch(0.92_0.005_260)]">
                  <div className="flex items-center gap-2 text-sm text-[oklch(0.45_0.02_260)]">
                    <Users size={14} />
                    <span>Active chapter with local leadership team</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Start a Chapter */}
          <div className="p-10 rounded-2xl bg-[oklch(0.15_0.03_260)] text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Want to start a chapter at your school?
            </h3>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              BFN is expanding to new schools. If you're a motivated student who wants to bring finance education to your campus, we want to hear from you.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.75_0.15_175)] text-[oklch(0.15_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97]"
            >
              Sign in to apply <ArrowRight size={16} />
            </Link>
            <p className="text-white/40 text-sm mt-4">Registration required to access the chapter application form.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
