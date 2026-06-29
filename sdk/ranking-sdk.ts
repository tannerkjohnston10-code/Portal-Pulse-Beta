import { rankingService } from "@/server/services/ranking-service";
import type { RankingType } from "@/types/rankings";

export const RankingSDK = {
  version: "v1",
  get: (type: RankingType) => rankingService.getRankingSummary(type),
  all: () => rankingService.getAllRankingSummaries(),
  commandCenterMovers: () => rankingService.getCommandCenterRankingMovers()
};
