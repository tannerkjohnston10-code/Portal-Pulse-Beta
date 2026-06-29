import type { PermissionContext } from "@/platform/permissions/permission-types";
import { PermissionService } from "@/platform/permissions/permission-service";

export type ApiGatewayProtocol = "rest" | "graphql_placeholder";
export type ApiTier = "free" | "pro" | "media_partner" | "enterprise" | "internal";

export type ApiRequestContext = {
  requestId: string;
  version: "v1";
  protocol: ApiGatewayProtocol;
  tier: ApiTier;
  permissionContext: PermissionContext;
  startedAt: string;
  isMock: true;
};

export type ApiGatewayPolicy = {
  versioningEnabled: boolean;
  authRequired: boolean;
  rateLimitPlaceholder: boolean;
  cacheEligible: boolean;
  loggingEnabled: boolean;
  validationRequired: boolean;
  isMock: true;
};

export const ApiGateway = {
  getDefaultPolicy(): ApiGatewayPolicy {
    return {
      versioningEnabled: true,
      authRequired: false,
      rateLimitPlaceholder: true,
      cacheEligible: true,
      loggingEnabled: true,
      validationRequired: true,
      isMock: true
    };
  },

  createMockRequestContext(overrides: Partial<ApiRequestContext> = {}): ApiRequestContext {
    return {
      requestId: overrides.requestId ?? "mock-request-production-foundation",
      version: "v1",
      protocol: overrides.protocol ?? "rest",
      tier: overrides.tier ?? "free",
      permissionContext: overrides.permissionContext ?? { roles: ["guest"], isMock: true },
      startedAt: new Date().toISOString(),
      isMock: true
    };
  },

  authorize(context: ApiRequestContext) {
    return PermissionService.can(context.permissionContext, "read:api");
  }
};
