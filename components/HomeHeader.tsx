"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon, Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { APPLICATION_URL } from "@/lib/constants"

// Nav order keeps About beside Home in the primary navigation; on the
// homepage itself sections are keyed so the band order below can differ
// from nav order. "Directory" always leaves the page — it lives at its
// own route, not in an on-page section.
export const HOME_NAV_ITEMS = [
  { label: "Home", key: "hero" },
  { label: "About", key: "about" },
  { label: "Programs", key: "programs" },
  { label: "Directory", key: "directory", href: "/directory" },
] as const

// Secondary links tucked behind the "More" dropdown on desktop; the mobile
// menu still lists them flat alongside the primary items above.
export const MORE_NAV_ITEMS = [
  { label: "Partners", href: "/partners" },
  { label: "Speakers", href: "/portal/speakers" },
  { label: "Support Us", href: "/support" },
] as const

// Where each on-page item points when rendered somewhere other than the
// homepage itself — the root route plus the matching section id.
const AWAY_HREF: Record<string, string> = {
  hero: "/",
  programs: "/#programs",
  about: "/#about",
}

interface HomeHeaderProps {
  /** Current in-view section key, for the scrollspy underline. Only meaningful on the homepage. */
  activeKey?: string
  /** Provided by the homepage to smooth-scroll to a section; omitted everywhere else. */
  onNavigate?: (key: string) => void
}

/**
 * The site's single homepage-style nav bar: logo, primary links, a "More"
 * dropdown for secondary pages, and the Apply CTA. Rendered by the homepage
 * itself (scrolling between its own sections) and by other pages
 * (navigating back to those same sections), so there is exactly one
 * implementation.
 */
export function HomeHeader({ activeKey, onNavigate }: HomeHeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu and the "More" dropdown whenever the route
  // changes underneath them.
  useEffect(() => {
    setMenuOpen(false)
    setMoreOpen(false)
  }, [pathname])

  // Close the "More" dropdown on an outside click, so click-to-open
  // (touch/keyboard) has a matching click-to-close.
  useEffect(() => {
    if (!moreOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [moreOpen])

  const isMoreActive = MORE_NAV_ITEMS.some(item => pathname === item.href)

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

        <div
          ref={moreRef}
          className="relative"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button
            type="button"
            onClick={() => setMoreOpen(open => !open)}
            aria-expanded={moreOpen}
            className={`group relative flex items-center gap-1 font-sans text-sm font-semibold transition-colors duration-150 ${
              isMoreActive || moreOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            More
            <ChevronDownIcon
              className={`size-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
            />
            <span
              className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-150 ${
                isMoreActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>

          <div className={`absolute left-0 top-full pt-2 ${moreOpen ? "block" : "hidden"}`}>
            <div className="min-w-[180px] rounded-xl border border-border bg-card p-2 shadow-sm">
              {MORE_NAV_ITEMS.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-sans text-sm font-semibold transition-colors duration-150 ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-background hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden shrink-0 items-center md:flex">
        <MagneticButton
          size="compact"
          variant="primary"
          onClick={() => window.open(APPLICATION_URL, "_blank")}
        >
          Apply
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

            {MORE_NAV_ITEMS.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 font-sans text-base font-semibold transition-colors duration-150 ${
                  pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-3 border-t border-border pt-4">
            <MagneticButton
              size="default"
              variant="primary"
              className="w-full"
              onClick={() => {
                window.open(APPLICATION_URL, "_blank")
                setMenuOpen(false)
              }}
            >
              Apply
            </MagneticButton>
          </div>
        </div>
      )}
    </nav>
  )
}
