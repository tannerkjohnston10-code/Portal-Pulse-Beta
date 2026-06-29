import { mockHeatZones } from "@/platform/maps/core/mock-map-data";

export const heatmapService = {
  getHeatZones: () => mockHeatZones,
  getHottestZone: () => [...mockHeatZones].sort((a, b) => b.intensity - a.intensity)[0]
};

