import { mockMapLayers } from "@/platform/maps/core/mock-map-data";

export const mapLayerService = {
  getLayers: () => mockMapLayers,
  getDefaultLayers: () => mockMapLayers.filter((layer) => layer.enabledByDefault),
  toggleLayer(layerId: string, enabled: boolean) {
    return {
      layerId,
      enabled,
      note: "Mock toggle only. Future versions will persist map view preferences.",
      isMock: true
    };
  }
};

