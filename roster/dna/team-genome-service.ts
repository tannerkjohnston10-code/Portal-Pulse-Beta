import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const teamGenomeService = {
  getTeamGenome(teamId = "mock-team-state") {
    return { ...mockAtlasWorkspace.teamGenome, teamId, isMock: true };
  }
};
