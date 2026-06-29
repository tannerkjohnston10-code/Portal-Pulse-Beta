import { mockClaims } from "@/data/mock/portal-data";
import type { Claim, ClaimStatus, ConfidenceLevel } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const claimRepository = {
  async findMany(): Promise<Claim[]> {
    return mockClaims;
  },

  async findBySubject(subjectId: string): Promise<Claim[]> {
    return mockClaims.filter((claim) => claim.subjectId === subjectId);
  },

  async updateConfidence(id: string, confidenceLevel: ConfidenceLevel, confidenceScore: number): Promise<Claim | undefined> {
    const claim = mockClaims.find((item) => item.id === id);
    return claim ? { ...claim, confidenceLevel, confidenceScore } : undefined;
  },

  async updateStatus(id: string, status: ClaimStatus): Promise<Claim | undefined> {
    const claim = mockClaims.find((item) => item.id === id);
    return claim ? { ...claim, status } : undefined;
  }
};
