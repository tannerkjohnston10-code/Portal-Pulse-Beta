import type { PlatformEntityType } from "@/platform/types/platform-types";
import { historicalReplayService } from "@/platform/history/replay/historical-replay-service";

export type HistoricalSnapshotRequest = {
  entityType: PlatformEntityType;
  entityId: string;
  at?: string;
  interval?: "daily" | "weekly" | "monthly";
};

export const HistorySDK = {
  version: "v1",
  replayDashboard: () => historicalReplayService.getReplayDashboard(),
  getPlayerReplay: (playerId: string) => historicalReplayService.getPlayerReplay(playerId),
  getTeamReplay: (teamId: string) => historicalReplayService.getTeamReplay(teamId),
  getRankingHistory: (rankingType: string) => historicalReplayService.getRankingHistory(rankingType),
  calculatePredictionAccuracy: () => historicalReplayService.calculatePredictionAccuracy(),
  generateReplaySummary: () => historicalReplayService.generateReplaySummary(),

  async createSnapshot(request: HistoricalSnapshotRequest) {
    // TODO: Persist snapshots after historical storage is connected.
    return { ...request, snapshotId: `mock-snapshot-${request.entityType}-${request.entityId}`, createdAt: new Date().toISOString(), isMock: true };
  },

  async getPointInTime(request: HistoricalSnapshotRequest) {
    return { ...request, data: historicalReplayService.getEntitySnapshot(request.entityId, request.at ?? "2026-06-28T12:00:00.000Z"), isMock: true };
  },

  async compareSnapshots(entityType: PlatformEntityType, entityId: string, from: string, to: string) {
    return { entityType, ...historicalReplayService.compareSnapshots(entityId, from, to), isMock: true };
  }
};
