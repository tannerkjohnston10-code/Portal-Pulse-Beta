import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmOrganizationalPlanningService = {
  getPlans() {
    return mockGMDashboardData.organizationalPlans;
  },
  getScenarioPlans() {
    return mockGMDashboardData.organizationalPlans.filter((plan) => plan.planningHorizon === "scenario");
  }
};
