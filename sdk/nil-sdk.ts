import { nilService } from "@/server/services/nil-service";

export const NILSDK = {
  version: "v1",
  list: () => nilService.getNILReports(),
  forPlayer: (playerId: string) => nilService.getNILReportsForPlayer(playerId)
};
