import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmReportService = {
  getReportTemplates() {
    return mockGMDashboardData.reports;
  },
  getDailyReportPlaceholder() {
    return mockGMDashboardData.reports.find((report) => report.cadence === "daily") ?? mockGMDashboardData.reports[0];
  }
};
