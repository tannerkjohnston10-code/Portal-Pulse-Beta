import type { SentinelConflictResult, SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const sentinelConflictEngine = {
  scan(item: SentinelSourceItem): SentinelConflictResult {
    const visitConflict = item.id === "mock-sentinel-source-2";
    const nilReview = item.id === "mock-sentinel-source-3";
    return {
      itemId: item.id,
      conflictDetected: visitConflict || nilReview,
      conflictType: visitConflict ? "different_visit_dates" : nilReview ? "different_nil_estimates" : undefined,
      severity: visitConflict ? "high" : nilReview ? "medium" : "low",
      evidence: visitConflict ? ["mock-visit-date-a", "mock-visit-date-b"] : nilReview ? ["mock-nil-mention-a", "mock-nil-mention-b"] : [],
      recommendedReviewAction: visitConflict ? "admin_review" : nilReview ? "hold_for_more_sources" : "none",
      isMock: true
    };
  }
};

