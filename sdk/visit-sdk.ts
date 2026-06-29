import { visitService } from "@/server/services/visit-service";

export const VisitSDK = {
  version: "v1",
  list: () => visitService.getVisits(),
  forPlayer: (playerId: string) => visitService.getVisitsForPlayer(playerId)
};
