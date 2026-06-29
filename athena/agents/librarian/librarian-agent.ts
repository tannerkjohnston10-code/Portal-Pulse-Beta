import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { knowledgeGraphService } from "@/platform/knowledge-graph/core/knowledge-graph-service";
import type { LibrarianRelationshipFinding } from "@/platform/knowledge-graph/core/graph-types";

export const librarianGraphAgent = {
  proposeRelationships(): LibrarianRelationshipFinding {
    const strong = knowledgeGraphService.queries.findStrongestRelationships("graph-player-alpha");
    const weak = knowledgeGraphService.queries.findWeakOrConflictingRelationships("graph-player-alpha");
    const coreOutput = IntelligenceCore.generateInsight("mock-librarian-relationship-finding");

    return {
      id: "mock-librarian-finding-1",
      title: "Mock player-school-coach network requires review",
      summary: "Librarian found a mock player network with strong school/position links and weaker inferred coach/NIL connections that require Core review.",
      proposedRelationshipIds: strong.slice(0, 3).map((item) => item.relationship.id),
      duplicateEntityIds: knowledgeGraphService.resolution.findPotentialDuplicates("graph-player-alpha").duplicates.map((entity) => entity.id),
      weakRelationshipIds: weak.map((item) => item.relationship.id),
      importantNetworkEntityIds: ["graph-player-alpha", "graph-team-state", "graph-coach-river", "graph-school-state"],
      explanation: `Submitted to Intelligence Core with ${coreOutput.evidence.length} mock evidence groups. Librarian cannot publish graph conclusions directly.`,
      submittedToCore: true,
      isMock: true
    };
  },

  explainConnection(fromEntityId: string, toEntityId: string) {
    const path = knowledgeGraphService.queries.findRelationshipPath(fromEntityId, toEntityId);
    return {
      fromEntityId,
      toEntityId,
      path,
      explanation: "Mock connection explanation. Future versions will cite relationship evidence, source reliability, and contradiction status.",
      submittedToCore: true,
      isMock: true
    };
  }
};

