import { mockWatchlistMarketUpdates } from "@/platform/market/exchange/mock-market-data";

export const marketWatchlistService = {
  getWatchlistActivity() {
    return {
      updates: mockWatchlistMarketUpdates,
      summary: "Mock watchlist activity shows fictional players and teams heating up.",
      confidence: "medium" as const,
      isMock: true
    };
  }
};

