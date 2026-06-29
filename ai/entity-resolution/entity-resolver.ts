import type { EntityResolutionCandidate, ExtractedEntity, ExtractedEntityType } from "@/server/ai/types";

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export const entityResolver = {
  resolveEntity(entity: ExtractedEntity, canonicalOptions: Array<{ id: string; name: string; type: ExtractedEntityType }>): EntityResolutionCandidate {
    const normalized = normalize(entity.text);
    const exact = canonicalOptions.find((option) => option.type === entity.type && normalize(option.name) === normalized);

    if (exact) {
      return {
        entityType: entity.type,
        inputText: entity.text,
        canonicalId: exact.id,
        canonicalName: exact.name,
        matchScore: 98,
        reasons: ["Exact normalized name match."],
        needsReview: false,
        isMock: true
      };
    }

    return {
      entityType: entity.type,
      inputText: entity.text,
      matchScore: 35,
      reasons: ["No exact match found. Future fuzzy matching should compare aliases, schools, positions, and source context."],
      needsReview: true,
      isMock: true
    };
  }
};
