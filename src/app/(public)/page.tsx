import { ArrowRight, Database, GitBranch, ShieldCheck } from "lucide-react";
import Link from "next/link";

const readinessItems = [
  {
    title: "Supabase schema",
    description: "profiles, registration_codes, and tier_history are the expected backing tables.",
    icon: Database,
  },
  {
    title: "Protected routes",
    description: "/portal requires an authenticated user; /manage-tiers also requires a tier role.",
    icon: ShieldCheck,
  },
  {
    title: "Vercel deploy path",
    description: "Root-level Next.js config lets the connected GitHub repo auto-deploy the app.",
    icon: GitBranch,
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">BFN</span>
          <span>Bridge Finance Network</span>
        </Link>
        <nav className="nav-actions" aria-label="Primary navigation">
          <Link className="button" href="/login">
            Login
          </Link>
          <Link className="button primary" href="/portal">
            Portal <ArrowRight size={16} />
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Member infrastructure</p>
          <h1>Bridge Finance Network</h1>
          <p className="lede">
            A clean App Router foundation for authenticated members, registration
            code operations, and tier management backed by Supabase.
          </p>
          <div className="nav-actions">
            <Link className="button primary" href="/portal">
              Open portal <ArrowRight size={16} />
            </Link>
            <Link className="button" href="/manage-tiers">
              Manage tiers
            </Link>
          </div>
        </div>

        <div className="panel stack" style={{ padding: 20 }}>
          {readinessItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="status-card" key={item.title}>
                <Icon aria-hidden="true" color="var(--accent)" size={24} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
