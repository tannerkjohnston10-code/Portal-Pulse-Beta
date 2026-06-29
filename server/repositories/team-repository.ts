import { mockRankings, mockTeams } from "@/data/mock/portal-data";
import type { Team, TeamRanking } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const teamRepository = {
  async findMany(): Promise<Team[]> {
    return mockTeams;
  },

  async findRankings(): Promise<TeamRanking[]> {
    return mockRankings;
  }
};
