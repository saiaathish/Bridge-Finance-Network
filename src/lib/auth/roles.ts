const TIER_MANAGER_ROLES = new Set(["admin", "super_admin", "tier_manager"]);

export function isTierManagerRole(role: string | null | undefined) {
  return Boolean(role && TIER_MANAGER_ROLES.has(role));
}
