export const platformRoles = [
  "guest",
  "registered_user",
  "premium_user",
  "verified_analyst",
  "verified_media",
  "verified_coach",
  "verified_athletic_department",
  "general_manager",
  "conference_admin",
  "portal_pulse_staff",
  "system_administrator"
] as const;

export type PlatformRole = (typeof platformRoles)[number];

export const permissionActions = ["read", "create", "update", "delete", "share", "export", "admin"] as const;

export type PermissionAction = (typeof permissionActions)[number];

export const permissionResources = [
  "public_intelligence",
  "premium_intelligence",
  "enterprise_workspace",
  "coach_workspace",
  "gm_workspace",
  "reports",
  "watchlists",
  "simulations",
  "api",
  "admin_review",
  "organization",
  "billing",
  "system"
] as const;

export type PermissionResource = (typeof permissionResources)[number];

export type PermissionKey = `${PermissionAction}:${PermissionResource}`;

export type PermissionDecision = {
  allowed: boolean;
  reason: string;
  matchedPermissions: PermissionKey[];
  requiresReview?: boolean;
  isMock: true;
};

export type PermissionContext = {
  userId?: string;
  roles: PlatformRole[];
  organizationIds?: string[];
  workspaceId?: string;
  resourceOwnerId?: string;
  isMock?: true;
};
