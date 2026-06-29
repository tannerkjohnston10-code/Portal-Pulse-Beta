import { mockPredictionAccuracy } from "@/platform/history/snapshots/mock-history-data";

export const predictionAccuracyService = {
  calculatePredictionAccuracy() {
    const resolved = mockPredictionAccuracy.filter((item) => item.accuracyResult !== "unresolved");
    return {
      results: mockPredictionAccuracy,
      resolvedCount: resolved.length,
      unresolvedCount: mockPredictionAccuracy.length - resolved.length,
      mockAccuracyRate: resolved.length ? Math.round((resolved.filter((item) => item.accuracyResult === "correct" || item.accuracyResult === "partial").length / resolved.length) * 100) : 0,
      isMock: true
    };
  }
};

