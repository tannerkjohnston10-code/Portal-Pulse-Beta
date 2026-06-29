import { publicAuthContext, type PlatformAuthContext } from "@/platform/auth/auth-context";
import { PlatformApiError } from "@/platform/api/errors/api-errors";

export type ApiConsumer = PlatformAuthContext & {
  consumerId: string;
  tier: "free" | "pro" | "media_partner" | "enterprise" | "internal";
  isMock: true;
};

export function identifyApiConsumer(_request: Request): ApiConsumer {
  return {
    ...publicAuthContext,
    consumerId: "mock-public-consumer",
    tier: "free",
    isMock: true
  };
}

export function requireApiKey(_request: Request) {
  // TODO: Validate API keys once developer accounts exist.
  return identifyApiConsumer(_request);
}

export function requireScope(consumer: ApiConsumer, scope: string) {
  if (!consumer.permissions.includes(scope) && !consumer.permissions.includes("read:public")) {
    throw new PlatformApiError("FORBIDDEN", `Missing required scope: ${scope}`, 403);
  }
}

export function attachRequestContext(request: Request) {
  return {
    request,
    consumer: identifyApiConsumer(request),
    receivedAt: new Date().toISOString(),
    isMock: true
  };
}
