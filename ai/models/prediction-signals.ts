import type { PredictionSignal, WeightedPredictionSignal } from "@/server/ai/types";

export const predictionSignalWeights: Record<PredictionSignal, number> = {
  official_visit: 0.12,
  unofficial_visit: 0.06,
  coach_relationship: 0.1,
  previous_recruitment: 0.06,
  distance_from_home: 0.04,
  roster_need: 0.1,
  scholarship_availability: 0.08,
  returning_starters: 0.05,
  conference_fit: 0.05,
  playing_opportunity: 0.1,
  social_mentions: 0.03,
  official_statements: 0.12,
  player_follows: 0.02,
  source_confidence: 0.1,
  historical_coaching_trends: 0.05,
  nil_market_strength: 0.05,
  recent_commitments: 0.04,
  recruiting_class_balance: 0.03
};

export const predictionSignalModel = {
  describeSignals(): WeightedPredictionSignal[] {
    return Object.entries(predictionSignalWeights).map(([signal, weight]) => ({
      signal: signal as PredictionSignal,
      weight,
      value: 0,
      explanation: "Defined signal only. Prediction algorithms are intentionally not implemented in this phase."
    }));
  }
};
