import { mockPositionGroupRankings } from "@/data/mock/rankings/rankings-data";
import { rankingEngine } from "@/server/rankings/ranking-engine";

export const positionRankingService = {
  async getPositionGroupRankings() {
    return rankingEngine.createSummary("positions", "Position Group Rankings", "Mock rankings for position scarcity, volume, demand, and NIL activity.", mockPositionGroupRankings);
  }
};
