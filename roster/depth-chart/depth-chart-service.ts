import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";

export const depthChartService = {
  getDepthChart(teamId = "mock-team-state") {
    return { teamId, positions: mockAtlasWorkspace.depthChart, disclaimer: "Mock projected depth chart only.", isMock: true };
  }
};

