"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref: missionRef, isInView: missionVisible } = useInView();
  const { ref: founderRef, isInView: founderVisible } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            About BFN
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Bridging the gap between ambition and opportunity.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={missionRef} className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ${
                missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[oklch(0.15_0.03_260)] mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-[oklch(0.35_0.02_260)] leading-relaxed">
                <p>
                  Bridge Finance Network is a student-led nonprofit organization dedicated to expanding access to finance education, curated opportunities, and practical career preparation for high school students across the country.
                </p>
                <p>
                  We believe that the path to a career in finance shouldn&apos;t start in college. By providing structured programs, mentorship, competitions, and a national peer network, we give ambitious students the tools and experience they need to stand out — years before their first internship application.
                </p>
                <p>
                  BFN operates through local chapters at partner schools, each led by student leaders who organize sessions, host speakers, and connect their peers to the broader network. Our invite-only member portal provides access to curated internships, competitions, curriculum, and resources vetted by our team.
                </p>
              </div>
            </div>
            <div
              className={`transition-all duration-700 delay-200 ${
                missionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779700473/XyRRDSUVQFY5bUs5A449mY/bfn-chapters-VJnxJFFC5S3FT6YYyM3SnV.webp"
                alt="Campus"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-white">
        <div ref={founderRef} className="container">
          <div className="max-w-4xl mx-auto">
            <span
              className={`inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4 transition-all duration-600 ${
                founderVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Leadership
            </span>
            <h2
              className={`font-display text-3xl md:text-4xl font-bold text-[oklch(0.15_0.03_260)] mb-12 transition-all duration-600 delay-100 ${
                founderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Founded by students, for students.
            </h2>

            <div
              className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-[oklch(0.97_0.002_260)] border border-[oklch(0.92_0.005_260)] transition-all duration-700 delay-200 ${
                founderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-[oklch(0.15_0.03_260)] flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-[oklch(0.75_0.15_175)]">AF</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[oklch(0.15_0.03_260)]">Andrew Fu</h3>
                <p className="text-[oklch(0.75_0.15_175)] font-medium text-sm mb-3">Co-Founder & Managing Director of Internal Affairs</p>
                <p className="text-[oklch(0.40_0.02_260)] leading-relaxed">
                  Andrew founded Bridge Finance Network with the vision of creating a structured pathway for high school students interested in finance. Recognizing the lack of accessible, high-quality finance resources for pre-college students, he built BFN to bridge that gap — connecting ambitious students with real opportunities, mentorship, and a community of peers who share their drive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What drives us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Access", desc: "Finance education shouldn't be gated by your school or zip code." },
              { title: "Structure", desc: "Clear pathways, organized resources, and real accountability." },
              { title: "Community", desc: "A national network of driven students who push each other forward." },
            ].map((val, i) => (
              <div key={val.title} className="p-8 rounded-xl bg-[oklch(0.20_0.03_260)] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center text-[oklch(0.75_0.15_175)] font-display font-bold text-sm mb-5">
                  0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{val.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
