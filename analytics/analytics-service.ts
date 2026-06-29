import { playerService } from "@/server/services/player-service";
import { teamService } from "@/server/services/team-service";

export const analyticsService = {
  async getDashboardSnapshot() {
    const [players, rankings] = await Promise.all([playerService.getPlayers(), teamService.getTeamRankings()]);

    return {
      trackedPlayers: players.length,
      activePortalEntries: players.filter((player) => player.currentStatus === "entered" || player.currentStatus === "available").length,
      recentCommitments: players.filter((player) => player.currentStatus === "committed").length,
      teamsMonitored: rankings.length
    };
  },

  async getTrendingPlayers() {
    // TODO: Use velocity, source volume, confidence changes, visits, and prediction movement.
    return playerService.getPlayers();
  },

  async getPortalVelocity() {
    // TODO: Calculate movement rate by sport, conference, position, and window.
    return { value: 0, trend: "unknown" };
  }
};
