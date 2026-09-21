"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { APPLICATION_URL } from "@/lib/constants"

// Nav order keeps About beside Home in the primary navigation; on the
// homepage itself sections are keyed so the band order below can differ
// from nav order. "Directory", "Partners", and "Speakers" always leave the
// page — they live at their own routes, not in an on-page section.
export const HOME_NAV_ITEMS = [
  { label: "Home", key: "hero" },
  { label: "About", key: "about" },
  { label: "Approach", key: "approach" },
  { label: "Programs", key: "programs" },
  { label: "Directory", key: "directory", href: "/directory" },
  { label: "Partners", key: "partners", href: "/partners" },
  { label: "Speakers", key: "speakers", href: "/portal/speakers" },
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu whenever the route changes underneath it.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 transition-colors duration-150 md:px-12 ${
        scrolled || menuOpen ? "border-b border-border bg-card/95" : "bg-transparent"
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

      <div className="hidden shrink-0 items-center gap-2 md:flex">
        <Link
          href="/support"
          aria-current={pathname === "/support" ? "page" : undefined}
          className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors duration-150 min-[480px]:px-6 ${
            pathname === "/support"
              ? "border-[#153B63] text-[#153B63]"
              : "border-border text-foreground hover:border-muted-foreground"
          }`}
        >
          Support Us
        </Link>
        <MagneticButton
          size="compact"
          variant="ghost"
          onClick={() => window.open(APPLICATION_URL, "_blank")}
        >
          Apply to Join
        </MagneticButton>
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen(open => !open)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="flex shrink-0 items-center justify-center rounded-lg border border-border p-2 text-foreground md:hidden"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {HOME_NAV_ITEMS.map(item => {
              const isPageLink = "href" in item
              const href = isPageLink ? item.href : AWAY_HREF[item.key]

              if (!onNavigate || isPageLink) {
                const isActive = pathname === href || (item.key === "hero" && pathname === "/")
                return (
                  <Link
                    key={item.key}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3 py-2.5 font-sans text-base font-semibold transition-colors duration-150 ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key)
                    setMenuOpen(false)
                  }}
                  className={`rounded-lg px-3 py-2.5 text-left font-sans text-base font-semibold transition-colors duration-150 ${
                    activeKey === item.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
            <Link
              href="/support"
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg border px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-150 ${
                pathname === "/support"
                  ? "border-[#153B63] text-[#153B63]"
                  : "border-border text-foreground hover:border-muted-foreground"
              }`}
            >
              Support Us
            </Link>
            <MagneticButton
              size="default"
              variant="ghost"
              className="w-full"
              onClick={() => {
                window.open(APPLICATION_URL, "_blank")
                setMenuOpen(false)
              }}
            >
              Apply to Join
            </MagneticButton>
          </div>
        </div>
      )}
    </nav>
  )
}
