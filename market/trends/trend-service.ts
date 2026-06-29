import { mockConferenceMarkets, mockMarketMetrics, mockMarketMovers, mockPositionMarkets } from "@/platform/market/exchange/mock-market-data";

export const marketTrendService = {
  getTrendingPlayers() {
    return mockMarketMovers.filter((item) => item.entityType === "player").sort((a, b) => b.score - a.score);
  },

  getTrendingTeams() {
    return mockMarketMovers.filter((item) => item.entityType === "team").sort((a, b) => b.score - a.score);
  },

  getTrendingConferences() {
    return mockConferenceMarkets.sort((a, b) => b.activityScore - a.activityScore);
  },

  getPositionMarkets() {
    return mockPositionMarkets;
  },

  getHeatIndex() {
    const heat = mockMarketMetrics.find((metric) => metric.key === "portal_activity_index");
    return {
      score: heat?.value ?? 0,
      previousScore: heat?.previousValue ?? 0,
      direction: heat?.direction ?? "flat",
      explanation: heat?.explanation ?? "Mock heat index placeholder.",
      confidence: heat?.confidence ?? "unknown",
      isMock: true
    };
  }
};

