import { mockNetworkReports } from "@/platform/network/network-mock-data";
import type { NetworkReport } from "@/platform/network/network-types";

export const networkReportService = {
  getReports() {
    return mockNetworkReports;
  },
  getReport(reportId = "mock-report-transfer-fit") {
    return mockNetworkReports.find((report) => report.id === reportId) ?? mockNetworkReports[0];
  },
  createReportDraft(input: Pick<NetworkReport, "title" | "reportType" | "sportIds">) {
    return {
      id: "mock-report-draft",
      ...input,
      status: "draft_placeholder",
      message: "Mock draft only. No report persistence or auth implemented.",
      isMock: true as const
    };
  }
};
