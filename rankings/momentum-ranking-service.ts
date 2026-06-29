import { mockMomentumRankings } from "@/data/mock/rankings/rankings-data";
import { rankingEngine } from "@/server/rankings/ranking-engine";

export const momentumRankingService = {
  async getMomentumRankings() {
    return rankingEngine.createSummary("momentum", "Momentum Rankings", "Mock rankings for the fastest rising players, teams, conferences, positions, and NIL markets.", mockMomentumRankings);
  }
};
