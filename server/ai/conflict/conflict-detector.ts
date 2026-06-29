import type { ClaimCandidate } from "@/server/ingestion/types";
import type { DetectedConflict } from "@/server/ai/types";

export const conflictDetector = {
  detectCandidateConflicts(candidates: ClaimCandidate[]): DetectedConflict[] {
    const conflicts: DetectedConflict[] = [];
    for (const candidate of candidates) {
      const competing = candidates.find(
        (other) =>
          other.id !== candidate.id &&
          other.subjectGuess === candidate.subjectGuess &&
          other.claimType === candidate.claimType &&
          other.extractedValue !== candidate.extractedValue
      );

      if (competing) {
        conflicts.push({
          id: `conflict-${candidate.id}-${competing.id}`,
          type: "source_disagreement",
          severity: "medium",
          sourcesInvolved: [candidate.sourceId, competing.sourceId],
          claimsInvolved: [candidate.id, competing.id],
          recommendedAction: "Route to admin review and reduce confidence until reconciled.",
          confidenceReduction: 25,
          needsReview: true,
          explanation: "Two candidates make different claims about the same subject and claim type.",
          isMock: true
        });
      }
    }
    return conflicts;
  }
};
