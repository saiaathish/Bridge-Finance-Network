import { Link } from "wouter";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { stats, paths, chapters, opportunities } from "@/lib/data";
import { BookOpen, Search, Target, Users, Lock, ArrowRight, ChevronRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={24} />,
  Search: <Search size={24} />,
  Target: <Target size={24} />,
  Users: <Users size={24} />,
};

function StatCounter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, isInView } = useInView();
  const count = useCountUp(value, 2000, isInView);

  return (
    <div
      ref={ref}
      className="relative p-6 rounded-xl bg-[oklch(0.18_0.03_260)] border border-white/5 group hover:border-[oklch(0.75_0.15_175/0.3)] transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-[oklch(0.75_0.15_175/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
          {isInView ? count : 0}{suffix}
        </div>
        <div className="text-xs text-[oklch(0.75_0.15_175)] uppercase tracking-widest font-medium">{label}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const { ref: heroRef, isInView: heroVisible } = useInView();
  const { ref: pathsRef, isInView: pathsVisible } = useInView();
  const { ref: chaptersRef, isInView: chaptersVisible } = useInView();
  const { ref: oppRef, isInView: oppVisible } = useInView();
  const { ref: ctaRef, isInView: ctaVisible } = useInView();
  const { ref: proofRef, isInView: proofVisible } = useInView();

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[oklch(0.12_0.03_260)]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779700473/XyRRDSUVQFY5bUs5A449mY/bfn-hero-AHaTKUexeRTngzdmkSJTWL.webp"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.03_260)] via-[oklch(0.10_0.03_260/0.9)] to-[oklch(0.10_0.03_260/0.6)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.03_260)] via-transparent to-[oklch(0.10_0.03_260/0.4)]" />
        </div>

        {/* Decorative bridge arch motif */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] opacity-[0.04]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M20 180 Q100 20 180 180" stroke="oklch(0.75 0.15 175)" strokeWidth="2" fill="none" />
            <path d="M40 180 Q100 40 160 180" stroke="oklch(0.75 0.15 175)" strokeWidth="1.5" fill="none" />
            <path d="M60 180 Q100 60 140 180" stroke="oklch(0.75 0.15 80)" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Upward trajectory lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg viewBox="0 0 1440 128" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="128" x2="400" y2="40" stroke="oklch(0.75 0.15 175)" strokeWidth="1" />
            <line x1="200" y1="128" x2="700" y2="20" stroke="oklch(0.75 0.15 175)" strokeWidth="0.5" />
            <line x1="500" y1="128" x2="1000" y2="50" stroke="oklch(0.75 0.15 80)" strokeWidth="0.5" />
            <line x1="800" y1="128" x2="1440" y2="30" stroke="oklch(0.75 0.15 175)" strokeWidth="1" />
          </svg>
        </div>

        <div ref={heroRef} className="container relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_175/0.08)] border border-[oklch(0.75_0.15_175/0.25)] mb-8 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-[oklch(0.75_0.15_175)] animate-pulse" />
              <span className="text-[oklch(0.75_0.15_175)] text-sm font-medium">Student-Led Nonprofit Finance Network</span>
            </div>

            <h1
              className={`font-display text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-6 transition-all duration-700 delay-100 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Your finance career{" "}
              <span className="relative inline-block">
                <span className="text-gradient">starts before</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[oklch(0.75_0.15_175/0.4)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0 100 6 T200 4" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{" "}
              college.
            </h1>

            <p
              className={`text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl transition-all duration-700 delay-200 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Build real finance skills, access curated internships and competitions, publish research, and lead a chapter at your school — all before your first college class.
            </p>

            <div
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/open-roles"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.75_0.15_175)] text-[oklch(0.12_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[oklch(0.75_0.15_175/0.25)]"
              >
                Apply to Join <ArrowRight size={18} />
              </Link>
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                View Opportunities
              </Link>
            </div>

            {/* Social proof mini-bar */}
            <div
              className={`flex items-center gap-6 transition-all duration-700 delay-[400ms] ${
                heroVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[oklch(0.20_0.03_260)] border-2 border-[oklch(0.12_0.03_260)] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[oklch(0.75_0.15_175)]">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/50">
                <span className="text-[oklch(0.75_0.15_80)] font-semibold">200+</span> students already in the network
              </span>
            </div>
          </div>
        </div>

        {/* Diagonal cut bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 100L0 60L1440 0L1440 100Z" fill="oklch(0.13 0.03 260)" />
          </svg>
        </div>
      </section>

      {/* Stats Section — Dashboard-style */}
      <section className="bg-[oklch(0.13_0.03_260)] pt-8 pb-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} {...stat} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* What BFN Organizes — Paths (with diagonal transition) */}
      <section className="relative">
        {/* Diagonal top transition */}
        <div className="absolute top-0 left-0 right-0 -mt-1">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 0L1440 0L1440 60L0 20Z" fill="oklch(0.98 0.002 260)" />
          </svg>
        </div>

        <div className="bg-[oklch(0.98_0.002_260)] pt-20 pb-24">
          <div ref={pathsRef} className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span
                  className={`inline-flex items-center gap-2 text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-600 ${
                    pathsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="w-8 h-[2px] bg-[oklch(0.75_0.15_175)]" />
                  What BFN Organizes
                </span>
                <h2
                  className={`font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[oklch(0.15_0.03_260)] leading-tight mb-6 transition-all duration-600 delay-100 ${
                    pathsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  One clear path for students entering finance.
                </h2>
                <p
                  className={`text-lg text-[oklch(0.45_0.02_260)] leading-relaxed transition-all duration-600 delay-200 ${
                    pathsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  From learning fundamentals to leading your own chapter, BFN gives you the structure, resources, and community to build real experience.
                </p>

                {/* Bridge arch accent */}
                <div className={`mt-8 transition-all duration-700 delay-300 ${pathsVisible ? "opacity-100" : "opacity-0"}`}>
                  <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
                    <path d="M10 35 Q60 5 110 35" stroke="oklch(0.75 0.15 175)" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M20 35 Q60 10 100 35" stroke="oklch(0.75 0.15 80)" strokeWidth="1.5" fill="none" opacity="0.3" />
                  </svg>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {paths.map((path, i) => (
                  <div
                    key={path.number}
                    className={`group flex items-start gap-5 p-5 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-lg hover:shadow-[oklch(0.75_0.15_175/0.05)] transition-all duration-300 hover:-translate-y-0.5 ${
                      pathsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center text-[oklch(0.65_0.15_175)] group-hover:bg-[oklch(0.75_0.15_175)] group-hover:text-white transition-all duration-300">
                      {iconMap[path.icon]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-[oklch(0.75_0.15_80)] font-bold">{path.number}</span>
                        <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] text-lg">{path.title}</h3>
                      </div>
                      <p className="text-sm text-[oklch(0.45_0.02_260)]">{path.description}</p>
                    </div>
                    <ArrowRight size={16} className="text-[oklch(0.75_0.15_175)] opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Team Image Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[500px]">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779700473/XyRRDSUVQFY5bUs5A449mY/bfn-team-L43ahaNhEGkgfeeiZvKs4z.webp"
            alt="BFN members collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.03_260)] via-[oklch(0.10_0.03_260/0.4)] to-[oklch(0.10_0.03_260/0.2)]" />
          
          {/* Diagonal overlay accent */}
          <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 0L1440 0L1440 20L0 80Z" fill="oklch(0.98 0.002 260)" />
            </svg>
          </div>

          <div ref={proofRef} className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container">
              <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${proofVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <div>
                  <p className="text-[oklch(0.75_0.15_80)] text-sm font-semibold uppercase tracking-wider mb-2">Growing Network</p>
                  <p className="font-display text-3xl md:text-4xl font-bold text-white max-w-xl">
                    200+ students already building their edge.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                  <TrendingUp size={16} className="text-[oklch(0.75_0.15_175)]" />
                  <span className="text-sm text-white/80 font-medium">3 chapters across 3 states</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Preview */}
      <section className="py-24 bg-[oklch(0.13_0.03_260)] relative">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(0.75 0.15 175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.15 175) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div ref={oppRef} className="container relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
            <div>
              <span
                className={`inline-flex items-center gap-2 text-[oklch(0.75_0.15_80)] text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-600 ${
                  oppVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <Lock size={12} /> Member Exclusive
              </span>
              <h2
                className={`font-display text-3xl md:text-4xl font-bold text-white transition-all duration-600 delay-100 ${
                  oppVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Curated opportunities, unlocked after review.
              </h2>
            </div>
            <p
              className={`text-white/50 max-w-md transition-all duration-600 delay-200 ${
                oppVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Approved members get access to internships, competitions, programs, and resources vetted by our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {opportunities.map((opp, i) => (
              <div
                key={opp.category}
                className={`group relative p-6 rounded-xl bg-[oklch(0.18_0.03_260)] border border-white/5 hover:border-[oklch(0.75_0.15_175/0.3)] transition-all duration-300 hover:-translate-y-1 ${
                  oppVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <div className="absolute top-4 right-4 text-white/15">
                  <Lock size={14} />
                </div>
                <div className="w-12 h-12 rounded-lg bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.75_0.15_175/0.2)] transition-colors">
                  <span className="text-xl font-display font-bold text-[oklch(0.75_0.15_175)]">{opp.count}</span>
                </div>
                <h3 className="font-display font-semibold text-white mb-1">{opp.category}</h3>
                <p className="text-xs text-white/40 mb-4">Sign in to access full listings</p>
                <Link
                  href="/login"
                  className="text-sm text-[oklch(0.75_0.15_175)] hover:text-[oklch(0.80_0.15_175)] inline-flex items-center gap-1 transition-colors font-medium"
                >
                  Unlock <ChevronRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters — with offset grid */}
      <section className="relative py-24 bg-[oklch(0.98_0.002_260)]">
        {/* Diagonal top */}
        <div className="absolute top-0 left-0 right-0 -mt-1">
          <svg viewBox="0 0 1440 50" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 50L0 0L1440 50Z" fill="oklch(0.13 0.03 260)" />
          </svg>
        </div>

        <div ref={chaptersRef} className="container pt-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4">
            <div>
              <span
                className={`inline-flex items-center gap-2 text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-600 ${
                  chaptersVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-8 h-[2px] bg-[oklch(0.75_0.15_175)]" />
                Chapters & Leadership
              </span>
              <h2
                className={`font-display text-3xl md:text-4xl font-bold text-[oklch(0.15_0.03_260)] transition-all duration-600 delay-100 ${
                  chaptersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Built locally. Connected nationally.
              </h2>
            </div>
            <Link
              href="/chapters"
              className={`inline-flex items-center gap-2 text-[oklch(0.65_0.15_175)] font-medium hover:text-[oklch(0.55_0.15_175)] transition-all duration-500 ${
                chaptersVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Explore all chapters <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {chapters.map((chapter, i) => (
              <div
                key={chapter.school}
                className={`group p-7 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-xl hover:shadow-[oklch(0.75_0.15_175/0.05)] transition-all duration-300 hover:-translate-y-1 ${
                  chaptersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[oklch(0.15_0.03_260)] flex items-center justify-center">
                    <span className="font-display font-bold text-[oklch(0.75_0.15_175)] text-lg">{chapter.state}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-[oklch(0.90_0.08_80)] text-[oklch(0.45_0.15_80)] text-xs font-semibold">
                    Est. {chapter.founded}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] text-lg mb-1">
                  {chapter.school}
                </h3>
                <p className="text-sm text-[oklch(0.45_0.02_260)]">{chapter.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.12_0.03_260)]">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779700473/XyRRDSUVQFY5bUs5A449mY/bfn-opportunities-UghgyunsMtZa3RudHCJGUY.webp"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.10_0.03_260)] via-[oklch(0.10_0.03_260/0.9)] to-[oklch(0.10_0.03_260/0.7)]" />
        </div>

        {/* Bridge arch decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.04]">
          <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
            <path d="M20 180 Q200 20 380 180" stroke="oklch(0.75 0.15 175)" strokeWidth="2" fill="none" />
            <path d="M50 180 Q200 50 350 180" stroke="oklch(0.75 0.15 80)" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div ref={ctaRef} className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[oklch(0.75_0.15_80/0.1)] border border-[oklch(0.75_0.15_80/0.2)] mb-6 transition-all duration-700 ${ctaVisible ? "opacity-100" : "opacity-0"}`}>
              <span className="text-[oklch(0.75_0.15_80)] text-xs font-semibold uppercase tracking-wider">Applications Open</span>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Ready to build your edge?
            </h2>
            <p
              className={`text-lg text-white/55 max-w-xl mx-auto mb-10 transition-all duration-700 delay-200 ${
                ctaVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Apply through an open role. Approved members receive onboarding instructions and full portal access.
            </p>
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/open-roles"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[oklch(0.75_0.15_175)] text-[oklch(0.12_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[oklch(0.75_0.15_175/0.25)]"
              >
                Apply to Join <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                Contact BFN
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
