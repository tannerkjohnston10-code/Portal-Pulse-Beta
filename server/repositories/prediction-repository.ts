import { mockPredictions } from "@/data/mock/portal-data";
import type { Prediction } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const predictionRepository = {
  async findMany(): Promise<Prediction[]> {
    return mockPredictions;
  },

  async findByPlayerId(playerId: string): Promise<Prediction[]> {
    return mockPredictions.filter((prediction) => prediction.playerId === playerId);
  }
};
