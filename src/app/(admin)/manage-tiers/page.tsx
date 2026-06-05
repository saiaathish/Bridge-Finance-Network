import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { isTierManagerRole } from "@/lib/auth/roles";
import {
  createSupabaseServerClient,
  hasSupabaseServerConfig,
} from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function ManageTiersPage() {
  if (!hasSupabaseServerConfig()) {
    redirect("/login?next=/manage-tiers");
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/manage-tiers");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (!isTierManagerRole(profile?.role)) {
    redirect("/unauthorized");
  }

  const [{ data: registrationCodes }, { data: tierHistory }] = await Promise.all([
    supabase
      .from("registration_codes")
      .select("id, code, tier, is_used, used_by, expires_at, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
    supabase
      .from("tier_history")
      .select("id, user_id, previous_tier, new_tier, changed_by, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  return (
    <AppShell userEmail={user.email ?? profile?.email ?? "Manager"}>
      <section className="content-panel stack">
        <div>
          <p className="eyebrow">Tier operations</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}>Manage tiers</h1>
          <p className="lede">
            Role-checked admin surface for registration codes and tier history.
            Mutations can be added here once the operating rules are finalized.
          </p>
        </div>

        <section className="stack">
          <h2>Recent registration codes</h2>
          {(registrationCodes ?? []).length > 0 ? (
            registrationCodes?.map((code) => (
              <article className="data-row" key={code.id}>
                <div>
                  <strong>{code.code}</strong>
                  <p className="muted">Tier: {code.tier ?? "unset"}</p>
                </div>
                <span className="badge">{code.is_used ? "Used" : "Open"}</span>
              </article>
            ))
          ) : (
            <p className="muted">No registration codes visible through current RLS.</p>
          )}
        </section>

        <section className="stack">
          <h2>Recent tier history</h2>
          {(tierHistory ?? []).length > 0 ? (
            tierHistory?.map((event) => (
              <article className="data-row" key={event.id}>
                <div>
                  <strong>{event.previous_tier ?? "none"} to {event.new_tier ?? "unset"}</strong>
                  <p className="muted">User: {event.user_id}</p>
                </div>
                <span className="badge">{event.created_at?.slice(0, 10) ?? "pending"}</span>
              </article>
            ))
          ) : (
            <p className="muted">No tier history visible through current RLS.</p>
          )}
        </section>
      </section>
    </AppShell>
  );
}
