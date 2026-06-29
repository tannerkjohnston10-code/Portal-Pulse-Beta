import type { InsightRankingFactors, InsightSignal } from "@/types/insights";

const weights: InsightRankingFactors = {
  recency: 0.14,
  confidence: 0.14,
  sourceCount: 0.1,
  affectedPlayerQuality: 0.08,
  affectedTeamQuality: 0.08,
  predictionMovementSize: 0.09,
  nilMovementSize: 0.06,
  conferenceImpact: 0.09,
  userWatchlistRelevance: 0.1,
  conflictSeverity: 0.06,
  historicalSignificance: 0.06
};

export const insightRanker = {
  scoreSignal(signal: InsightSignal): number {
    const sourceScore = Math.min(signal.sourceCount * 25, 100);
    const score =
      signal.recencyScore * weights.recency +
      signal.confidenceScore * weights.confidence +
      sourceScore * weights.sourceCount +
      signal.affectedPlayerQuality * weights.affectedPlayerQuality +
      signal.affectedTeamQuality * weights.affectedTeamQuality +
      signal.predictionMovementSize * weights.predictionMovementSize +
      signal.nilMovementSize * weights.nilMovementSize +
      signal.conferenceImpact * weights.conferenceImpact +
      signal.userWatchlistRelevance * weights.userWatchlistRelevance +
      signal.conflictSeverity * weights.conflictSeverity +
      signal.historicalSignificance * weights.historicalSignificance;

    return Math.round(Math.max(0, Math.min(score, 100)));
  },

  rankSignals(signals: InsightSignal[]): InsightSignal[] {
    return [...signals].sort((a, b) => this.scoreSignal(b) - this.scoreSignal(a));
  }
};
