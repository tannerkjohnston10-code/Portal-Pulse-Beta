import { mockGraphRelationships } from "@/platform/knowledge-graph/core/mock-graph-data";
import { graphScoringService } from "@/platform/knowledge-graph/scoring/graph-scoring-service";
import type { GraphRelationshipType } from "@/platform/knowledge-graph/core/graph-types";

export const relationshipService = {
  getRelationshipsForEntity(entityId: string) {
    return mockGraphRelationships.filter((relationship) => relationship.fromEntityId === entityId || relationship.toEntityId === entityId);
  },

  getRelationshipsByType(type: GraphRelationshipType) {
    return mockGraphRelationships.filter((relationship) => relationship.relationshipType === type);
  },

  getStrongestRelationships(entityId: string) {
    return this.getRelationshipsForEntity(entityId)
      .map((relationship) => ({ relationship, score: graphScoringService.scoreRelationship(relationship) }))
      .sort((a, b) => b.score.score - a.score.score);
  },

  getWeakOrConflictingRelationships(entityId: string) {
    return this.getRelationshipsForEntity(entityId)
      .filter((relationship) => relationship.status === "disputed" || relationship.status === "needs_review" || relationship.confidenceScore < 55)
      .map((relationship) => ({ relationship, score: graphScoringService.scoreRelationship(relationship) }));
  }
};

