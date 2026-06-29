import { predictionService } from "@/server/services/prediction-service";

export const PredictionSDK = {
  version: "v1",
  list: () => predictionService.getPredictions(),
  forPlayer: (playerId: string) => predictionService.getPredictionsForPlayer(playerId)
};
