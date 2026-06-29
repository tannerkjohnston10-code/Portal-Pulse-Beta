import { mockPlayerTransferRankings } from "@/data/mock/rankings/rankings-data";
import { rankingEngine } from "@/server/rankings/ranking-engine";

export const playerRankingService = {
  async getPlayerTransferRankings() {
    return rankingEngine.createSummary("players", "Player Transfer Rankings", "Source-aware mock rankings for transfer portal players.", mockPlayerTransferRankings);
  }
};
