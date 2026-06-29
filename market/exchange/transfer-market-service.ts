import {
  mockConferenceMarkets,
  mockMarketCommentary,
  mockMarketMetrics,
  mockMarketMovers,
  mockMarketSnapshot,
  mockMarketTimeline,
  mockPositionMarkets,
  mockWatchlistMarketUpdates
} from "@/platform/market/exchange/mock-market-data";
import type { TransferMarketExchangeDashboard } from "@/platform/market/exchange/market-types";
import { marketMomentumEngine } from "@/platform/market/momentum/momentum-engine";

export const transferMarketService = {
  getDashboard(): TransferMarketExchangeDashboard {
    return {
      snapshot: mockMarketSnapshot,
      metrics: mockMarketMetrics,
      movers: mockMarketMovers,
      trendingPlayers: mockMarketMovers.filter((item) => item.entityType === "player"),
      trendingTeams: mockMarketMovers.filter((item) => item.entityType === "team"),
      conferences: mockConferenceMarkets,
      positions: mockPositionMarkets,
      predictionMovers: mockMarketMovers.filter((item) => item.category === "prediction_change"),
      interestLeaders: mockMarketMovers.filter((item) => item.category === "growing_interest" || item.category === "active_school"),
      sourceActivity: mockMarketMetrics.filter((item) => item.key === "source_activity"),
      timeline: mockMarketTimeline,
      watchlist: mockWatchlistMarketUpdates,
      commentary: mockMarketCommentary,
      isMock: true
    };
  },

  getMarketSummary() {
    const momentum = marketMomentumEngine.calculateMomentum();
    return {
      ...mockMarketSnapshot,
      momentum,
      commentary: mockMarketCommentary[0],
      isMock: true
    };
  },

  getMarketMovers() {
    return mockMarketMovers;
  },

  getCommandCenterWidget() {
    return {
      todayMarket: mockMarketSnapshot,
      topMovers: mockMarketMovers.slice(0, 3),
      heatIndex: mockMarketSnapshot.heatIndex,
      trendingConferences: mockConferenceMarkets.slice(0, 2),
      commentary: mockMarketCommentary[0],
      isMock: true
    };
  }
};

