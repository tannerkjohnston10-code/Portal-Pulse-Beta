import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const rosterChemistryService = {
  getRosterChemistry(teamId = "mock-team-state") {
    return { ...mockAtlasWorkspace.rosterChemistry, teamId, isMock: true };
  }
};

