import { Users, Linkedin, Mail } from "lucide-react"

const team = [
  {
    initials: "AR",
    name: "Aarav Reddy",
    role: "Founder & President",
    bio: "Started BFN to make credible finance opportunities accessible to every motivated student.",
  },
  {
    initials: "MC",
    name: "Maya Chen",
    role: "Executive Director",
    bio: "Oversees operations and partnerships, keeping the network running smoothly across chapters.",
  },
  {
    initials: "JO",
    name: "Jordan Okafor",
    role: "VP of Programs",
    bio: "Designs the learning, competition, and mentorship programs members rely on.",
  },
  {
    initials: "SK",
    name: "Sofia Kim",
    role: "VP of Chapters",
    bio: "Helps students launch and lead local chapters while staying connected to the network.",
  },
  {
    initials: "DM",
    name: "Diego Martinez",
    role: "VP of Research",
    bio: "Leads the member research program and editorial review for published work.",
  },
  {
    initials: "PH",
    name: "Priya Hassan",
    role: "Director of Operations",
    bio: "Curates opportunities, tracks deadlines, and supports members day to day.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2] rounded-full mb-6">
            <Users className="w-4 h-4 text-black" />
            <span className="text-xs text-black uppercase tracking-widest">Our Team</span>
          </div>
          <h2 className="font-sans text-5xl font-normal mb-6 text-balance">The students leading the network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BFN is run entirely by students. Meet the leadership team building programs, supporting chapters, and
            keeping the community moving forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-3xl p-8 flex flex-col transition-colors duration-300 hover:border-foreground/30"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ADA996] to-[#F2F2F2] flex items-center justify-center shrink-0">
                  <span className="text-black font-medium text-lg">{member.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">{member.bio}</p>
              <div className="flex gap-3 mt-auto">
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label={`Email ${member.name}`}
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
