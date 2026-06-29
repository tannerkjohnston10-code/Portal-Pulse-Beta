import type { IntelligenceCoreOutput } from "@/platform/intelligence/interfaces/intelligence-types";

export const intelligenceHistory = {
  createSnapshot(output: IntelligenceCoreOutput) {
    return {
      snapshotId: `mock-intelligence-snapshot-${output.id}`,
      subjectId: output.subjectId,
      generatedAt: output.generatedAt,
      importanceScore: output.importanceScore,
      confidenceScore: output.reasoning.confidenceScore,
      isMock: true
    };
  }
};
