import { mockGraphRelationships } from "@/platform/knowledge-graph/core/mock-graph-data";

export const graphInferenceService = {
  proposeInferredRelationships(entityId: string) {
    return {
      entityId,
      inferredRelationships: mockGraphRelationships.filter((relationship) => relationship.isInferred && (relationship.fromEntityId === entityId || relationship.toEntityId === entityId)),
      rule: "Mock inference only. Inferred graph edges must be reviewed by the Intelligence Core before surfacing as intelligence.",
      isMock: true
    };
  }
};

