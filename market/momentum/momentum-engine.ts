import { mockMarketMovers } from "@/platform/market/exchange/mock-market-data";
import type { MarketMover } from "@/platform/market/exchange/market-types";

function averageDelta(items: MarketMover[]) {
  return items.length ? Math.round(items.reduce((sum, item) => sum + item.delta, 0) / items.length) : 0;
}

export const marketMomentumEngine = {
  calculateMomentum(items: MarketMover[] = mockMarketMovers) {
    const rising = items.filter((item) => item.delta > 0);
    const falling = items.filter((item) => item.delta < 0);
    return {
      momentumScore: Math.max(0, Math.min(100, 65 + averageDelta(items))),
      acceleration: averageDelta(rising),
      volatility: Math.round(items.reduce((sum, item) => sum + Math.abs(item.delta), 0) / Math.max(items.length, 1)),
      trend: rising.length >= falling.length ? "up" : "down",
      confidence: "medium" as const,
      explanation: "Mock momentum uses fictional score deltas, direction, and evidence volume. It does not create or confirm claims.",
      isMock: true
    };
  },

  getRisers() {
    return mockMarketMovers.filter((item) => item.delta > 0).sort((a, b) => b.delta - a.delta);
  },

  getFallers() {
    return mockMarketMovers.filter((item) => item.delta < 0).sort((a, b) => a.delta - b.delta);
  }
};

