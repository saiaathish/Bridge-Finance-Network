import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Member portal coming soon. Apply through Open Roles to get access.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 bg-[oklch(0.15_0.03_260)] min-h-screen flex items-center">
        <div className="container max-w-md mx-auto">
          <div className="text-center mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663779700473/XyRRDSUVQFY5bUs5A449mY/bfn-logo-KqaHHTL4QdwgY5qSdN8Tvb.webp"
              alt="BFN"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h1 className="font-display text-2xl font-bold text-white mb-2">Member Access</h1>
            <p className="text-white/60 text-sm">Sign in to your BFN portal account.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[oklch(0.20_0.03_260)] border border-white/5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-white/70 mb-1.5">Email or Username</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-lg bg-[oklch(0.15_0.03_260)] border border-white/10 text-white placeholder-white/30 focus:border-[oklch(0.75_0.15_175)] focus:ring-2 focus:ring-[oklch(0.75_0.15_175/0.2)] outline-none transition-all"
                placeholder="you@email.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-1.5">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2.5 rounded-lg bg-[oklch(0.15_0.03_260)] border border-white/10 text-white placeholder-white/30 focus:border-[oklch(0.75_0.15_175)] focus:ring-2 focus:ring-[oklch(0.75_0.15_175/0.2)] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[oklch(0.75_0.15_175)] text-[oklch(0.15_0.03_260)] font-semibold rounded-lg hover:bg-[oklch(0.80_0.15_175)] transition-all duration-200 active:scale-[0.97]"
            >
              Sign In
            </button>
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-white/50 hover:text-[oklch(0.75_0.15_175)] transition-colors">
                Forgot password?
              </a>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              Don't have an account?{" "}
              <Link href="/open-roles" className="text-[oklch(0.75_0.15_175)] hover:underline font-medium">
                Apply to Join
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
