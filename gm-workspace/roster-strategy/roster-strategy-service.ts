import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmRosterStrategyService = {
  getRosterHealth() {
    return mockGMDashboardData.rosterHealth;
  },
  getRosterDNA() {
    return mockGMDashboardData.rosterDNA;
  },
  getTeamGenome() {
    return mockGMDashboardData.teamGenome;
  },
  getInvestmentBoard() {
    return mockGMDashboardData.investmentBoard;
  }
};
