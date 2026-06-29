import type { IntelligenceRecommendation, ReasoningObject } from "@/platform/intelligence/interfaces/intelligence-types";

export const recommendationEngine = {
  recommendNextActions(subjectId: string, reasoning: ReasoningObject): IntelligenceRecommendation[] {
    return [
      {
        id: `mock-recommend-watch-${subjectId}`,
        title: "Watch related entities",
        recommendationType: "watch_player",
        priorityScore: reasoning.confidenceScore,
        reason: "Mock recommendation based on shared reasoning confidence and affected entities.",
        relatedEntities: reasoning.affectedEntities.slice(0, 3),
        isMock: true
      },
      {
        id: `mock-recommend-compare-${subjectId}`,
        title: "Compare related teams",
        recommendationType: "compare_entities",
        priorityScore: Math.max(50, reasoning.confidenceScore - 8),
        reason: "Mock recommendation to compare entities affected by the same signal group.",
        relatedEntities: reasoning.affectedEntities,
        isMock: true
      }
    ];
  }
};
