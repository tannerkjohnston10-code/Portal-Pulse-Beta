import { mockNILMarketRankings } from "@/data/mock/rankings/rankings-data";
import { rankingEngine } from "@/server/rankings/ranking-engine";

export const nilRankingService = {
  async getNILMarketRankings() {
    return rankingEngine.createSummary("nil", "NIL Market Rankings", "Mock NIL market rankings with labels and disclaimers. Estimates are not facts.", mockNILMarketRankings);
  }
};
