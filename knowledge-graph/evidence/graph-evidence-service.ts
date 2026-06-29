import { mockGraphEvidence } from "@/platform/knowledge-graph/core/mock-graph-data";

export const graphEvidenceService = {
  getEvidenceForRelationship(relationshipId: string) {
    return mockGraphEvidence.filter((evidence) => evidence.relationshipId === relationshipId);
  },

  summarizeEvidence(relationshipIds: string[]) {
    const evidence = mockGraphEvidence.filter((item) => relationshipIds.includes(item.relationshipId));
    return {
      evidence,
      evidenceCount: evidence.length,
      sourceCount: new Set(evidence.flatMap((item) => item.sourceIds)).size,
      contradictionCount: evidence.reduce((sum, item) => sum + item.contradictionCount, 0),
      isMock: true
    };
  }
};

