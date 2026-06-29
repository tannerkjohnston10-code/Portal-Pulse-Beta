import type { RegisteredSourceType, SourceRegistryEntry } from "@/server/ingestion/types";

const baseScores: Record<RegisteredSourceType, number> = {
  official_school: 95,
  player_statement: 95,
  coach_statement: 90,
  verified_reporter: 85,
  recruiting_site: 75,
  news_article: 70,
  rss_feed: 70,
  podcast: 60,
  social_media: 55,
  message_board: 20,
  unknown: 10
};

export const reliabilityScorer = {
  baseScoreForType(sourceType: RegisteredSourceType): number {
    return baseScores[sourceType] ?? 10;
  },

  scoreSource(source: SourceRegistryEntry, adminOverride?: number): number {
    if (typeof adminOverride === "number") return adminOverride;
    return source.reliabilityScore || reliabilityScorer.baseScoreForType(source.sourceType);
  }
};
