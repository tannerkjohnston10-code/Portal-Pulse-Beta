import type { AgentFinding } from "@/platform/athena/types/athena-types";

export const agentEvaluator = {
  evaluateFinding(finding: AgentFinding) {
    return {
      findingId: finding.id,
      passesEvidenceMinimum: finding.supportingEvidenceIds.length > 0,
      requiresAdminReview: finding.proposedConfidence === "low" || finding.contradictingEvidenceIds.length > 0,
      score: Math.round((finding.proposedImportance + (finding.supportingEvidenceIds.length > 0 ? 20 : 0)) / 1.2),
      notes: "Mock evaluator only checks proposal structure. Intelligence Core remains the source of truth for surfacing decisions.",
      isMock: true
    };
  }
};

