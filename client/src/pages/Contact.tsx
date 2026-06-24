import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "General", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 48 hours.");
    setFormData({ name: "", email: "", subject: "General", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[oklch(0.15_0.03_260)]">
        <div className="container">
          <span className="inline-block text-[oklch(0.75_0.15_175)] text-sm font-semibold uppercase tracking-wider mb-4">
            Contact
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mb-4">
            Get in touch with BFN.
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            Questions about joining, partnerships, press, or starting a chapter? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[oklch(0.98_0.002_260)]">
        <div ref={ref} className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div
              className={`lg:col-span-2 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <h2 className="font-display text-2xl font-bold text-[oklch(0.15_0.03_260)] mb-6">
                Reach out directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center text-[oklch(0.65_0.15_175)] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-[oklch(0.15_0.03_260)] text-sm">Email</p>
                    <a href="mailto:bridgefinancenetwork@gmail.com" className="text-[oklch(0.65_0.15_175)] hover:underline text-sm">
                      bridgefinancenetwork@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.75_0.15_175/0.1)] flex items-center justify-center text-[oklch(0.65_0.15_175)] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-[oklch(0.15_0.03_260)] text-sm">Chapters</p>
                    <p className="text-sm text-[oklch(0.45_0.02_260)]">Missouri, Florida, New Jersey</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[oklch(0.92_0.005_260)]">
                <p className="text-sm font-medium text-[oklch(0.15_0.03_260)] mb-3">Connect with us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/bridge-finance-network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[oklch(0.95_0.005_260)] flex items-center justify-center text-[oklch(0.45_0.02_260)] hover:bg-[oklch(0.75_0.15_175/0.1)] hover:text-[oklch(0.65_0.15_175)] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bridgefinancenetwork/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[oklch(0.95_0.005_260)] flex items-center justify-center text-[oklch(0.45_0.02_260)] hover:bg-[oklch(0.75_0.15_175/0.1)] hover:text-[oklch(0.65_0.15_175)] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`lg:col-span-3 transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white border border-[oklch(0.92_0.005_260)] shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.02_260)] mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.90_0.005_260)] bg-[oklch(0.98_0.002_260)] text-[oklch(0.15_0.03_260)] focus:border-[oklch(0.75_0.15_175)] focus:ring-2 focus:ring-[oklch(0.75_0.15_175/0.2)] outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.25_0.02_260)] mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.90_0.005_260)] bg-[oklch(0.98_0.002_260)] text-[oklch(0.15_0.03_260)] focus:border-[oklch(0.75_0.15_175)] focus:ring-2 focus:ring-[oklch(0.75_0.15_175/0.2)] outline-none transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[oklch(0.25_0.02_260)] mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.90_0.005_260)] bg-[oklch(0.98_0.002_260)] text-[oklch(0.15_0.03_260)] focus:border-[oklch(0.75_0.15_175)] focus:ring-2 focus:ring-[oklch(0.75_0.15_175/0.2)] outline-none transition-all"
                  >
                    <option value="General">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Press">Press</option>
                    <option value="Chapter">Chapter Inquiry</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[oklch(0.25_0.02_260)] mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.90_0.005_260)] bg-[oklch(0.98_0.002_260)] text-[oklch(0.15_0.03_260)] focus:border-[oklch(0.75_0.15_175)] focus:ring-2 focus:ring-[oklch(0.75_0.15_175/0.2)] outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.75_0.15_175)] text-[oklch(0.15_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97] w-full justify-center"
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
