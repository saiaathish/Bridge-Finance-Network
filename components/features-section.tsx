import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit an application through an open role or chapter pathway.",
  },
  {
    number: "02",
    title: "Review",
    description: "BFN reviews student fit, current needs, and the path where each applicant can contribute.",
  },
  {
    number: "03",
    title: "Access",
    description: "Approved members receive member resources, private links, deadlines, forms, and workflow instructions.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border p-6 shadow-xl rounded-3xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Access pathway</p>
                    <p className="text-2xl font-light text-foreground">Apply → Review → Access</p>
                  </div>
                  <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center">
                    <span className="text-foreground text-sm font-medium">B</span>
                  </div>
                </div>

                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-border last:border-b-0">
                    <div className="w-9 h-9 bg-card border border-border rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                    </div>
                    <div>
                      <p className="text-sm text-foreground font-medium">{step.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2] rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-xs text-black uppercase tracking-widest">How Access Works</span>
              </div>
              <h2 className="font-sans text-5xl font-normal mb-6 text-balance">
                Apply publicly. Receive member access after review.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Students apply through a public pathway. BFN reviews fit and current needs, then approved members
                receive access to opportunities, resources, competitions, chapter materials, and internal workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="relative flex items-center gap-0 border border-border rounded-full pl-6 pr-1.5 py-1.5 transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 bg-foreground rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300" />
                <span className="relative z-10 text-sm text-foreground group-hover:text-background pr-4 uppercase tracking-wide transition-colors duration-300">
                  Apply to Join
                </span>
                <span className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                  <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-background opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </span>
              </button>
              <button className="flex items-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300">
                Member Login
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
