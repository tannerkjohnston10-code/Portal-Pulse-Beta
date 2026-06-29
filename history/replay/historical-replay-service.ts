import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { predictionAccuracyService } from "@/platform/history/accuracy/prediction-accuracy-service";
import { entityVersionService } from "@/platform/history/comparisons/entity-version-service";
import { rankingHistoryService } from "@/platform/history/comparisons/ranking-history-service";
import { mockReplayEvents, mockSnapshots } from "@/platform/history/snapshots/mock-history-data";
import { snapshotService } from "@/platform/history/snapshots/snapshot-service";
import { timelineReplayService } from "@/platform/history/timelines/timeline-replay-service";
import type { ApolloFinding, ReplaySession } from "@/platform/history/snapshots/history-types";

export const historicalReplayService = {
  getEntitySnapshot: snapshotService.getEntitySnapshot,

  getPlayerReplay(playerId: string): ReplaySession {
    const snapshots = snapshotService.getSnapshotsForEntity(playerId);
    return {
      id: `mock-player-replay-${playerId}`,
      subjectType: "player",
      subjectId: playerId,
      title: "Mock Player Historical Replay",
      startDate: mockReplayEvents[0]?.eventDate ?? "2026-06-14T12:00:00.000Z",
      endDate: mockReplayEvents[mockReplayEvents.length - 1]?.eventDate ?? "2026-06-28T12:00:00.000Z",
      events: mockReplayEvents,
      snapshots,
      summary: "Mock replay separates what Portal Pulse believed then, what it believes now, and what remains unresolved.",
      isMock: true
    };
  },

  getTeamReplay(teamId: string): ReplaySession {
    return {
      ...this.getPlayerReplay(teamId),
      id: `mock-team-replay-${teamId}`,
      subjectType: "team",
      subjectId: teamId,
      title: "Mock Team Historical Replay",
      snapshots: mockSnapshots.filter((snapshot) => snapshot.entityType === "team" || snapshot.entityType === "ranking")
    };
  },

  getRankingHistory: rankingHistoryService.getRankingHistory,
  compareSnapshots: entityVersionService.compareSnapshots,
  calculatePredictionAccuracy: predictionAccuracyService.calculatePredictionAccuracy,

  generateReplaySummary(): ApolloFinding {
    const coreOutput = IntelligenceCore.generateInsight("mock-apollo-historical-replay");
    return {
      id: "mock-apollo-finding",
      title: "Mock projection confidence rose but stayed capped",
      summary: "Apollo shows that Portal Pulse gained more mock sources over time, but conflicting evidence prevented the projection from becoming high confidence.",
      biggestHistoricalMover: "Mock Player Alpha Portal Pulse Score +12",
      predictionAccuracySnapshot: "1 partial, 1 unresolved mock prediction outcome",
      thisWeekVsLastWeek: "Source count rose from 4 to 6 while confidence remained medium.",
      submittedToCore: true,
      confidence: coreOutput.reasoning.confidence,
      sourceCount: coreOutput.evidence.length,
      isMock: true
    };
  },

  getReplayDashboard() {
    return {
      playerReplay: this.getPlayerReplay("mock-player-alpha"),
      teamReplay: this.getTeamReplay("mock-team-state"),
      rankingHistory: this.getRankingHistory("team_transfer"),
      comparison: this.compareSnapshots("mock-player-alpha", "2026-06-14T12:00:00.000Z", "2026-06-28T12:00:00.000Z"),
      accuracy: this.calculatePredictionAccuracy(),
      timelineScrubber: timelineReplayService.getTimelineScrubber(),
      apolloFinding: this.generateReplaySummary(),
      isMock: true
    };
  }
};

