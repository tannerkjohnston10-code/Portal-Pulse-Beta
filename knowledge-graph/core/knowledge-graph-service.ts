import { mockGraphEntities, mockGraphRelationships } from "@/platform/knowledge-graph/core/mock-graph-data";
import { entityResolutionService } from "@/platform/knowledge-graph/entities/entity-resolution-service";
import { graphEvidenceService } from "@/platform/knowledge-graph/evidence/graph-evidence-service";
import { graphInferenceService } from "@/platform/knowledge-graph/inference/graph-inference-service";
import { graphQueryService } from "@/platform/knowledge-graph/queries/graph-query-service";
import { relationshipService } from "@/platform/knowledge-graph/relationships/relationship-service";
import { graphScoringService } from "@/platform/knowledge-graph/scoring/graph-scoring-service";

export const knowledgeGraphService = {
  getEntities: () => mockGraphEntities,
  getRelationships: () => mockGraphRelationships,
  getOverview() {
    return {
      entityCount: mockGraphEntities.length,
      relationshipCount: mockGraphRelationships.length,
      inferredCount: mockGraphRelationships.filter((relationship) => relationship.isInferred).length,
      conflictingCount: mockGraphRelationships.filter((relationship) => relationship.status === "disputed").length,
      sourceCount: new Set(mockGraphRelationships.flatMap((relationship) => relationship.sourceIds)).size,
      evidenceCount: mockGraphRelationships.reduce((sum, relationship) => sum + relationship.evidenceIds.length, 0),
      isMock: true
    };
  },
  queries: graphQueryService,
  relationships: relationshipService,
  evidence: graphEvidenceService,
  scoring: graphScoringService,
  inference: graphInferenceService,
  resolution: entityResolutionService
};

