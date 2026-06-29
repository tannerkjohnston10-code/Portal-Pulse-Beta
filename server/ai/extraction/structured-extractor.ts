import type { ClaimCandidate } from "@/server/ingestion/types";
import type { ExtractionResult } from "@/server/ai/types";

export type ExtractionInput = {
  sourceId: string;
  sourceUrl: string;
  text: string;
  title?: string;
};

const now = () => new Date().toISOString();

export const structuredExtractor = {
  async extract(input: ExtractionInput): Promise<ExtractionResult> {
    // Mock-safe placeholder: future LLM extraction must output structured objects, never prose-only facts.
    const candidate: ClaimCandidate = {
      id: `mock-candidate-${input.sourceId}`,
      claimType: "portal_entry",
      subjectGuess: "Mock Player",
      extractedValue: "Mock structured extraction placeholder. Not a real claim.",
      sourceId: input.sourceId,
      sourceUrl: input.sourceUrl,
      confidenceScore: 35,
      status: "pending_review",
      extractionMethod: "mock",
      createdAt: now(),
      isMock: true
    };

    return {
      id: `mock-extraction-${input.sourceId}`,
      sourceId: input.sourceId,
      sourceUrl: input.sourceUrl,
      extractedAt: now(),
      entities: [
        {
          id: `mock-entity-player-${input.sourceId}`,
          type: "player",
          text: "Mock Player",
          normalizedText: "mock player",
          confidenceScore: 35,
          sourceId: input.sourceId,
          isMock: true
        }
      ],
      relationships: [],
      claimCandidates: [candidate],
      dates: [],
      sports: [],
      conferences: [],
      organizations: [],
      extractionMethod: "mock",
      isMock: true
    };
  }
};
