import { LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Access limited</p>
          <h1>That area requires a tier-management role.</h1>
          <p className="lede">
            Your Supabase session is valid, but your profile role does not allow
            access to the tier management surface.
          </p>
          <div className="nav-actions">
            <Link className="button primary" href="/portal">
              Back to portal
            </Link>
            <Link className="button" href="/">
              Home
            </Link>
          </div>
        </div>
        <div className="panel" style={{ display: "grid", minHeight: 360, placeItems: "center" }}>
          <LockKeyhole aria-hidden="true" color="var(--warning)" size={88} />
        </div>
      </section>
    </main>
  );
}
