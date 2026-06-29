import { mockGraphEntities } from "@/platform/knowledge-graph/core/mock-graph-data";

export const entityResolutionService = {
  resolveAlias(input: string) {
    const normalized = input.toLowerCase().trim();
    const match = mockGraphEntities.find((entity) => entity.displayName.toLowerCase() === normalized || entity.aliases.some((alias) => alias.toLowerCase() === normalized));
    return {
      query: input,
      matchedEntity: match,
      confidenceScore: match ? match.confidenceScore : 0,
      matchRules: ["mock exact display name", "mock alias lookup", "future fuzzy matching"],
      isMock: true
    };
  },

  findPotentialDuplicates(entityId: string) {
    const entity = mockGraphEntities.find((item) => item.id === entityId);
    return {
      entityId,
      duplicates: entity ? mockGraphEntities.filter((item) => item.id !== entityId && item.entityType === entity.entityType && item.aliases.some((alias) => entity.aliases.includes(alias))) : [],
      isMock: true
    };
  }
};

