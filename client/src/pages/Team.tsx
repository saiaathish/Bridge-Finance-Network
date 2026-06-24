import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const teams = ["All", "Internal Affairs", "Finance", "Human Resources", "External Affairs", "Web Development"];

const members = [
  { name: "Andrew Fu", role: "Co-Founder & MD", team: "Internal Affairs", tier: "Senior Associate" },
  { name: "Steven", role: "Advisor", team: "Web Development", tier: "Senior Associate" },
  { name: "Sashi", role: "VP of Web Development", team: "Web Development", tier: "Associate" },
  { name: "Sai", role: "VP of Web Development", team: "Web Development", tier: "Associate" },
  { name: "Ackshat", role: "Core Developer", team: "Web Development", tier: "Analyst" },
  { name: "Kev", role: "Frontend & UI", team: "Web Development", tier: "Intern" },
  { name: "Niranjana", role: "Frontend & UI", team: "Web Development", tier: "Intern" },
];

const tierColors: Record<string, string> = {
  "Intern": "bg-[oklch(0.85_0.005_260)] text-[oklch(0.40_0.02_260)]",
  "Analyst": "bg-[oklch(0.90_0.05_250)] text-[oklch(0.45_0.15_250)]",
  "Associate": "bg-[oklch(0.90_0.05_300)] text-[oklch(0.45_0.15_300)]",
  "Senior Associate": "bg-[oklch(0.90_0.08_80)] text-[oklch(0.45_0.15_80)]",
};

export default function Team() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Meet the people behind BFN.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            A team of driven students building the infrastructure for the next generation of finance professionals.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {teams.map((team) => (
              <button
                key={team}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-[oklch(0.90_0.005_260)] text-[oklch(0.40_0.02_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:text-[oklch(0.65_0.15_175)] transition-all duration-200 first:bg-[oklch(0.75_0.15_175/0.1)] first:border-[oklch(0.75_0.15_175/0.3)] first:text-[oklch(0.65_0.15_175)]"
                onClick={() => toast("Feature coming soon")}
              >
                {team}
              </button>
            ))}
          </div>

          {/* Member Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {members.map((member, i) => (
              <div
                key={member.name}
                className={`group p-6 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[oklch(0.15_0.03_260)] flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-[oklch(0.75_0.15_175)] text-sm">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] mb-1">{member.name}</h3>
                <p className="text-sm text-[oklch(0.45_0.02_260)] mb-3">{member.role}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tierColors[member.tier]}`}>
                    {member.tier}
                  </span>
                  <span className="text-xs text-[oklch(0.55_0.02_260)]">{member.team}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[oklch(0.55_0.02_260)] text-sm mb-4">
              Full member directory is managed by HR and updated regularly.
            </p>
            <Link
              href="/open-roles"
              className="inline-flex items-center gap-2 text-[oklch(0.65_0.15_175)] font-medium hover:text-[oklch(0.55_0.15_175)] transition-colors"
            >
              Want to join the team? <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


