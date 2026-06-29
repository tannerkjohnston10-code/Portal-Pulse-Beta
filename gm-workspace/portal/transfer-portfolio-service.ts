import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmTransferPortfolioService = {
  getPortfolio() {
    return mockGMDashboardData.transferPortfolio;
  },
  getHighPriorityItems() {
    return mockGMDashboardData.transferPortfolio.filter((item) => item.portfolioStatus === "high_priority");
  },
  getTransferRisks() {
    return mockGMDashboardData.transferRisk;
  },
  getTransferOpportunities() {
    return mockGMDashboardData.transferOpportunities;
  }
};
