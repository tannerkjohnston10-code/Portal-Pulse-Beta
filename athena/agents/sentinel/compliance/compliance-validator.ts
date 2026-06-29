import type { SentinelComplianceResult, SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const complianceValidator = {
  validate(item: SentinelSourceItem): SentinelComplianceResult {
    const socialReview = item.sourceKind === "public_social";
    return {
      itemId: item.id,
      allowed: true,
      reason: socialReview ? "Mock public social item is allowed only as review-sensitive metadata, not as confirmed fact." : "Mock approved public source type.",
      requiresReview: socialReview,
      isMock: true
    };
  }
};

