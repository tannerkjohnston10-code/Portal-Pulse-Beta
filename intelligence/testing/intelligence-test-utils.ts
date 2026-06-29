import type { IntelligenceSignal } from "@/platform/intelligence/interfaces/intelligence-types";

export const intelligenceTestUtils = {
  mockSignal(overrides: Partial<IntelligenceSignal> = {}): IntelligenceSignal {
    return {
      id: "mock-test-signal",
      type: "source_volume",
      title: "Mock test signal",
      summary: "Mock signal for Intelligence Core tests.",
      sourceCount: 1,
      confidence: "medium",
      confidenceScore: 60,
      timestamp: "2026-06-28T13:00:00.000Z",
      importance: 50,
      evidenceIds: ["mock-test-evidence"],
      affectedEntities: [{ id: "mock-entity", type: "player", label: "Mock Entity", isMock: true }],
      isMock: true,
      ...overrides
    };
  }
};
