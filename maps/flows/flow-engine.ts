import { mockSpatialFlows } from "@/platform/maps/core/mock-map-data";

export const flowEngine = {
  getFlows: () => mockSpatialFlows,
  getStrongestFlow: () => [...mockSpatialFlows].sort((a, b) => b.strength - a.strength)[0],
  getFlowsByType: (flowType: string) => mockSpatialFlows.filter((flow) => flow.flowType === flowType)
};

