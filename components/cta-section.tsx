import { ArrowUpRight, ArrowRight, Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2] rounded-full mb-6">
            <Play className="w-4 h-4 text-black" />
            <span className="text-xs text-black uppercase tracking-widest">Chapters &amp; Community</span>
          </div>
          <h2 className="font-sans text-5xl font-normal leading-tight max-w-4xl mx-auto">
            A local place to learn, lead, and build finance experience
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-4xl">
            {/* Gradient overlay - black to transparent from bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            {/* Chapter event image */}
            <img
              src="/images/chapter-event.png"
              alt="Student presenting a stock pitch at a chapter event"
              className="w-full h-auto rounded-3xl border border-border"
            />
          </div>
        </div>

        {/* Bottom stats and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-12">
            <div>
              <p className="text-4xl font-light text-foreground">200+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Student members</p>
            </div>
            <div>
              <p className="text-4xl font-light text-foreground">3</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Active chapters</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-sm max-w-sm text-center md:text-right text-zinc-200">
              BFN chapters give students a local place to learn, lead, host sessions, and build finance experience while
              staying connected to the wider member network.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
