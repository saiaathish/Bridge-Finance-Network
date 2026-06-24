import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Lock, Briefcase, Trophy, GraduationCap, Library, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const categories = [
  { name: "Internships", icon: <Briefcase size={28} />, description: "Vetted finance internships at banks, funds, and startups curated for high school students.", count: "15+" },
  { name: "Competitions", icon: <Trophy size={28} />, description: "Stock pitch competitions, case studies, and research challenges with real prizes.", count: "12+" },
  { name: "Programs", icon: <GraduationCap size={28} />, description: "Structured learning programs, mentorship cohorts, and summer opportunities.", count: "8+" },
  { name: "Resources", icon: <Library size={28} />, description: "Templates, reading lists, video libraries, and tools for finance recruiting.", count: "20+" },
];

export default function Opportunities() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Opportunities Hub
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Curated opportunities for ambitious students.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Access internships, competitions, programs, and resources — all vetted by our team and organized for you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className={`group relative p-8 rounded-2xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-xl transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute top-6 right-6 flex items-center gap-2 text-[oklch(0.55_0.02_260)]">
                  <Lock size={14} />
                  <span className="text-xs">Members Only</span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center text-[oklch(0.65_0.15_175)] mb-5">
                  {cat.icon}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-xl font-bold text-[oklch(0.15_0.03_260)]">{cat.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[oklch(0.75_0.15_175/0.1)] text-[oklch(0.65_0.15_175)] text-xs font-semibold">
                    {cat.count}
                  </span>
                </div>
                <p className="text-[oklch(0.45_0.02_260)] leading-relaxed mb-6">{cat.description}</p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[oklch(0.65_0.15_175)] hover:text-[oklch(0.55_0.15_175)] transition-colors"
                >
                  Sign in to access <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[oklch(0.15_0.03_260)] text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Not a member yet?
            </h3>
            <p className="text-white/60 mb-6 max-w-lg mx-auto">
              Apply through an open role. Approved members receive full access to all opportunities, resources, and portal features.
            </p>
            <Link
              href="/open-roles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.75_0.15_175)] text-[oklch(0.15_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97]"
            >
              Apply to Join <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
