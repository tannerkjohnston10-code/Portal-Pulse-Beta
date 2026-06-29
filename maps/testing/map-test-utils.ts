import type { SpatialEntity } from "@/platform/maps/core/map-types";

export function mockSpatialEntity(overrides: Partial<SpatialEntity> = {}): SpatialEntity {
  return {
    id: "mock-spatial-entity",
    entityType: "Region",
    displayName: "Mock Spatial Entity",
    coordinates: { latitude: 0, longitude: 0, isApproximate: true },
    confidence: "unknown",
    relatedEntities: [],
    sourceIds: [],
    isMock: true,
    ...overrides
  };
}

