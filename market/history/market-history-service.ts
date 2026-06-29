import { historicalReplayService } from "@/platform/history/replay/historical-replay-service";
import { mockMarketTimeline } from "@/platform/market/exchange/mock-market-data";

export const marketHistoryService = {
  getMarketTimeline() {
    return mockMarketTimeline.map((event) => ({
      ...event,
      apolloContext: event.apolloReplayEventId ? "Connected to Apollo mock replay context." : "Future Apollo snapshot link pending."
    }));
  },

  getHistoricalComparison() {
    return historicalReplayService.compareSnapshots("mock-player-alpha", "2026-06-14T12:00:00.000Z", "2026-06-28T12:00:00.000Z");
  }
};

