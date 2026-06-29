import type { RealtimeClaimCandidate } from "@/platform/realtime/core/realtime-types";

export type RealtimeVerificationResult = {
  candidateId: string;
  intelligenceCoreRequired: true;
  canPublishDirectly: false;
  confidenceScore: number;
  reviewReason?: string;
  isMock: true;
};

export const RealtimeVerificationService = {
  prepareForCoreReview(candidate: RealtimeClaimCandidate): RealtimeVerificationResult {
    return {
      candidateId: candidate.id,
      intelligenceCoreRequired: true,
      canPublishDirectly: false,
      confidenceScore: candidate.confidenceScore,
      reviewReason: candidate.status.includes("review") ? candidate.status.replaceAll("_", " ") : undefined,
      isMock: true
    };
  }
};
