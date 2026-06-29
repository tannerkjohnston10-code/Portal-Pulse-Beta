import type { GraphEntity, GraphRelationship } from "@/platform/knowledge-graph/core/graph-types";

export function mockGraphEntity(overrides: Partial<GraphEntity> = {}): GraphEntity {
  return {
    id: "mock-graph-entity",
    entityType: "Player",
    displayName: "Mock Entity",
    aliases: ["Mock Alias"],
    confidenceScore: 50,
    sourceIds: ["mock-source"],
    createdAt: "2026-06-28T17:00:00.000Z",
    updatedAt: "2026-06-28T17:00:00.000Z",
    isMock: true,
    ...overrides
  };
}

export function mockGraphRelationship(overrides: Partial<GraphRelationship> = {}): GraphRelationship {
  return {
    id: "mock-graph-relationship",
    relationshipType: "PLAYER_LINKED_TO_COACH",
    fromEntityId: "mock-from",
    toEntityId: "mock-to",
    direction: "directed",
    strengthScore: 50,
    confidenceScore: 50,
    evidenceIds: ["mock-evidence"],
    sourceIds: ["mock-source"],
    firstSeenAt: "2026-06-28T17:00:00.000Z",
    lastSeenAt: "2026-06-28T17:00:00.000Z",
    status: "proposed",
    isInferred: true,
    isMock: true,
    ...overrides
  };
}

