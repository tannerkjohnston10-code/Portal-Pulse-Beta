import type { EvidenceItem, IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

export const evidenceEngine = {
  groupEvidence(signals: IntelligenceSignal[]): EvidenceItem[] {
    return signals.map((signal) => ({
      id: signal.evidenceIds[0] ?? `mock-evidence-${signal.id}`,
      supportingClaimIds: [`mock-claim-${signal.id}`],
      supportingSourceIds: [`mock-source-${signal.id}`],
      contradictingClaimIds: signal.confidence === "conflicting" ? [`mock-conflict-${signal.id}`] : [],
      contradictingSourceIds: [],
      historicalConsistency: signal.confidenceScore,
      evidenceStrength: Math.round((signal.confidenceScore + signal.importance) / 2),
      recencyScore: 82,
      summary: `Mock evidence bundle for ${signal.title}.`,
      isMock: true
    }));
  },

  findSupportingEvidence(evidence: EvidenceItem[]) {
    return evidence.filter((item) => item.evidenceStrength >= 50);
  },

  findWeakeningEvidence(evidence: EvidenceItem[]) {
    return evidence.filter((item) => item.contradictingClaimIds.length > 0 || item.evidenceStrength < 50);
  }
};
