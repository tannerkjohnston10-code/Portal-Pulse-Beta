import type { SourceTrustSignal } from "@/server/ai/types";
import type { SourceRegistryEntry } from "@/server/ingestion/types";
import { reliabilityScorer } from "@/server/ingestion/sources/reliability-scorer";

export const sourceTrustEngine = {
  evaluate(source: SourceRegistryEntry): SourceTrustSignal {
    const currentReliabilityScore = reliabilityScorer.scoreSource(source);
    return {
      sourceId: source.id,
      sourceType: source.sourceType,
      historicalAccuracyScore: currentReliabilityScore,
      correctionRate: 0,
      conflictFrequency: 0,
      currentReliabilityScore,
      explanation: "Mock source trust signal. Future scores should learn from corrections, conflicts, and prediction outcomes.",
      isMock: true
    };
  }
};
