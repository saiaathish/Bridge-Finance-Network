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
    const handleScroll = () => setScrolled(window.scrollY > 80);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[oklch(0.93_0.07_85/0.97)] backdrop-blur-xl shadow-md shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" title="Bridge Finance Network">
          <img
            src="/bfn-logo.png"
            alt="Bridge Finance Network"
            className="w-9 h-9 transition-all duration-500 group-hover:scale-110"
          />
          <span
            className={`font-display font-bold text-lg hidden sm:block transition-colors duration-500 ${
              scrolled ? "text-[oklch(0.15_0.03_260)]" : "text-white"
            }`}
          >
            BFN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location === link.href
                  ? scrolled
                    ? "text-[oklch(0.55_0.15_175)] bg-[oklch(0.75_0.15_175/0.15)]"
                    : "text-[oklch(0.75_0.15_175)] bg-white/10"
                  : scrolled
                  ? "text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.15_0.03_260)] hover:bg-black/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
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
              <span className={`text-xs ${scrolled ? "text-[oklch(0.30_0.02_260)]" : "text-white/60"}`}>
                {user.email}
              </span>
              <button
                onClick={handleSignOut}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer bg-transparent border-none ${
                  scrolled
                    ? "text-[oklch(0.30_0.02_260)] hover:text-red-500"
                    : "text-white/80 hover:text-red-400"
                }`}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.15_0.03_260)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Sign In
              </Link>
              <Link
                href="/open-roles"
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 active:scale-[0.97] ${
                  scrolled
                    ? "bg-[oklch(0.60_0.15_175)] text-white hover:bg-[oklch(0.65_0.15_175)]"
                    : "bg-white text-[oklch(0.15_0.03_260)] hover:bg-white/90"
                }`}
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-[oklch(0.15_0.03_260)]" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`lg:hidden backdrop-blur-xl border-t ${
            scrolled
              ? "bg-[oklch(0.93_0.07_85/0.98)] border-black/10"
              : "bg-[oklch(0.15_0.03_260/0.96)] border-white/10"
          }`}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  scrolled
                    ? "text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.15_0.03_260)] hover:bg-black/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className={`mt-4 pt-4 flex flex-col gap-2 border-t ${
                scrolled ? "border-black/10" : "border-white/10"
              }`}
            >
              {user ? (
                <>
                  <span className={`px-4 py-2 text-xs text-center ${scrolled ? "text-[oklch(0.30_0.02_260)]" : "text-white/60"}`}>
                    {user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className={`w-full px-4 py-3 text-center rounded-lg transition-colors cursor-pointer bg-transparent border-none ${
                      scrolled
                        ? "text-[oklch(0.30_0.02_260)] hover:text-red-500"
                        : "text-white/80 hover:text-red-400"
                    }`}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`px-4 py-3 text-center rounded-lg transition-colors ${
                      scrolled
                        ? "text-[oklch(0.30_0.02_260)] hover:text-[oklch(0.15_0.03_260)]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/open-roles"
                    className={`px-4 py-3 text-center font-semibold rounded-lg ${
                      scrolled
                        ? "bg-[oklch(0.60_0.15_175)] text-white"
                        : "bg-white text-[oklch(0.15_0.03_260)]"
                    }`}
                  >
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
