import { identifyApiConsumer } from "@/platform/api/auth/api-auth";
import { checkRateLimit } from "@/platform/api/rate-limit/rate-limit";

export function prepareApiRequest(request: Request) {
  const consumer = identifyApiConsumer(request);
  const rateLimit = checkRateLimit(consumer);

  return {
    consumer,
    rateLimit,
    requestId: `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    isMock: true
  };
}
