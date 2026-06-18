"use client";

import { Mail } from "lucide-react";
import { use, useMemo, useState } from "react";
import {
  createSupabaseBrowserClient,
  hasSupabaseBrowserConfig,
} from "@/lib/supabase/client";

export function LoginForm({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string }>;
}) {
  const resolvedSearchParams = searchParams ? use(searchParams) : undefined;
  const next = resolvedSearchParams?.next ?? "/portal";
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasConfig = hasSupabaseBrowserConfig();
  const supabase = useMemo(
    () => (hasConfig ? createSupabaseBrowserClient() : null),
    [hasConfig],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setMessage("");

    if (!supabase) {
      setIsSubmitting(false);
      setIsError(true);
      setMessage("Supabase environment variables are not configured.");
      return;
    }

    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    setIsSubmitting(false);

    if (error) {
      setIsError(true);
      setMessage(error.message);
      return;
    }

    setMessage("Check your email for the sign-in link.");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="eyebrow" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          id="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          type="email"
          value={email}
        />
      </div>

      <button className="button primary" disabled={isSubmitting || !email} type="submit">
        <Mail size={16} />
        {isSubmitting ? "Sending link" : "Send magic link"}
      </button>

      <p className={isError ? "message error" : "message"}>{message}</p>
    </form>
  );
}
