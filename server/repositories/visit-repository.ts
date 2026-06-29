import { mockVisits } from "@/data/mock/portal-data";
import type { Visit } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const visitRepository = {
  async findMany(): Promise<Visit[]> {
    return mockVisits;
  },

  async findByPlayerId(playerId: string): Promise<Visit[]> {
    return mockVisits.filter((visit) => visit.playerId === playerId);
  }
};
