import { mockMarketMovers, mockPositionMarkets } from "@/platform/market/exchange/mock-market-data";

export const marketLiquidityService = {
  getInterestVolume() {
    return {
      label: "Mock Interest Volume",
      score: 81,
      activeEntities: mockMarketMovers.length,
      explanation: "Interest volume measures fictional team/player attention and evidence counts, not financial value.",
      confidence: "medium" as const,
      isMock: true
    };
  },

  getPositionScarcity() {
    return mockPositionMarkets.sort((a, b) => b.scarcityScore - a.scarcityScore);
  }
};

