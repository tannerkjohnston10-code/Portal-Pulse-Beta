import type { AnyRankingItem, RankingSummary, RankingType } from "@/types/rankings";

export const rankingEngine = {
  calculateRankChange(rank: number, previousRank: number) {
    return previousRank - rank;
  },

  explainScore(item: AnyRankingItem) {
    return `${item.explanation} Score ${item.score} is driven by ${item.factors.map((factor) => factor.label.toLowerCase()).join(", ")}.`;
  },

  identifyMovers(items: AnyRankingItem[]) {
    return {
      rising: items.filter((item) => item.rankChange > 0),
      falling: items.filter((item) => item.rankChange < 0),
      flat: items.filter((item) => item.rankChange === 0)
    };
  },

  attachSourceConfidence(items: AnyRankingItem[]): AnyRankingItem[] {
    return items.map((item) => ({
      ...item,
      confidenceScore: Math.min(100, Math.max(0, item.confidenceScore))
    }));
  },

  createSummary(type: RankingType, title: string, description: string, items: AnyRankingItem[]): RankingSummary {
    return {
      type,
      title,
      description,
      items: this.attachSourceConfidence(items).sort((a, b) => a.rank - b.rank),
      lastUpdated: items[0]?.lastUpdated ?? "2026-06-28T12:45:00.000Z",
      isMock: true
    };
  }
};
