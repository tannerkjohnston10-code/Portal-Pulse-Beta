import { playerService } from "@/server/services/player-service";
import { teamService } from "@/server/services/team-service";
import { nilService } from "@/server/services/nil-service";
import { predictionService } from "@/server/services/prediction-service";
import type { PlatformSearchFilters } from "@/platform/types/platform-types";
import { SportCapabilityRegistry } from "@/platform/sports";

export const searchService = {
  async searchAll(query: string, filters: PlatformSearchFilters = {}) {
    const normalized = query.toLowerCase();
    const [players, teams, nilReports, predictions] = await Promise.all([
      playerService.getPlayers(),
      teamService.getTeams(),
      nilService.getNILReports(),
      predictionService.getPredictions()
    ]);

    const sportName = filters.sportId && filters.sportId !== "all" ? SportCapabilityRegistry.getProfile(filters.sportId).displayName : undefined;
    const matchesSport = (sport?: string) => !sportName || sport === sportName;
    const matchesConference = (conference?: string) => !filters.conference || conference === filters.conference;
    const matchesPosition = (position?: string) => !filters.position || position === filters.position;

    return {
      players: players.filter((player) => `${player.name} ${player.previousSchool} ${player.position}`.toLowerCase().includes(normalized) && matchesSport(player.sport) && matchesConference(player.conference) && matchesPosition(player.position)),
      teams: teams.filter((team) => `${team.name} ${team.conference}`.toLowerCase().includes(normalized) && matchesSport(team.sport) && matchesConference(team.conference)),
      nilReports: nilReports.filter((report) => `${report.playerName} ${report.school}`.toLowerCase().includes(normalized) && matchesSport(report.sport) && matchesPosition(report.position)),
      predictions: predictions.filter((prediction) => prediction.playerName.toLowerCase().includes(normalized)),
      filtersApplied: filters
    };
  }
};
