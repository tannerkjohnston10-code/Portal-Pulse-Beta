import type { PermissionContext, PermissionDecision, PermissionKey, PlatformRole } from "@/platform/permissions/permission-types";

const rolePermissionMap: Record<PlatformRole, PermissionKey[]> = {
  guest: ["read:public_intelligence"],
  registered_user: ["read:public_intelligence", "create:watchlists", "share:watchlists"],
  premium_user: ["read:public_intelligence", "read:premium_intelligence", "create:reports", "export:reports"],
  verified_analyst: ["read:premium_intelligence", "create:reports", "share:reports"],
  verified_media: ["read:premium_intelligence", "create:reports", "share:reports", "export:reports"],
  verified_coach: ["read:coach_workspace", "create:watchlists", "read:simulations"],
  verified_athletic_department: ["read:enterprise_workspace", "read:coach_workspace", "read:gm_workspace"],
  general_manager: ["read:gm_workspace", "create:reports", "read:simulations", "export:reports"],
  conference_admin: ["read:enterprise_workspace", "read:premium_intelligence", "export:reports"],
  portal_pulse_staff: ["read:admin_review", "update:admin_review", "admin:reports"],
  system_administrator: [
    "admin:system",
    "admin:organization",
    "admin:api",
    "admin:admin_review",
    "read:enterprise_workspace",
    "read:premium_intelligence",
    "export:reports"
  ]
};

function permissionsForRoles(roles: PlatformRole[]) {
  return Array.from(new Set(roles.flatMap((role) => rolePermissionMap[role] ?? [])));
}

export const PermissionService = {
  getPermissionsForRoles(roles: PlatformRole[]) {
    return permissionsForRoles(roles);
  },

  can(context: PermissionContext, permission: PermissionKey): PermissionDecision {
    const matchedPermissions = permissionsForRoles(context.roles).filter(
      (candidate) => candidate === permission || candidate === "admin:system"
    );

    return {
      allowed: matchedPermissions.length > 0,
      reason:
        matchedPermissions.length > 0
          ? "Permission granted by centralized role policy."
          : "Permission denied by centralized role policy.",
      matchedPermissions,
      isMock: true
    };
  },

  require(context: PermissionContext, permission: PermissionKey): PermissionDecision {
    const decision = this.can(context, permission);

    if (!decision.allowed) {
      return {
        ...decision,
        requiresReview: true,
        reason: `${decision.reason} Future enforcement should raise a typed ForbiddenError.`
      };
    }

    return decision;
  }
};
