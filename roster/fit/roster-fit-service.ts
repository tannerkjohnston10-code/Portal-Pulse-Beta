import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const rosterFitService = {
  getRosterFit(teamId = "mock-team-state") {
    return {
      teamId,
      topFits: mockAtlasWorkspace.transferFits,
      explanation: "Mock roster fit combines need, playing time, scheme placeholder, eligibility, experience, geography, and relationship fit.",
      isMock: true
    };
  }
};

