import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const rosterDNAService = {
  getRosterDNA(teamId = "mock-team-state") {
    return { ...mockAtlasWorkspace.rosterDNA, teamId, isMock: true };
  }
};

