import type { SentinelDuplicateResult, SentinelSourceItem } from "@/platform/athena/agents/sentinel/types/sentinel-types";

export const duplicateEngine = {
  check(item: SentinelSourceItem): SentinelDuplicateResult {
    const duplicateSocial = item.sourceKind === "public_social";
    return {
      itemId: item.id,
      duplicateDetected: duplicateSocial,
      duplicateType: duplicateSocial ? "duplicate_nil_mention" : undefined,
      matchedItemIds: duplicateSocial ? ["mock-existing-nil-mention"] : [],
      recommendation: duplicateSocial ? "merge" : "continue",
      isMock: true
    };
  }
};

