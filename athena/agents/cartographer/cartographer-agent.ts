import { spatialIntelligenceService } from "@/platform/maps/core/spatial-intelligence-service";

export const cartographerSpatialAgent = {
  getFinding() {
    return spatialIntelligenceService.getCartographerFinding();
  },

  getDashboard() {
    return spatialIntelligenceService.getMapDashboard();
  }
};

