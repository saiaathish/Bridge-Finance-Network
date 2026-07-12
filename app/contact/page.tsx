"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useLayoutEffect, useRef } from "react";
import { sectionEntrance } from "@/lib/motion";
import { PageHero } from "@/components/page-hero";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const inputClasses =
  "w-full px-4 py-2.5 rounded border border-border bg-card text-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "General", message: "" });
  const bodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tween = bodyRef.current && sectionEntrance(bodyRef.current, "[data-card]");
    return () => {
      tween && tween.kill();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 48 hours.");
    setFormData({ name: "", email: "", subject: "General", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground inner-page">
      <Navbar />

      <PageHero
        kicker="Contact"
        title="Get in touch with BFN."
        accent="touch"
        subtitle="Questions about joining, partnerships, press, or starting a chapter? We'd love to hear from you."
      />

      {/* Contact — Haze band */}
      <section className="py-20 md:py-24 bg-card">
        <div ref={bodyRef} className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            <div data-card className="gsap-hidden lg:col-span-2">
              <h2 className="font-display text-2xl font-medium text-foreground mb-6">
                Reach out directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-signal flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <a href="mailto:bridgefinancenetwork@gmail.com" className="text-signal hover:underline text-sm">
                      bridgefinancenetwork@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-signal flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Chapters</p>
                    <p className="text-sm text-muted-foreground">Missouri, Florida, New Jersey</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Connect with us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/bridge-finance-network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-signal hover:border-muted-foreground transition-colors duration-150"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bridgefinancenetwork/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-signal hover:border-muted-foreground transition-colors duration-150"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div data-card className="gsap-hidden lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-white border border-border">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClasses}
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Press">Press</option>
                    <option value="Chapter">Chapter Inquiry</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150 w-full justify-center"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
