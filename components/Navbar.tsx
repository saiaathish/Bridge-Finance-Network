"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Signed out successfully!");
        router.push("/");
      }
    } catch (err: any) {
      toast.error("Failed to sign out. Please try again.");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        scrolled ? "bg-card/95 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" title="Bridge Finance Network">
          <img src="/bfn-logo.png" alt="Bridge Finance Network" className="w-9 h-9" />
          <span className="font-sans font-semibold text-lg text-foreground sm:block">
            Bridge Finance Network
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150 ${
                location === link.href
                  ? "text-foreground bg-card border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-xs text-muted-foreground">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-destructive transition-colors duration-150 cursor-pointer bg-transparent border-none"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                Sign In
              </Link>
              <Link
                href="/open-roles"
                className="btn-ghost px-5 py-2.5 text-sm font-semibold"
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground transition-colors duration-150"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 flex flex-col gap-2 border-t border-border">
              {user ? (
                <>
                  <span className="px-4 py-2 text-xs text-center text-muted-foreground">{user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-3 text-center rounded-lg text-muted-foreground hover:text-destructive transition-colors duration-150 cursor-pointer bg-transparent border-none"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-3 text-center rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    Sign In
                  </Link>
                  <Link href="/open-roles" className="btn-ghost px-4 py-3 text-center font-semibold">
                    Join Now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
