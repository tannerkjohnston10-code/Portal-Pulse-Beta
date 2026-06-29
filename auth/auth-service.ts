import { publicAuthContext, type PlatformAuthContext } from "@/platform/auth/auth-context";
import type { PlatformRole } from "@/platform/permissions/permission-types";
import { PermissionService } from "@/platform/permissions/permission-service";

export const authProviders = [
  "email",
  "google",
  "apple",
  "microsoft",
  "enterprise_sso_placeholder",
  "magic_link_placeholder"
] as const;

export type AuthProvider = (typeof authProviders)[number];

export type AuthSession = {
  id: string;
  userId: string;
  roles: PlatformRole[];
  provider: AuthProvider;
  expiresAt: string;
  rememberDeviceEnabled: boolean;
  twoFactorRequired: boolean;
  isMock: true;
};

export type AuthCapability = {
  provider: AuthProvider;
  enabled: boolean;
  productionConfigured: boolean;
  notes: string;
  isMock: true;
};

export const AuthService = {
  publicContext: publicAuthContext,

  getAuthCapabilities(): AuthCapability[] {
    return authProviders.map((provider) => ({
      provider,
      enabled: provider === "email",
      productionConfigured: false,
      notes: "Placeholder only. No production identity provider is connected yet.",
      isMock: true
    }));
  },

  createMockSession(userId = "mock-user", roles: PlatformRole[] = ["registered_user"]): AuthSession {
    return {
      id: "mock-session-production-foundation",
      userId,
      roles,
      provider: "email",
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
      rememberDeviceEnabled: false,
      twoFactorRequired: false,
      isMock: true
    };
  },

  getAuthContext(session?: AuthSession): PlatformAuthContext {
    if (!session) {
      return publicAuthContext;
    }

    return {
      userId: session.userId,
      role: session.roles.includes("premium_user") ? "premium" : "member",
      permissions: PermissionService.getPermissionsForRoles(session.roles),
      isMock: true
    };
  },

  getPasswordResetPolicy() {
    return {
      enabled: false,
      tokenTtlMinutes: 30,
      requiresEmailVerification: true,
      isMock: true
    };
  }
};
