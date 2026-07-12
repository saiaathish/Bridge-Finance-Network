"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Sign up successful! Please check your email for verification (if enabled) or sign in.");
          setIsSignUp(false);
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Successfully signed in!");
          router.push("/portfolio");
        }
      }
    } catch (err: any) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground inner-page">
      <Navbar />

      <section className="hero-fade relative overflow-hidden pt-32 pb-24 min-h-screen flex items-center">
        <div className="sky-beam pointer-events-none absolute bottom-0 right-0 top-0 w-full md:w-[55%]" />
        <div className="container max-w-md mx-auto relative">
          <div className="text-center mb-8">
            <img
              src="/bfn-logo.png"
              alt="Bridge Finance Network"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h1 className="font-display text-2xl font-medium text-foreground mb-2">
              {isSignUp ? "Create Member Account" : "Member Access"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isSignUp
                ? "Register a new Bridge Finance Network account."
                : "Sign in to your Bridge Finance Network portal account."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-white border border-border">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded border border-border bg-card text-foreground placeholder-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded border border-border bg-card text-foreground placeholder-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : isSignUp ? "Register" : "Sign In"}
            </button>

            {!isSignUp && (
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-muted-foreground hover:text-signal transition-colors duration-150">
                  Forgot password?
                </a>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="text-signal hover:underline font-semibold bg-transparent border-none outline-none cursor-pointer"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="text-signal hover:underline font-semibold bg-transparent border-none outline-none cursor-pointer"
                  >
                    Register here
                  </button>
                  {" or "}
                  <Link href="/open-roles" className="text-signal hover:underline font-semibold">
                    Apply to Join
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

