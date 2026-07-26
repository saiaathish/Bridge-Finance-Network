import { User } from "lucide-react";
import type { TeamMember } from "@/lib/team-data";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  // Photo placeholders are a C-Suite-only treatment — every other subteam
  // gets a simpler, more compact card with no reserved photo space.
  const showPhoto = member.category === "C-Suite";

  return (
    <div
      data-card
      className="gsap-hidden hover-wiggle group flex w-full flex-col items-center rounded-xl border border-border bg-white p-8 text-center transition-colors duration-150 hover:border-muted-foreground"
    >
      {showPhoto && (
        <div
          aria-hidden="true"
          className="wiggle-target flex h-24 w-24 flex-none flex-col items-center justify-center gap-1 rounded-full border border-border bg-card"
        >
          <User size={26} className="text-muted-foreground" strokeWidth={1.5} />
          <span className="px-2 font-mono text-[9px] uppercase leading-tight tracking-wider text-muted-foreground">
            Photo Coming Soon
          </span>
        </div>
      )}

      {member.rank && (
        <span className={`font-mono text-[11px] font-semibold uppercase tracking-wider text-signal ${showPhoto ? "mt-4" : ""}`}>
          {member.rank}
        </span>
      )}

      <h3
        className={`font-sans text-lg font-semibold text-foreground ${
          member.rank ? "mt-1" : showPhoto ? "mt-5" : ""
        }`}
      >
        {member.name}
      </h3>
      {/* Skip the title line when it's just a restatement of the rank badge above it. */}
      {member.title !== member.rank && <p className="mt-1 text-sm font-semibold text-signal">{member.title}</p>}
      {member.school && <p className="mt-1 text-sm text-muted-foreground">{member.school}</p>}

      {member.description && (
        <div className="mt-4 space-y-3 text-left">
          {member.description.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
