import { playerService } from "@/server/services/player-service";

export const PlayerSDK = {
  version: "v1",
  list: () => playerService.getPlayers(),
  get: (playerId: string) => playerService.getPlayerDetails(playerId),
  timeline: (playerId: string) => playerService.buildPlayerTimeline(playerId)
};
