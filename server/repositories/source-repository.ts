import { mockClaims, mockPlayers } from "@/data/mock/portal-data";
import type { Source } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const sourceRepository = {
  async findMany(): Promise<Source[]> {
    return mockPlayers.map((player) => player.source);
  },

  async findByClaimId(claimId: string): Promise<Source[]> {
    const claim = mockClaims.find((item) => item.id === claimId);
    if (!claim) return [];
    return mockPlayers.map((player) => player.source).filter((source) => claim.sourceIds.includes(source.id));
  }
};
