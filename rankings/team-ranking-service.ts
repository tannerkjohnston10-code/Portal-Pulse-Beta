import { mockTeamTransferRankings } from "@/data/mock/rankings/rankings-data";
import { rankingEngine } from "@/server/rankings/ranking-engine";

export const teamRankingService = {
  async getTeamTransferRankings() {
    return rankingEngine.createSummary("teams", "Team Transfer Rankings", "Mock rankings for team portal class impact, roster fit, and net talent.", mockTeamTransferRankings);
  }
};
