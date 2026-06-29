import { mockGMDashboardData } from "@/platform/gm-workspace/dashboard/mock-gm-workspace-data";

export const gmRecruitingPipelineService = {
  getPipeline() {
    return mockGMDashboardData.recruitingPipeline;
  },
  getPositionPriorities() {
    return mockGMDashboardData.recruitingPipeline.positionPriorities;
  }
};
