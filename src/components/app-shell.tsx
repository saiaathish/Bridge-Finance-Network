import { LayoutDashboard, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function AppShell({
  children,
  userEmail,
}: Readonly<{
  children: React.ReactNode;
  userEmail: string;
}>) {
  return (
    <main className="page-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark">BFN</span>
          <span>Bridge Finance Network</span>
        </Link>
        <span className="badge">{userEmail}</span>
      </header>

      <div className="app-grid">
        <aside className="sidebar">
          <nav className="stack" aria-label="Portal navigation">
            <Link className="button" href="/portal">
              <LayoutDashboard size={16} /> Portal
            </Link>
            <Link className="button" href="/manage-tiers">
              <ShieldCheck size={16} /> Manage tiers
            </Link>
          </nav>
        </aside>
        {children}
      </div>
    </main>
  );
}
