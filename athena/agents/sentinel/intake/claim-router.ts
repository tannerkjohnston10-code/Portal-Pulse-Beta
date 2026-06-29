import type { SentinelClaimCandidate, SentinelComplianceResult, SentinelConflictResult, SentinelDuplicateResult, SentinelPriorityResult, SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const claimRouter = {
  createCandidate(
    item: SentinelSourceItem,
    compliance: SentinelComplianceResult,
    duplicate: SentinelDuplicateResult,
    conflict: SentinelConflictResult,
    priority: SentinelPriorityResult
  ): SentinelClaimCandidate {
    const adminReview = compliance.requiresReview || conflict.recommendedReviewAction === "admin_review" || priority.priorityLabel === "critical";
    return {
      id: `mock-claim-candidate-${item.id}`,
      sourceItemId: item.id,
      claimType: item.summary.toLowerCase().includes("nil") ? "nil_report" : item.summary.toLowerCase().includes("visit") ? "visit" : "roster_update",
      summary: `Mock claim candidate from ${item.sourceName}. Duplicate handling: ${duplicate.recommendation}.`,
      confidence: conflict.conflictDetected ? "conflicting" : item.confidence,
      evidenceIds: [`mock-evidence-${item.id}`],
      sourceCount: 1,
      routeTo: adminReview ? "admin_review" : duplicate.recommendation === "discard_duplicate" ? "hold" : "intelligence_core",
      isMock: true
    };
  }
};

