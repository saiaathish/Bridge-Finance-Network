"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MagneticButton } from "@/components/magnetic-button"
import { APPLICATION_URL } from "@/lib/constants"

// Nav order keeps About beside Home in the primary navigation; on the
// homepage itself sections are keyed so the band order below can differ
// from nav order. "Directory" is the only item that always leaves the
// page — the full team directory lives at /directory, not in an on-page
// section.
export const HOME_NAV_ITEMS = [
  { label: "Home", key: "hero" },
  { label: "About", key: "about" },
  { label: "Approach", key: "approach" },
  { label: "Programs", key: "programs" },
  { label: "Directory", key: "directory", href: "/directory" },
  { label: "Apply", key: "contact" },
] as const

// Where each on-page item points when rendered somewhere other than the
// homepage itself — the root route plus the matching section id.
const AWAY_HREF: Record<string, string> = {
  hero: "/",
  approach: "/#approach",
  programs: "/#programs",
  about: "/#about",
  contact: "/#contact",
}

interface HomeHeaderProps {
  /** Current in-view section key, for the scrollspy underline. Only meaningful on the homepage. */
  activeKey?: string
  /** Provided by the homepage to smooth-scroll to a section; omitted everywhere else. */
  onNavigate?: (key: string) => void
}

/**
 * The site's single homepage-style nav bar: logo, Home/Approach/Programs/
 * Directory/About/Apply, and the Apply CTA. Rendered by the homepage itself
 * (scrolling between its own sections) and by /directory (navigating back
 * to those same sections), so there is exactly one implementation.
 */
export function HomeHeader({ activeKey, onNavigate }: HomeHeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 transition-colors duration-150 md:px-12 ${
        scrolled ? "border-b border-border bg-card/95" : "bg-transparent"
      }`}
    >
      {onNavigate ? (
        <button onClick={() => onNavigate("hero")} className="flex items-center">
          <img src="/bfn-logo.png" alt="Bridge Finance Network mark" className="h-12 w-12 object-contain" />
        </button>
      ) : (
        <Link href="/" className="flex items-center">
          <img src="/bfn-logo.png" alt="Bridge Finance Network mark" className="h-12 w-12 object-contain" />
        </Link>
      )}

      <div className="hidden items-center gap-8 md:flex">
        {HOME_NAV_ITEMS.map((item) => {
          const isPageLink = "href" in item
          const href = isPageLink ? item.href : AWAY_HREF[item.key]

          if (!onNavigate || isPageLink) {
            const isActive = pathname === href || (item.key === "hero" && pathname === "/")
            return (
              <Link
                key={item.key}
                href={href}
                className={`group relative font-sans text-sm font-semibold transition-colors duration-150 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-150 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          }

          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`group relative font-sans text-sm font-semibold transition-colors duration-150 ${
                activeKey === item.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-150 ${
                  activeKey === item.key ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          )
        })}
      </div>

      <MagneticButton variant="ghost" onClick={() => window.open(APPLICATION_URL, "_blank")}>
        Apply to Join
      </MagneticButton>
    </nav>
  )
}
