import type { RosterNeed, Team, TeamRanking } from "@/types/portal";
import type { TeamFilters } from "@/lib/validators/query-validators";
import { teamRepository } from "@/server/repositories/team-repository";

export const teamService = {
  async getTeams(filters: TeamFilters = {}): Promise<Team[]> {
    const teams = await teamRepository.findMany();
    return teams.filter((team) => {
      if (filters.sport && team.sport !== filters.sport) return false;
      if (filters.conference && team.conference !== filters.conference) return false;
      return true;
    });
  },

  async getTeamRankings(filters: TeamFilters = {}): Promise<TeamRanking[]> {
    const rankings = await teamRepository.findRankings();
    return rankings.filter((ranking) => {
      if (filters.sport && ranking.sport !== filters.sport) return false;
      if (filters.conference && ranking.conference !== filters.conference) return false;
      return true;
    });
  },

  async calculatePortalGainsLosses(_teamId: string): Promise<{ gains: number; losses: number }> {
    // TODO: Calculate from PlayerMovement and TeamInterest records.
    return { gains: 0, losses: 0 };
  },

  async calculateRosterNeeds(_teamId: string): Promise<RosterNeed[]> {
    // TODO: Combine roster, departures, depth chart, and recruiting data.
    return [];
  }
};
