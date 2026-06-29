import type { ClaimCandidate } from "@/server/ingestion/types";
import type { ClaimVerificationPacket } from "@/server/ai/types";
import { confidenceEngine } from "@/server/ai/confidence/confidence-engine";

export const claimVerificationEngine = {
  async verifyCandidate(candidate: ClaimCandidate): Promise<ClaimVerificationPacket> {
    const basePacket: ClaimVerificationPacket = {
      candidate,
      stage: "confidence",
      sourceReliabilityScore: 50,
      independentSourceCount: 1,
      officialConfirmation: false,
      playerStatement: false,
      coachStatement: false,
      recencyScore: 80,
      consistencyScore: 60,
      conflictCount: 0,
      recommendedConfidence: "low",
      recommendedConfidenceScore: 0,
      explanation: "Mock verification packet. Candidate remains review-gated and is not a database fact.",
      needsAdminReview: true,
      isMock: true
    };

    const confidence = confidenceEngine.calculate(basePacket);
    return {
      ...basePacket,
      recommendedConfidence: confidence.level,
      recommendedConfidenceScore: confidence.score,
      needsAdminReview: confidence.score < 70 || candidate.claimType === "nil_report"
    };
  }
};
