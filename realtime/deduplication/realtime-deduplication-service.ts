import type { RealtimeClaimCandidate } from "@/platform/realtime/core/realtime-types";

export type RealtimeDuplicateCheck = {
  candidateId: string;
  duplicateRisk: "low" | "medium" | "high";
  checkedSignals: string[];
  requiresReview: boolean;
  isMock: true;
};

export const RealtimeDeduplicationService = {
  checkCandidate(candidate: RealtimeClaimCandidate): RealtimeDuplicateCheck {
    return {
      candidateId: candidate.id,
      duplicateRisk: candidate.status === "duplicate_review" ? "high" : "low",
      checkedSignals: ["canonical_url", "source_id", "claim_signature", "same_entity_same_date"],
      requiresReview: candidate.status === "duplicate_review",
      isMock: true
    };
  }
};
