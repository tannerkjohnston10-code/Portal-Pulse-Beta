import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmScholarshipPlanningService = {
  getScholarshipIQ() {
    return mockGMDashboardData.scholarshipIQ;
  },
  getRecommendedActions() {
    return mockGMDashboardData.scholarshipIQ.recommendedActions;
  }
};
