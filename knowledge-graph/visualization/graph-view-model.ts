import type { GraphNetwork } from "@/platform/knowledge-graph/core/graph-types";

export function buildGraphViewModel(network: GraphNetwork) {
  return {
    nodes: network.entities.map((entity, index) => ({
      id: entity.id,
      label: entity.displayName,
      type: entity.entityType,
      confidenceScore: entity.confidenceScore,
      x: 50 + Math.cos(index) * 32,
      y: 50 + Math.sin(index) * 28,
      isMock: true
    })),
    edges: network.relationships.map((relationship) => ({
      id: relationship.id,
      from: relationship.fromEntityId,
      to: relationship.toEntityId,
      label: relationship.relationshipType,
      strengthScore: relationship.strengthScore,
      confidenceScore: relationship.confidenceScore,
      isInferred: relationship.isInferred,
      status: relationship.status,
      isMock: true
    })),
    isMock: true
  };
}

