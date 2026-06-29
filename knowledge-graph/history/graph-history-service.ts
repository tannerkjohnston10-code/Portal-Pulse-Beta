import type { GraphRelationship } from "@/platform/knowledge-graph/core/graph-types";

export const graphHistoryService = {
  snapshotRelationship(relationship: GraphRelationship) {
    return {
      id: `mock-graph-history-${relationship.id}`,
      relationshipId: relationship.id,
      capturedAt: "2026-06-28T17:00:00.000Z",
      status: relationship.status,
      confidenceScore: relationship.confidenceScore,
      isMock: true
    };
  }
};

