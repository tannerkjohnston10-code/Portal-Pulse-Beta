import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const opportunityEngine = {
  getOpportunities(teamId = "mock-team-state") {
    return { teamId, opportunities: mockAtlasWorkspace.opportunities, isMock: true };
  },

  getTopOpportunity() {
    return mockAtlasWorkspace.opportunities[0];
  }
};

