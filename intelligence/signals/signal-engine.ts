import type { IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

const generatedAt = "2026-06-28T13:00:00.000Z";

export const signalEngine = {
  collectSignals(subjectId: string): IntelligenceSignal[] {
    return [
      {
        id: `mock-signal-${subjectId}-ranking`,
        type: "ranking_movement",
        title: "Mock ranking movement detected",
        summary: "A fictional ranking signal moved enough to require shared importance scoring.",
        sourceCount: 3,
        confidence: "medium",
        confidenceScore: 68,
        timestamp: generatedAt,
        importance: 74,
        evidenceIds: [`mock-evidence-${subjectId}-ranking`],
        affectedEntities: [{ id: subjectId, type: "team", label: "Mock affected team", isMock: true }],
        isMock: true
      },
      {
        id: `mock-signal-${subjectId}-source-volume`,
        type: "source_volume",
        title: "Mock source volume increased",
        summary: "Fictional source activity increased across multiple related entities.",
        sourceCount: 2,
        confidence: "medium",
        confidenceScore: 62,
        timestamp: generatedAt,
        importance: 66,
        evidenceIds: [`mock-evidence-${subjectId}-source-volume`],
        affectedEntities: [{ id: "mock-player", type: "player", label: "Mock Player", isMock: true }],
        isMock: true
      }
    ];
  },

  normalizeSignals(signals: IntelligenceSignal[]): IntelligenceSignal[] {
    return signals.map((signal) => ({
      ...signal,
      confidenceScore: Math.max(0, Math.min(signal.confidenceScore, 100)),
      importance: Math.max(0, Math.min(signal.importance, 100))
    }));
  }
};
