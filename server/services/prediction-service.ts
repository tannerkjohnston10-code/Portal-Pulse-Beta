import type { Prediction } from "@/types/portal";
import type { PredictionFilters } from "@/lib/validators/query-validators";
import { predictionRepository } from "@/server/repositories/prediction-repository";

export const predictionService = {
  async getPredictions(filters: PredictionFilters = {}): Promise<Prediction[]> {
    const predictions = await predictionRepository.findMany();
    return predictions.filter((prediction) => {
      if (filters.confidence && prediction.confidence !== filters.confidence) return false;
      return true;
    });
  },

  async getPredictionsForPlayer(playerId: string): Promise<Prediction[]> {
    return predictionRepository.findByPlayerId(playerId);
  },

  async preservePredictionHistory(_prediction: Prediction): Promise<void> {
    // TODO: Snapshot probability changes before each update.
  },

  async explainPrediction(prediction: Prediction): Promise<string> {
    // TODO: Generate transparent explanation from model inputs and claim sources.
    return prediction.explanation;
  }
};
