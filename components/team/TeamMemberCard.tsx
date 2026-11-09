import Image from "next/image";
import { User } from "lucide-react";
import type { TeamMember } from "@/lib/team-data";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  // Portraits are a C-Suite-only treatment — every other subteam gets a
  // simpler, more compact card with no reserved photo space.
  const showPhoto = member.category === "C-Suite";

  return (
    <div
      data-card
      className="gsap-hidden hover-wiggle group flex w-full flex-col items-center rounded-xl border border-border bg-white p-8 text-center transition-colors duration-150 hover:border-muted-foreground"
    >
      {showPhoto && (
        <div
          className="wiggle-target flex size-32 flex-none items-center justify-center overflow-hidden rounded-full border border-border bg-card"
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={`Portrait of ${member.name}, ${member.title ?? "C-Suite executive"}`}
              width={128}
              height={128}
              sizes="128px"
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full flex-col items-center justify-center gap-1"
            >
              <User size={26} className="text-muted-foreground" strokeWidth={1.5} />
              <span className="px-2 font-mono text-[9px] uppercase leading-tight tracking-wider text-muted-foreground">
                Photo Coming Soon
              </span>
            </div>
          )}
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
      {member.title && member.title !== member.rank && (
        <p className="mt-1 text-sm font-semibold text-signal">{member.title}</p>
      )}
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

/**
 * Compact, text-only version of the card above — same border, surface,
 * hover, and type styles, with tighter padding so long lists (Members)
 * fill a denser grid. Shows tier, name, title (only if a hand-written card
 * already had one), and school.
 */
export function CompactMemberCard({ member }: { member: TeamMember }) {
  return (
    <div
      data-card
      className="gsap-hidden flex w-full flex-col items-center justify-center rounded-xl border border-border bg-white px-3 py-4 text-center transition-colors sm:px-4 sm:py-5 duration-150 hover:border-muted-foreground"
    >
      {member.rank && (
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-signal">
          {member.rank}
        </span>
      )}
      <h3 className={`break-words font-sans text-sm font-semibold leading-snug text-foreground sm:text-base ${member.rank ? "mt-1" : ""}`}>
        {member.name}
      </h3>
      {member.title && member.title !== member.rank && (
        <p className="mt-0.5 text-sm font-semibold text-signal">{member.title}</p>
      )}
      {member.school && <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-sm">{member.school}</p>}
    </div>
  );
}
