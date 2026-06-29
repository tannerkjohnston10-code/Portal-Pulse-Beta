import type { ConfidenceLevel } from "@/types/portal";
import type { EvidenceItem, IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

export const confidenceCalculator = {
  calculate(signals: IntelligenceSignal[], evidence: EvidenceItem[]) {
    const signalScore = signals.reduce((sum, signal) => sum + signal.confidenceScore, 0) / Math.max(signals.length, 1);
    const evidenceScore = evidence.reduce((sum, item) => sum + item.evidenceStrength, 0) / Math.max(evidence.length, 1);
    const confidenceScore = Math.round((signalScore + evidenceScore) / 2);
    const confidence: ConfidenceLevel = confidenceScore >= 75 ? "high" : confidenceScore >= 55 ? "medium" : confidenceScore >= 35 ? "low" : "unknown";
    return { confidence, confidenceScore };
  }
};
