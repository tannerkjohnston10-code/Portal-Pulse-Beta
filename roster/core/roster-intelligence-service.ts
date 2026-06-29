import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const rosterIntelligenceService = {
  getRosterIntelligence(teamId = "mock-team-state") {
    return { ...mockAtlasWorkspace, requestedTeamId: teamId, isMock: true };
  },

  getRosterSnapshot(teamId = "mock-team-state") {
    return { ...mockAtlasWorkspace.snapshot, teamId, isMock: true };
  }
};

