import { NotFoundError } from "@/lib/errors/app-error";
import type { Claim, ClaimStatus, ClaimType, ConfidenceLevel, Source, SubjectType } from "@/types/portal";
import { claimRepository } from "@/server/repositories/claim-repository";
import type { ClaimCandidate } from "@/server/ingestion/types";

export type CreateClaimInput = {
  claimType: ClaimType;
  subjectType: SubjectType;
  subjectId: string;
  value: string;
  sourceIds: string[];
};

export const claimService = {
  async getClaims(): Promise<Claim[]> {
    return claimRepository.findMany();
  },

  async getClaimsForSubject(subjectId: string): Promise<Claim[]> {
    return claimRepository.findBySubject(subjectId);
  },

  async createClaim(_input: CreateClaimInput): Promise<Claim> {
    // TODO: Persist claim, attach sources, check duplicates, and route low-confidence claims to review.
    throw new Error("Claim creation is not implemented until database persistence exists.");
  },

  async createClaimCandidates(candidates: ClaimCandidate[]): Promise<{ created: number; isMock: true }> {
    // TODO: Persist candidates to a ClaimCandidate table or AdminReviewItem once schema is extended.
    return { created: candidates.length, isMock: true };
  },

  async updateClaimConfidence(id: string, confidenceLevel: ConfidenceLevel, confidenceScore: number): Promise<Claim> {
    const claim = await claimRepository.updateConfidence(id, confidenceLevel, confidenceScore);
    if (!claim) throw new NotFoundError("Claim not found", { id });
    return claim;
  },

  async assignReviewStatus(id: string, status: ClaimStatus): Promise<Claim> {
    const claim = await claimRepository.updateStatus(id, status);
    if (!claim) throw new NotFoundError("Claim not found", { id });
    return claim;
  },

  async flagConflicts(_claimId: string): Promise<Claim[]> {
    // TODO: Compare claim value/status against competing claims on the same subject and claimType.
    return [];
  },

  async attachSources(_claimId: string, _sources: Source[]): Promise<void> {
    // TODO: Persist source relationships and recalculate confidence.
  }
};
