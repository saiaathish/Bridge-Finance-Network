import { redirect } from "next/navigation";
import { signOut } from "@/app/actions";
import { AppShell } from "@/components/app-shell";
import {
  createSupabaseServerClient,
  hasSupabaseServerConfig,
} from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function PortalPage() {
  if (!hasSupabaseServerConfig()) {
    redirect("/login?next=/portal");
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/portal");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, role, tier, updated_at")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <AppShell userEmail={user.email ?? profile?.email ?? "Member"}>
      <section className="content-panel stack">
        <div>
          <p className="eyebrow">Member portal</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>Portal</h1>
          <p className="lede">
            Your authenticated Supabase session is active. Profile details below
            come from the protected profiles table through Row Level Security.
          </p>
        </div>

        <div className="status-grid">
          <article className="metric-card">
            <h3>Email</h3>
            <p>{user.email ?? profile?.email ?? "No email on session"}</p>
          </article>
          <article className="metric-card">
            <h3>Tier</h3>
            <p>{profile?.tier ?? "Not assigned"}</p>
          </article>
          <article className="metric-card">
            <h3>Role</h3>
            <p>{profile?.role ?? "member"}</p>
          </article>
          <article className="metric-card">
            <h3>Profile</h3>
            <p>{profile?.full_name ?? "Profile ready for completion"}</p>
          </article>
        </div>

        <form action={signOut}>
          <button className="button" type="submit">
            Sign out
          </button>
        </form>
      </section>
    </AppShell>
  );
}
