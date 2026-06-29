import type { AnyRankingItem } from "@/types/rankings";

export function serializeRanking(item: AnyRankingItem) {
  return {
    id: item.id,
    rankingType: item.rankingType,
    rank: item.rank,
    previousRank: item.previousRank,
    rankChange: item.rankChange,
    movement: item.movement,
    score: item.score,
    confidenceScore: item.confidenceScore,
    sourceCount: item.sourceCount,
    lastUpdated: item.lastUpdated,
    explanation: item.explanation,
    factors: item.factors,
    isMock: item.isMock
  };
}
