import type { AIInsight } from "@/types/insights";

export function serializeInsight(insight: AIInsight) {
  return {
    id: insight.id,
    title: insight.title,
    summary: insight.summary,
    insightType: insight.insightType,
    category: insight.category,
    subjectType: insight.subjectType,
    subjectId: insight.subjectId,
    importanceScore: insight.importanceScore,
    confidenceLevel: insight.confidenceLevel,
    confidenceScore: insight.confidenceScore,
    evidenceCount: insight.evidenceCount,
    sourceCount: insight.sourceCount,
    relatedPlayers: insight.relatedPlayers,
    relatedTeams: insight.relatedTeams,
    generatedAt: insight.generatedAt,
    expiresAt: insight.expiresAt,
    isMock: insight.isMock
  };
}
