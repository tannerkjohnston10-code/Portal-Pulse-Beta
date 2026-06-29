import { teamIntelligenceService } from "@/server/services/team-intelligence-service";
import { teamService } from "@/server/services/team-service";

export const TeamSDK = {
  version: "v1",
  list: () => teamService.getTeams(),
  rankings: () => teamService.getTeamRankings(),
  intelligence: (teamId: string) => teamIntelligenceService.getTeamIntelligenceProfile(teamId),
  defaultIntelligence: () => teamIntelligenceService.getDefaultTeamIntelligenceProfile(),
  needs: (teamId: string) => teamIntelligenceService.getTeamNeeds(teamId),
  timeline: (teamId: string) => teamIntelligenceService.getTeamTimeline(teamId)
};
