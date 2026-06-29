import { mockMarketMovers, mockPredictionMovers } from "@/data/mock/command-center/command-center-data";
import type { MarketMover, PredictionMover } from "@/types/command-center";

export const marketMoversService = {
  async getMarketMovers(): Promise<MarketMover[]> {
    // TODO: Replace mock scoring with source velocity, Portal Pulse Score movement, and verified claim deltas.
    return mockMarketMovers;
  },

  async getPredictionMovers(): Promise<PredictionMover[]> {
    // TODO: Calculate movement from prediction history instead of static mock data.
    return mockPredictionMovers;
  }
};
