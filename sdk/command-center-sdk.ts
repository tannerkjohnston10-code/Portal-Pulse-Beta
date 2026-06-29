import { commandCenterService } from "@/server/services/command-center-service";
import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";

export const CommandCenterSDK = {
  version: "v1",
  snapshot: () => commandCenterService.getCommandCenterSnapshot(),
  breakingUpdates: () => commandCenterService.getBreakingPortalUpdates(),
  marketMovers: () => commandCenterService.getMarketMovers(),
  predictionMovers: () => commandCenterService.getPredictionMovers(),
  teamMomentum: () => commandCenterService.getTeamMomentum(),
  conferenceActivity: () => commandCenterService.getConferenceActivity(),
  nilMovement: () => commandCenterService.getNILMovement(),
  watchlistUpdates: () => commandCenterService.getWatchlistUpdates(),
  aiBriefing: () => commandCenterService.getAIBriefing(),
  transferMapEvents: () => commandCenterService.getTransferMapEvents(),
  search: (query: string) => commandCenterService.searchCommandCenter(query),
  intelligenceSnapshot: () => IntelligenceCore.generateCommandCenterSnapshot()
};
