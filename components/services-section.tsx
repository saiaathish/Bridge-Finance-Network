import { BookOpen, Search, Presentation, Users, Layers } from "lucide-react"

const paths = [
  {
    number: "01",
    icon: BookOpen,
    title: "Learn",
    description: "Finance fundamentals, templates, and recruiting preparation.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find",
    description: "Curated internships, programs, competitions, and deadlines.",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Practice",
    description: "Stock pitches, case work, research briefs, and presentations.",
  },
  {
    number: "04",
    icon: Users,
    title: "Lead",
    description: "Chapter roles, team work, local events, and student projects.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full mb-6 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2]">
            <Layers className="w-4 h-4 text-black" />
            <span className="text-xs text-black uppercase tracking-widest">What BFN Organizes</span>
          </div>
          <h2 className="font-sans text-5xl font-normal mb-6 text-balance">
            One clear path for students entering finance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Students can quickly see how BFN helps them learn finance, find opportunities, practice applied work, and
            lead locally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <div key={index} className="group relative rounded-3xl transition-all duration-300">
              {/* Gradient border wrapper - only visible on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#ADA996] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card content */}
              <div className="relative bg-card p-8 rounded-3xl h-full border border-border group-hover:border-transparent transition-all duration-300 m-[1px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                    <path.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-sm font-mono text-muted-foreground">{path.number}</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{path.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{path.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
