import Link from "next/link";
import { LoginForm } from "@/components/login-form";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string }>;
}) {
  return (
    <main className="page-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">BFN</span>
          <span>Bridge Finance Network</span>
        </Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Secure access</p>
          <h1>Sign in to continue.</h1>
          <p className="lede">
            Use the email address tied to your Supabase profile. The portal and
            tier tools stay locked until Supabase confirms your session.
          </p>
        </div>

        <div className="panel" style={{ alignSelf: "center", padding: 24 }}>
          <LoginForm searchParams={searchParams} />
        </div>
      </section>
    </main>
  );
}
