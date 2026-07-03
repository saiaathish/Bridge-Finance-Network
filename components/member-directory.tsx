"use client"

import { useMemo, useState } from "react"
import { Search, Network } from "lucide-react"

type Member = {
  initials: string
  name: string
  role: string
  chapter: string
  focus: string
}

const members: Member[] = [
  { initials: "EW", name: "Ethan Wright", role: "Member", chapter: "Marquette HS", focus: "Investment Banking" },
  { initials: "LP", name: "Lily Park", role: "Chapter Lead", chapter: "Middleton HS", focus: "Equity Research" },
  { initials: "NS", name: "Noah Singh", role: "Member", chapter: "Bridgewater-Raritan HS", focus: "Private Equity" },
  { initials: "AB", name: "Ava Brooks", role: "Research Fellow", chapter: "Marquette HS", focus: "Macroeconomics" },
  { initials: "KT", name: "Kai Tanaka", role: "Member", chapter: "Middleton HS", focus: "Quant & Trading" },
  { initials: "MR", name: "Maria Rossi", role: "Member", chapter: "Bridgewater-Raritan HS", focus: "Venture Capital" },
  { initials: "DC", name: "David Cohen", role: "Chapter Lead", chapter: "Marquette HS", focus: "Corporate Finance" },
  { initials: "ZA", name: "Zara Ahmed", role: "Research Fellow", chapter: "Middleton HS", focus: "FinTech" },
  { initials: "LM", name: "Lucas Meyer", role: "Member", chapter: "Bridgewater-Raritan HS", focus: "Wealth Management" },
]

const chapters = ["All Chapters", "Marquette HS", "Middleton HS", "Bridgewater-Raritan HS"]

export function MemberDirectory() {
  const [query, setQuery] = useState("")
  const [chapter, setChapter] = useState("All Chapters")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return members.filter((m) => {
      const matchesChapter = chapter === "All Chapters" || m.chapter === chapter
      const matchesQuery =
        q === "" ||
        m.name.toLowerCase().includes(q) ||
        m.focus.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q)
      return matchesChapter && matchesQuery
    })
  }, [query, chapter])

  return (
    <section id="members" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ADA996] to-[#F2F2F2] rounded-full mb-6">
            <Network className="w-4 h-4 text-black" />
            <span className="text-xs text-black uppercase tracking-widest">Member Directory</span>
          </div>
          <h2 className="font-sans text-5xl font-normal mb-6 text-balance">Meet our members</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A growing community of motivated students across every chapter. Search by name, focus, or role, and filter
            by chapter to explore the network.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search members..."
              className="w-full bg-card border border-border rounded-full pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {chapters.map((c) => (
              <button
                key={c}
                onClick={() => setChapter(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  chapter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 transition-colors duration-300 hover:border-foreground/30"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ADA996] to-[#F2F2F2] flex items-center justify-center shrink-0">
                  <span className="text-black font-medium text-sm">{member.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-foreground font-medium truncate">{member.name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {member.role} · {member.chapter}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 truncate">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">No members match your search.</p>
        )}
      </div>
    </section>
  )
}
