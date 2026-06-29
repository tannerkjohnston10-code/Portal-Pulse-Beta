import type { RealtimeClaimCandidate } from "@/platform/realtime/core/realtime-types";

export type RealtimeEnrichmentResult = {
  candidateId: string;
  evidenceCount: number;
  sourceCount: number;
  relatedEntityLabels: string[];
  isMock: true;
};

export const RealtimeEnrichmentService = {
  enrichCandidate(candidate: RealtimeClaimCandidate): RealtimeEnrichmentResult {
    return {
      candidateId: candidate.id,
      evidenceCount: candidate.evidenceIds.length,
      sourceCount: candidate.sourceIds.length,
      relatedEntityLabels: [candidate.affectedAthlete, candidate.affectedProgram, candidate.affectedConference].filter(Boolean) as string[],
      isMock: true
    };
  }
};
