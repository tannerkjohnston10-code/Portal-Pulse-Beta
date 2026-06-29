import type { ClaimCandidate, DuplicateDetectionResult, NormalizedContent } from "@/server/ingestion/types";

export const duplicateDetector = {
  detectContentDuplicates(content: NormalizedContent[], existing: NormalizedContent[] = []): DuplicateDetectionResult[] {
    const seen = new Map<string, string>();
    for (const item of existing) {
      seen.set(item.canonicalUrl, item.sourceItemId);
      seen.set(item.contentHash, item.sourceItemId);
    }

    return content.map((item) => {
      const matchedContentId = seen.get(item.canonicalUrl) ?? seen.get(item.contentHash);
      const result: DuplicateDetectionResult = {
        contentId: item.sourceItemId,
        isDuplicate: Boolean(matchedContentId),
        reasons: matchedContentId ? ["canonical URL or content hash already seen"] : [],
        matchedContentId,
        confidenceScore: matchedContentId ? 95 : 5,
        isMock: true
      };

      seen.set(item.canonicalUrl, item.sourceItemId);
      seen.set(item.contentHash, item.sourceItemId);
      return result;
    });
  },

  detectClaimDuplicate(candidate: ClaimCandidate, candidates: ClaimCandidate[]): boolean {
    return candidates.some(
      (item) =>
        item.id !== candidate.id &&
        item.claimType === candidate.claimType &&
        item.subjectGuess === candidate.subjectGuess &&
        item.extractedValue === candidate.extractedValue
    );
  }
};
