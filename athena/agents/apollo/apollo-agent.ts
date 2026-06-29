import { historicalReplayService } from "@/platform/history/replay/historical-replay-service";

export const apolloHistoricalAgent = {
  getFinding() {
    return historicalReplayService.generateReplaySummary();
  },

  getReplayDashboard() {
    return historicalReplayService.getReplayDashboard();
  },

  compareThenVsNow(entityId: string) {
    return historicalReplayService.compareSnapshots(entityId, "2026-06-14T12:00:00.000Z", "2026-06-28T12:00:00.000Z");
  }
};

