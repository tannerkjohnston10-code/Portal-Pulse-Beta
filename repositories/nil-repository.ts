import { mockNilReports } from "@/data/mock/portal-data";
import type { NILReport } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const nilRepository = {
  async findMany(): Promise<NILReport[]> {
    return mockNilReports;
  },

  async findByPlayerId(playerId: string): Promise<NILReport[]> {
    return mockNilReports.filter((report) => report.playerId === playerId);
  }
};
