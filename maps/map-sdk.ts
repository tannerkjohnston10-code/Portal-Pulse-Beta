import { spatialIntelligenceService } from "@/platform/maps/core/spatial-intelligence-service";
import { flowEngine } from "@/platform/maps/flows/flow-engine";
import { mapLayerService } from "@/platform/maps/layers/map-layer-service";

export const MapSDK = {
  version: "v1",

  dashboard: spatialIntelligenceService.getMapDashboard,
  cartographerFinding: spatialIntelligenceService.getCartographerFinding,
  layers: mapLayerService.getLayers,
  defaultLayers: mapLayerService.getDefaultLayers,
  flows: flowEngine.getFlows,

  getTransferMapEvents() {
    return flowEngine.getFlows().map((flow) => ({
      id: flow.id,
      entityId: flow.destination.id,
      entityType: "team" as const,
      latitude: flow.destination.coordinates.latitude,
      longitude: flow.destination.coordinates.longitude,
      label: flow.displayName,
      isMock: true
    }));
  },

  getRecruitingMapEvents() {
    return flowEngine.getFlowsByType("high_school_to_college").map((flow) => ({
      id: flow.id,
      entityId: flow.origin.id,
      entityType: "recruiting_pipeline" as const,
      latitude: flow.origin.coordinates.latitude,
      longitude: flow.origin.coordinates.longitude,
      label: flow.displayName,
      isMock: true
    }));
  }
};
