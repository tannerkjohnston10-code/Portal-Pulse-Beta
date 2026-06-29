import { mockNetworkReports } from "@/platform/network/network-mock-data";

export const networkWorkspaceSharingService = {
  getWorkspaceIntegrations() {
    return [
      { id: "coach-workspace-placeholder", label: "Coach Workspace", status: "future_enterprise_placeholder", isMock: true },
      { id: "gm-workspace", label: "GM Workspace", status: "mock_share_ready", isMock: true },
      { id: "atlas", label: "Atlas", status: "mock_context_link", isMock: true },
      { id: "labs", label: "Portal Pulse Labs", status: "simulation_share_placeholder", isMock: true }
    ] as const;
  },
  shareReportToWorkspace(reportId: string, workspaceId: string) {
    return {
      report: mockNetworkReports.find((report) => report.id === reportId) ?? mockNetworkReports[0],
      workspaceId,
      status: "mock_share_placeholder",
      isMock: true as const
    };
  }
};
