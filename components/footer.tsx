import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react"

const footerLinks = {
  network: [
    { label: "About", href: "#services" },
    { label: "How Access Works", href: "#features" },
    { label: "Our Team", href: "#team" },
    { label: "Member Directory", href: "#members" },
  ],
  members: [
    { label: "Apply to Join", href: "#" },
    { label: "Member Login", href: "#" },
    { label: "Opportunities", href: "#" },
    { label: "Resources", href: "#blog" },
  ],
  programs: [
    { label: "Learn", href: "#services" },
    { label: "Compete", href: "#services" },
    { label: "Research", href: "#services" },
    { label: "Lead", href: "#services" },
  ],
  support: [
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Code of Conduct", href: "#" },
    { label: "Privacy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-base font-medium text-foreground">Bridge Finance Network</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              A student-led nonprofit helping motivated students build finance skills and lead local chapters.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Network</h4>
            <ul className="space-y-3">
              {footerLinks.network.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Members</h4>
            <ul className="space-y-3">
              {footerLinks.members.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Bridge Finance Network. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">A student-led nonprofit organization</p>
        </div>
      </div>
    </footer>
  )
}
