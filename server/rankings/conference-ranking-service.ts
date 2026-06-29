import { mockConferenceTransferRankings } from "@/data/mock/rankings/rankings-data";
import { rankingEngine } from "@/server/rankings/ranking-engine";

export const conferenceRankingService = {
  async getConferenceTransferRankings() {
    return rankingEngine.createSummary("conferences", "Conference Transfer Rankings", "Mock conference rankings for transfer volume, net movement, and momentum.", mockConferenceTransferRankings);
  }
};
