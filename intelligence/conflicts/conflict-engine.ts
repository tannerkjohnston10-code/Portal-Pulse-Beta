import type { EvidenceItem, IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

export const conflictEngine = {
  detectConflicts(signals: IntelligenceSignal[], evidence: EvidenceItem[]) {
    const conflictingSignals = signals.filter((signal) => signal.confidence === "conflicting");
    const conflictingEvidence = evidence.filter((item) => item.contradictingClaimIds.length > 0);
    return {
      hasConflicts: conflictingSignals.length > 0 || conflictingEvidence.length > 0,
      conflictingSignalIds: conflictingSignals.map((signal) => signal.id),
      conflictingEvidenceIds: conflictingEvidence.map((item) => item.id),
      severity: Math.min(100, conflictingSignals.length * 25 + conflictingEvidence.length * 25),
      isMock: true
    };
  }
};
