import type { AgentFinding } from "@/platform/athena/types/athena-types";

export const athenaSafetyRules = {
  rules: [
    "Never invent claims.",
    "Never present predictions as facts.",
    "Never confirm NIL unless sourced.",
    "Label mock data clearly.",
    "Cite evidence placeholders in mock mode.",
    "Defer surfacing decisions to the Intelligence Core.",
    "Flag conflicts.",
    "Route low-confidence items to review."
  ],

  evaluateFinding(finding: AgentFinding) {
    const hasEvidence = finding.supportingEvidenceIds.length > 0;
    const hasConflict = finding.contradictingEvidenceIds.length > 0;
    const isLowConfidence = finding.proposedConfidence === "low" || finding.proposedConfidence === "unknown";

    return {
      findingId: finding.id,
      allowedForCoreSubmission: hasEvidence,
      mustRouteToReview: hasConflict || isLowConfidence,
      maySurfaceDirectly: false,
      failedRules: hasEvidence ? [] : ["Missing evidence references"],
      notes: "Mock safety gate. Athena can submit proposals to the Intelligence Core, but cannot publish conclusions directly.",
      isMock: true
    };
  }
} as const;

