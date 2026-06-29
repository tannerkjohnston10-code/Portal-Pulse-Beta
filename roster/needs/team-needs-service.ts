import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const teamNeedsService = {
  getTeamNeeds(teamId = "mock-team-state") {
    return { teamId, needs: mockAtlasWorkspace.needs, isMock: true };
  },

  getBiggestNeed() {
    return mockAtlasWorkspace.needs[0];
  }
};

