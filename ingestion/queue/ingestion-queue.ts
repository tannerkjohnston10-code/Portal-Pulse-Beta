import type { ClaimCandidate } from "@/server/ingestion/types";

const claimCandidateQueue: ClaimCandidate[] = [];

export const ingestionQueue = {
  enqueueClaimCandidates(candidates: ClaimCandidate[]) {
    claimCandidateQueue.push(...candidates);
  },

  getClaimCandidates(): ClaimCandidate[] {
    return claimCandidateQueue;
  },

  reset() {
    claimCandidateQueue.length = 0;
  }
};
