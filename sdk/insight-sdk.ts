import { insightService } from "@/server/services/insight-service";
import type { InsightCategory } from "@/types/insights";

export const InsightSDK = {
  version: "v1",
  top: (limit?: number) => insightService.getTopInsights(limit),
  feed: (filters?: { category?: InsightCategory; query?: string }) => insightService.getInsightFeed(filters),
  engineResult: () => insightService.getEngineResult()
};
