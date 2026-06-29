import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const rosterForecastService = {
  getRosterForecast(teamId = "mock-team-state") {
    return { teamId, years: mockAtlasWorkspace.forecast, disclaimer: "Mock multi-year forecast only.", isMock: true };
  }
};

