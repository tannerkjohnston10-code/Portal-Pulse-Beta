import type { ApiConsumer } from "@/platform/api/auth/api-auth";

export type ApiRateLimitTier = "free" | "pro" | "media_partner" | "enterprise" | "internal";

const limits: Record<ApiRateLimitTier, number> = {
  free: 100,
  pro: 1000,
  media_partner: 5000,
  enterprise: 20000,
  internal: 100000
};

export function checkRateLimit(consumer: ApiConsumer) {
  // TODO: Replace placeholder with Redis-backed counters.
  return {
    allowed: true,
    tier: consumer.tier,
    limit: limits[consumer.tier],
    remaining: limits[consumer.tier] - 1,
    resetAt: new Date(Date.now() + 60_000).toISOString(),
    isMock: true
  };
}
