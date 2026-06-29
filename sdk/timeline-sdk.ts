import { playerService } from "@/server/services/player-service";
import { teamIntelligenceService } from "@/server/services/team-intelligence-service";

export const TimelineSDK = {
  version: "v1",
  forPlayer: (playerId: string) => playerService.buildPlayerTimeline(playerId),
  forTeam: (teamId: string) => teamIntelligenceService.getTeamTimeline(teamId)
};
