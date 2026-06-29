import { RosterSDK } from "@/platform/roster/roster-sdk";

export const rosterTestUtils = {
  getMockWorkspaceFixture() {
    return RosterSDK.getRosterIntelligence();
  },

  assertAllMock() {
    const workspace = RosterSDK.getRosterIntelligence();
    return {
      allMock:
        workspace.isMock &&
        workspace.depthChart.every((item) => item.isMock) &&
        workspace.needs.every((item) => item.isMock) &&
        workspace.transferFits.every((item) => item.isMock) &&
        workspace.simulations.every((item) => item.isMock),
      isMock: true
    };
  }
};

