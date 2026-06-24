import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { openRoles } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Clock, Users, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

export default function OpenRoles() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.12_0.03_260)] relative overflow-hidden">
        {/* Trajectory lines */}
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-[0.06]">
          <svg viewBox="0 0 1440 160" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="160" x2="500" y2="40" stroke="oklch(0.75 0.15 175)" strokeWidth="1" />
            <line x1="300" y1="160" x2="900" y2="20" stroke="oklch(0.75 0.15 80)" strokeWidth="0.5" />
            <line x1="700" y1="160" x2="1440" y2="50" stroke="oklch(0.75 0.15 175)" strokeWidth="1" />
          </svg>
        </div>
        <div className="container relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider">
              Join BFN
            </span>
            <div className="px-2.5 py-1 rounded-full bg-[oklch(0.75_0.15_80/0.1)] border border-[oklch(0.75_0.15_80/0.2)]">
              <span className="text-[oklch(0.75_0.15_80)] text-xs font-semibold flex items-center gap-1">
                <Sparkles size={10} /> Hiring
              </span>
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Open roles at Bridge Finance Network.
          </h1>
          <p className="text-lg text-white/55 max-w-2xl">
            Apply publicly. No registration required. Approved applicants receive a member portal access code by email.
          </p>
        </div>
      </section>

      {/* Diagonal transition */}
      <div className="bg-[oklch(0.98_0.002_260)]">
        <svg viewBox="0 0 1440 50" fill="none" className="w-full -mt-1" preserveAspectRatio="none">
          <path d="M0 0L1440 50L1440 0Z" fill="oklch(0.12 0.03 260)" />
        </svg>
      </div>

      <section className="py-16 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_260)] mb-8 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-[oklch(0.75_0.15_175)]" />
            Current Openings
          </h2>

          <div className="space-y-6">
            {openRoles.map((role, i) => (
              <div
                key={role.title}
                className={`p-8 rounded-2xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-xl hover:shadow-[oklch(0.75_0.15_175/0.05)] transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[oklch(0.15_0.03_260)] mb-2">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[oklch(0.95_0.005_260)] text-[oklch(0.40_0.02_260)]">
                        <Users size={13} /> {role.team}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[oklch(0.95_0.005_260)] text-[oklch(0.40_0.02_260)]">
                        <Clock size={13} /> {role.commitment}
                      </span>
                    </div>
                  </div>
                  <a
                    href={role.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.75_0.15_175)] text-[oklch(0.12_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97] shadow-md shadow-[oklch(0.75_0.15_175/0.2)] whitespace-nowrap"
                  >
                    Apply Now <ExternalLink size={14} />
                  </a>
                </div>
                <p className="text-[oklch(0.40_0.02_260)] leading-relaxed">{role.description}</p>
                <div className="mt-5 pt-5 border-t border-[oklch(0.92_0.005_260)]">
                  <p className="text-sm text-[oklch(0.55_0.02_260)] italic flex items-start gap-2">
                    <ArrowRight size={14} className="text-[oklch(0.75_0.15_175)] mt-0.5 flex-shrink-0" />
                    After your application is reviewed and approved, you will receive a registration code by email to create your member portal account.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_260)] mb-8 flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[oklch(0.75_0.15_80)]" />
              How the application process works
            </h2>
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-[oklch(0.75_0.15_175/0.3)] via-[oklch(0.75_0.15_175/0.5)] to-[oklch(0.75_0.15_80/0.3)]" />
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Apply", desc: "Submit an application through the public form above. No account needed.", color: "175" },
                  { step: "02", title: "Review", desc: "BFN reviews your application for fit, skills, and current team needs.", color: "175" },
                  { step: "03", title: "Access", desc: "Approved members receive a registration code and full portal access.", color: "80" },
                ].map((item, i) => (
                  <div
                    key={item.step}
                    className={`relative p-7 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_${item.color}/0.3)] transition-all duration-500 hover:-translate-y-1 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-full bg-[oklch(0.75_0.15_${item.color}/0.1)] flex items-center justify-center mb-4`}>
                      <span className={`font-display text-sm font-bold text-[oklch(0.65_0.15_${item.color})]`}>{item.step}</span>
                    </div>
                    <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-[oklch(0.45_0.02_260)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
