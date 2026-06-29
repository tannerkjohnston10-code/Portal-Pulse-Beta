import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const transferFitService = {
  getTransferFit(playerId = "mock-transfer-tackle", teamId = "mock-team-state") {
    const fit = mockAtlasWorkspace.transferFits.find((item) => item.playerId === playerId) ?? mockAtlasWorkspace.transferFits[0];
    return { ...fit, teamId, isMock: true };
  }
};

