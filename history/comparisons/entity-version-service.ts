import { snapshotService } from "@/platform/history/snapshots/snapshot-service";
import type { SnapshotComparison } from "@/platform/history/snapshots/history-types";
import type { ConfidenceLevel } from "@/types/portal";

const confidenceScores: Record<ConfidenceLevel, number> = {
  high: 100,
  medium: 70,
  low: 40,
  conflicting: 20,
  unknown: 0
};

export const entityVersionService = {
  compareSnapshots(entityId: string, dateA: string, dateB: string): SnapshotComparison {
    const a = snapshotService.getEntitySnapshot(entityId, dateA);
    const b = snapshotService.getEntitySnapshot(entityId, dateB);
    return {
      id: `mock-comparison-${entityId}`,
      entityId,
      dateA,
      dateB,
      whatChanged: [
        `Confidence moved from ${a?.confidenceAtTime ?? "unknown"} to ${b?.confidenceAtTime ?? "unknown"}.`,
        `Source count changed from ${a?.sourceCountAtTime ?? 0} to ${b?.sourceCountAtTime ?? 0}.`,
        `Prediction state changed from ${a?.predictionStateAtTime ?? "unknown"} to ${b?.predictionStateAtTime ?? "unknown"}.`
      ],
      confidenceDelta: (b ? confidenceScores[b.confidenceAtTime] : 0) - (a ? confidenceScores[a.confidenceAtTime] : 0),
      sourceCountDelta: (b?.sourceCountAtTime ?? 0) - (a?.sourceCountAtTime ?? 0),
      isMock: true
    };
  }
};
