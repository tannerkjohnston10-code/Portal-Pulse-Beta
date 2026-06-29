import type { AdminClaim } from "@/types/portal";
import type { ClaimCandidate } from "@/server/ingestion/types";
import { validateAdminClaimReviewAction, type AdminClaimReviewAction } from "@/lib/validators/query-validators";
import { adminRepository } from "@/server/repositories/admin-repository";

export const adminReviewService = {
  async getReviewQueue(): Promise<AdminClaim[]> {
    return adminRepository.findClaims();
  },

  async getLowConfidenceClaims(): Promise<AdminClaim[]> {
    return (await adminRepository.findClaims()).filter((claim) => claim.category === "low_confidence");
  },

  async getConflictingClaims(): Promise<AdminClaim[]> {
    return (await adminRepository.findClaims()).filter((claim) => claim.category === "conflicting_report");
  },

  async detectDuplicates(): Promise<AdminClaim[]> {
    // TODO: Use normalized player identity matching and source overlap scoring.
    return (await adminRepository.findClaims()).filter((claim) => claim.category === "duplicate_player");
  },

  async reviewClaim(action: AdminClaimReviewAction): Promise<AdminClaimReviewAction> {
    // TODO: Persist audit log, reviewer identity, status changes, and notes after auth exists.
    return validateAdminClaimReviewAction(action);
  },

  async routeClaimCandidatesToReview(candidates: ClaimCandidate[], reason: string): Promise<{ routed: number; reason: string; isMock: true }> {
    // TODO: Persist ingestion candidate review items and attach audit metadata.
    return { routed: candidates.length, reason, isMock: true };
  }
};
