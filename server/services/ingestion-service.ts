import type { ClaimCandidate, IngestionRunResult } from "@/server/ingestion/types";
import { ingestionJob } from "@/server/ingestion/jobs/ingestion-job";
import { ingestionQueue } from "@/server/ingestion/queue/ingestion-queue";
import { sourceRegistry } from "@/server/ingestion/sources/source-registry";

let lastRun: IngestionRunResult | undefined;

export const ingestionService = {
  async runMockIngestion(): Promise<IngestionRunResult> {
    lastRun = await ingestionJob.runMock();
    return lastRun;
  },

  async getRecentIngestionSummary() {
    return {
      recentJobs: lastRun ? [lastRun] : [],
      sourcesChecked: lastRun?.sourcesChecked ?? sourceRegistry.length,
      claimCandidatesCreated: lastRun?.claimCandidatesCreated ?? 0,
      lowConfidenceItems: lastRun?.claimCandidates.filter((candidate) => candidate.confidenceScore < 60).length ?? 0,
      rejectedSources: lastRun?.sourcesRejected ?? 0,
      duplicateDetections: lastRun?.duplicatesDetected ?? 0,
      isMock: true
    };
  },

  async getIngestionQueue(): Promise<ClaimCandidate[]> {
    return ingestionQueue.getClaimCandidates();
  },

  async getClaimCandidates(): Promise<ClaimCandidate[]> {
    return ingestionQueue.getClaimCandidates();
  }
};
