import type { ClaimCandidate, MockSourceItem, NormalizedContent } from "@/server/ingestion/types";
import type { SourceParser } from "./parser-types";
import { textNormalizer } from "@/server/ingestion/normalization/text-normalizer";

const buildMockCandidate = (item: MockSourceItem, confidenceScore = 55): ClaimCandidate => ({
  id: `candidate-${item.id}`,
  claimType: "portal_entry",
  subjectGuess: "Marcus Vale",
  extractedValue: "Mock source text suggests a fictional portal entry workflow item.",
  sourceId: item.registrySourceId,
  sourceUrl: item.url,
  confidenceScore,
  status: "pending_review",
  extractionMethod: "parser",
  createdAt: new Date().toISOString(),
  isMock: true
});

export const genericTextParser: SourceParser = {
  id: "generic-text-parser",

  canParse() {
    return true;
  },

  async parse(item: MockSourceItem): Promise<NormalizedContent> {
    const normalized = textNormalizer.normalizeText(item.body);
    const fingerprint = textNormalizer.fingerprint([item.title, item.url]);

    return {
      sourceItemId: item.id,
      title: item.title,
      author: item.author,
      publisher: item.publisher,
      publishedAt: item.publishedAt,
      retrievedAt: item.retrievedAt,
      canonicalUrl: item.url,
      summary: textNormalizer.summarize(normalized),
      rawTextPlaceholder: "[mock raw text placeholder omitted]",
      detectedPlayerNames: ["Marcus Vale"],
      detectedTeams: ["Metro University"],
      detectedClaimCandidates: [buildMockCandidate(item)],
      fingerprint,
      contentHash: fingerprint,
      isMock: true
    };
  }
};
