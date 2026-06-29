import type { EvidenceItem, IntelligenceSignal, ReasoningObject } from "@/platform/intelligence/interfaces/intelligence-types";
import { confidenceCalculator } from "@/platform/intelligence/scoring/confidence-calculator";
import { evidenceEngine } from "@/platform/intelligence/evidence/evidence-engine";

export const reasoningEngine = {
  reason(subjectId: string, signals: IntelligenceSignal[], evidence: EvidenceItem[]): ReasoningObject {
    const confidence = confidenceCalculator.calculate(signals, evidence);
    return {
      id: `mock-reasoning-${subjectId}`,
      whyImportant: "Mock reasoning: multiple fictional signals changed together, so the platform should score and explain the change centrally.",
      whyNow: "Mock reasoning: the latest signal timestamps are recent enough to affect Command Center priority and notifications.",
      affectedEntities: signals.flatMap((signal) => signal.affectedEntities),
      supportingEvidence: evidenceEngine.findSupportingEvidence(evidence),
      weakeningEvidence: evidenceEngine.findWeakeningEvidence(evidence),
      confidence: confidence.confidence,
      confidenceScore: confidence.confidenceScore,
      whatCouldHappenNext: ["Monitor additional source activity", "Watch for ranking movement", "Route conflicts to review if confidence drops"],
      isMock: true
    };
  }
};
