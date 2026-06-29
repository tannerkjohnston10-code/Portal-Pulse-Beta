import type { ClaimCandidate } from "@/server/ingestion/types";
import type { TimelineIntelligenceEvent } from "@/server/ai/types";

export const timelineIntelligenceEngine = {
  assembleFromClaimCandidates(candidates: ClaimCandidate[]): TimelineIntelligenceEvent[] {
    return candidates.map((candidate) => ({
      id: `timeline-${candidate.id}`,
      eventType: candidate.claimType === "commitment" ? "commitment" : "source_update",
      subjectType: "player",
      subjectId: candidate.subjectGuess,
      title: `Pending ${candidate.claimType} candidate`,
      occurredAt: candidate.createdAt,
      supportingClaimIds: [candidate.id],
      confidenceScore: candidate.confidenceScore,
      explanation: "Mock timeline event assembled from a claim candidate and kept review-gated.",
      isMock: true
    }));
  }
};
