import { mockSpatialFlows } from "@/platform/maps/core/mock-map-data";

export const pipelineService = {
  getRecruitingPipelines() {
    return mockSpatialFlows.filter((flow) => flow.flowType === "high_school_to_college" || flow.flowType === "state_to_school");
  },

  getStrongestRecruitingPipeline() {
    return this.getRecruitingPipelines().sort((a, b) => b.strength - a.strength)[0];
  }
};

