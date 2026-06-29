import { claimVerificationEngine } from "@/server/ai/verification/claim-verification-engine";
import { conflictDetector } from "@/server/ai/conflict/conflict-detector";
import { intelligenceSummarizer } from "@/server/ai/summarization/intelligence-summarizer";
import { timelineIntelligenceEngine } from "@/server/ai/timeline/timeline-intelligence-engine";
import type { ClaimCandidate } from "@/server/ingestion/types";

export const intelligenceJob = {
  async processClaimCandidates(candidates: ClaimCandidate[]) {
    const verifications = await Promise.all(candidates.map((candidate) => claimVerificationEngine.verifyCandidate(candidate)));
    const conflicts = conflictDetector.detectCandidateConflicts(candidates);
    const summaries = verifications.map((packet) => intelligenceSummarizer.summarizeVerification(packet));
    const timelineEvents = timelineIntelligenceEngine.assembleFromClaimCandidates(candidates);

    return {
      verifications,
      conflicts,
      summaries,
      timelineEvents,
      databaseWritesAllowed: false,
      explanation: "AI intelligence output is review-gated. No direct database writes are allowed from AI.",
      isMock: true
    };
  }
};
