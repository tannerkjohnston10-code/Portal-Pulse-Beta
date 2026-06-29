import type { IntelligenceCardModel, IntelligenceCoreOutput } from "@/platform/intelligence/interfaces/intelligence-types";

export function buildIntelligenceCards(output: Omit<IntelligenceCoreOutput, "cards">): IntelligenceCardModel[] {
  return [
    {
      id: `mock-card-${output.subjectId}`,
      title: "Mock Intelligence Card",
      layer: "intelligence",
      priorityScore: output.importanceScore,
      confidenceScore: output.reasoning.confidenceScore,
      evidenceCount: output.evidence.length,
      summary: output.explanation.whatChanged,
      explanation: output.explanation,
      recommendations: output.recommendations,
      generatedAt: output.generatedAt,
      isMock: true
    }
  ];
}
