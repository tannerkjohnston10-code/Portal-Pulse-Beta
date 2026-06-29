import { mockSpatialEntities } from "@/platform/maps/core/mock-map-data";

export const regionService = {
  getRegions: () => mockSpatialEntities.filter((entity) => entity.entityType === "Region"),
  getStates: () => mockSpatialEntities.filter((entity) => entity.entityType === "State"),
  getCities: () => mockSpatialEntities.filter((entity) => entity.entityType === "City"),
  getCampuses: () => mockSpatialEntities.filter((entity) => entity.entityType === "Campus")
};

