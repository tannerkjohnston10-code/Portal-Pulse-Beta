import type { EvidenceItem, IntelligenceExplanation, IntelligenceSignal, ReasoningObject } from "@/platform/intelligence/interfaces/intelligence-types";

export const explanationEngine = {
  explain(signals: IntelligenceSignal[], evidence: EvidenceItem[], reasoning: ReasoningObject): IntelligenceExplanation {
    return {
      whatChanged: signals.map((signal) => signal.title).join("; "),
      whyItMatters: reasoning.whyImportant,
      supportingEvidence: evidence.filter((item) => item.evidenceStrength >= 50).map((item) => item.summary),
      contradictingEvidence: evidence.filter((item) => item.contradictingClaimIds.length > 0).map((item) => item.summary),
      timelineContext: "Mock timeline context: this intelligence is generated from recent fictional signal activity.",
      relatedEntities: reasoning.affectedEntities,
      confidence: reasoning.confidence,
      confidenceScore: reasoning.confidenceScore,
      isMock: true
    };
  }
};
