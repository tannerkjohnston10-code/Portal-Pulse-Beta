import type { RealtimeClaimCandidate, RealtimeConflict } from "@/platform/realtime/core/realtime-types";

export const RealtimeConflictService = {
  scanCandidate(candidate: RealtimeClaimCandidate): RealtimeConflict | null {
    if (candidate.claimType !== "nil_mention" && candidate.confidence !== "conflicting") {
      return null;
    }

    return {
      id: `mock-conflict-${candidate.id}`,
      conflictType: candidate.claimType === "nil_mention" ? "nil_review" : "claim_conflict",
      severity: "high",
      summary: "Mock conflict scan requires review before this item can surface.",
      candidateIds: [candidate.id],
      recommendedAction: "Send to admin review and require Intelligence Core approval.",
      isMock: true
    };
  }
};
