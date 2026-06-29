import { mockMarketMetrics, mockMarketMovers, mockMarketTimeline } from "@/platform/market/exchange/mock-market-data";

export const marketSignalService = {
  getSignalStrength() {
    const evidenceCount = mockMarketMovers.reduce((sum, mover) => sum + mover.evidenceCount, 0);
    const sourceCount = mockMarketMovers.reduce((sum, mover) => sum + mover.sourceCount, 0);
    return {
      label: "Mock Signal Strength",
      score: Math.round(mockMarketMetrics.reduce((sum, metric) => sum + metric.value, 0) / mockMarketMetrics.length),
      evidenceCount,
      sourceCount,
      explanation: "Signal strength combines fictional source activity, timeline events, and market movement indicators.",
      isMock: true
    };
  },

  getSourceActivity() {
    return mockMarketMetrics.filter((metric) => metric.key === "source_activity");
  },

  getTimelineSignals() {
    return mockMarketTimeline;
  }
};

