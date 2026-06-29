import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmWorkspaceService = {
  getDashboard(programId = "mock-state-football") {
    return { ...mockGMDashboardData, id: programId, isMock: true as const };
  },
  getExecutiveBrief() {
    return mockGMDashboardData.executiveBrief;
  },
  getRosterHealth() {
    return mockGMDashboardData.rosterHealth;
  },
  getExecutiveCouncil() {
    return mockGMDashboardData.executiveCouncil;
  },
  getCommandCenterWidget() {
    return {
      id: "mock-gm-command-center-widget",
      executivePriorities: mockGMDashboardData.executiveBrief.topPriorities.map((priority) => priority.title),
      rosterHealthScore: mockGMDashboardData.rosterHealth.overallScore,
      scholarshipAlerts: mockGMDashboardData.scholarshipIQ.futureShortages.map((shortage) => `Mock shortage: ${shortage}`),
      topTransferOpportunity: mockGMDashboardData.transferOpportunities[0]?.title ?? "No mock opportunity available",
      linkHref: "/gm",
      confidence: "medium" as const,
      lastUpdated: mockGMDashboardData.lastUpdated,
      isMock: true as const
    };
  }
};
