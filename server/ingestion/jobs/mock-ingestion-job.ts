import type { ClaimCandidate, IngestionRunResult, NormalizedContent } from "@/server/ingestion/types";
import { adminReviewService } from "@/server/services/admin-review-service";
import { claimService } from "@/server/services/claim-service";
import { sourceService } from "@/server/services/source-service";
import { complianceChecker } from "@/server/ingestion/compliance/compliance-checker";
import { duplicateDetector } from "@/server/ingestion/deduplication/duplicate-detector";
import { ingestionLogger } from "@/server/ingestion/logs/ingestion-logger";
import { parserRegistry } from "@/server/ingestion/parsers/parser-registry";
import { ingestionQueue } from "@/server/ingestion/queue/ingestion-queue";
import { mockSourceItems } from "@/server/ingestion/sources/mock-source-items";
import { getRegisteredSource, sourceRegistry } from "@/server/ingestion/sources/source-registry";

const shouldRouteToReview = (candidate: ClaimCandidate, sourceType: string, duplicateUncertainty: boolean) =>
  candidate.confidenceScore < 60 ||
  candidate.claimType === "nil_report" ||
  sourceType === "message_board" ||
  sourceType === "social_media" ||
  duplicateUncertainty ||
  candidate.subjectGuess.toLowerCase().includes("unknown");

export const mockIngestionJob = {
  async run(): Promise<IngestionRunResult> {
    ingestionLogger.reset();
    ingestionQueue.reset();

    const startedAt = new Date().toISOString();
    const complianceDecisions = sourceRegistry.map((source) => complianceChecker.checkSource(source));
    const allowedSourceIds = new Set(complianceDecisions.filter((decision) => decision.status === "allowed").map((decision) => decision.sourceId));
    const rejected = complianceDecisions.filter((decision) => decision.status === "rejected");
    const normalizedContent: NormalizedContent[] = [];

    ingestionLogger.info("Mock ingestion started.", { sourceCount: sourceRegistry.length });

    for (const item of mockSourceItems) {
      const registrySource = getRegisteredSource(item.registrySourceId);
      if (!registrySource) {
        ingestionLogger.warn("Source item skipped because registry source was not found.", { itemId: item.id });
        continue;
      }

      if (!allowedSourceIds.has(registrySource.id)) {
        ingestionLogger.warn("Source item rejected by compliance.", { itemId: item.id, sourceId: registrySource.id });
        continue;
      }

      const parser = parserRegistry.getParser(registrySource.sourceType);
      normalizedContent.push(await parser.parse(item));
      ingestionLogger.info("Source item parsed.", { itemId: item.id, parser: parser.id });
    }

    const duplicateDetections = duplicateDetector.detectContentDuplicates(normalizedContent);
    const uniqueContent = normalizedContent.filter((content) => !duplicateDetections.find((item) => item.contentId === content.sourceItemId)?.isDuplicate);
    const candidates = uniqueContent.flatMap((content) => content.detectedClaimCandidates);

    ingestionQueue.enqueueClaimCandidates(candidates);
    await sourceService.createSourceRecordsFromIngestion(uniqueContent);
    await claimService.createClaimCandidates(candidates);

    const reviewCandidates = candidates.filter((candidate) => {
      const source = getRegisteredSource(candidate.sourceId);
      const duplicateUncertainty = duplicateDetections.some((item) => item.contentId === candidate.id && item.confidenceScore < 70);
      return shouldRouteToReview(candidate, source?.sourceType ?? "unknown", duplicateUncertainty);
    });

    await adminReviewService.routeClaimCandidatesToReview(reviewCandidates, "mock ingestion review routing");

    ingestionLogger.info("Mock ingestion finished.", {
      candidates: candidates.length,
      routedToReview: reviewCandidates.length,
      duplicates: duplicateDetections.filter((item) => item.isDuplicate).length
    });

    return {
      jobId: `mock-ingestion-${Date.now()}`,
      startedAt,
      finishedAt: new Date().toISOString(),
      sourcesChecked: sourceRegistry.length,
      sourcesRejected: rejected.length,
      contentParsed: normalizedContent.length,
      duplicatesDetected: duplicateDetections.filter((item) => item.isDuplicate).length,
      claimCandidatesCreated: candidates.length,
      routedToReview: reviewCandidates.length,
      sourceRecordsCreated: uniqueContent.length,
      complianceDecisions,
      claimCandidates: candidates,
      duplicateDetections,
      logs: ingestionLogger.list(),
      isMock: true
    };
  }
};
