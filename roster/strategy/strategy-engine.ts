import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const strategyEngine = {
  generateRosterStrategy(teamId = "mock-team-state") {
    return { teamId, recommendations: mockAtlasWorkspace.strategies, isMock: true };
  }
};

