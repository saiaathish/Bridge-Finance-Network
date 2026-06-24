import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { Calendar, Clock, Tag } from "lucide-react";

const typeColors: Record<string, string> = {
  "Competition": "bg-[oklch(0.90_0.08_80)] text-[oklch(0.45_0.15_80)]",
  "Speaker": "bg-[oklch(0.90_0.08_250)] text-[oklch(0.45_0.15_250)]",
  "Meeting": "bg-[oklch(0.90_0.08_175)] text-[oklch(0.45_0.15_175)]",
};

export default function Events() {
  const { ref, isInView } = useInView();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Events
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Upcoming events & sessions.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Competitions, guest speakers, chapter meetups, and more. Stay connected with the BFN community.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_260)] mb-8">
            Upcoming
          </h2>
          <div className="space-y-5">
            {events.map((event, i) => (
              <div
                key={event.title}
                className={`group p-6 md:p-8 rounded-xl bg-white border border-[oklch(0.92_0.005_260)] hover:border-[oklch(0.75_0.15_175/0.3)] hover:shadow-lg transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[oklch(0.15_0.03_260)] flex flex-col items-center justify-center">
                    <span className="text-xs text-[oklch(0.75_0.15_175)] font-medium uppercase">
                      {event.date.split(" ")[0].slice(0, 3)}
                    </span>
                    <span className="font-display text-xl font-bold text-white">
                      {event.date.split(" ")[1].replace(",", "")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display font-semibold text-[oklch(0.15_0.03_260)] text-lg">{event.title}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeColors[event.type] || "bg-gray-100 text-gray-600"}`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm text-[oklch(0.45_0.02_260)]">{event.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-[oklch(0.55_0.02_260)]">
                      <Calendar size={12} /> {event.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[oklch(0.97_0.002_260)] border border-[oklch(0.92_0.005_260)] text-center">
            <h3 className="font-display text-lg font-bold text-[oklch(0.15_0.03_260)] mb-2">
              Past events
            </h3>
            <p className="text-sm text-[oklch(0.45_0.02_260)]">
              Archive of past competitions, speaker sessions, and chapter events coming soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
