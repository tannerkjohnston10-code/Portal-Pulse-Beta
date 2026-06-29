import { conferenceRankingService } from "@/server/rankings/conference-ranking-service";
import { momentumRankingService } from "@/server/rankings/momentum-ranking-service";
import { nilRankingService } from "@/server/rankings/nil-ranking-service";
import { playerRankingService } from "@/server/rankings/player-ranking-service";
import { positionRankingService } from "@/server/rankings/position-ranking-service";
import { teamRankingService } from "@/server/rankings/team-ranking-service";
import type { RankingType } from "@/types/rankings";

export const rankingService = {
  async getRankingSummary(type: RankingType) {
    switch (type) {
      case "players":
        return playerRankingService.getPlayerTransferRankings();
      case "teams":
        return teamRankingService.getTeamTransferRankings();
      case "conferences":
        return conferenceRankingService.getConferenceTransferRankings();
      case "positions":
        return positionRankingService.getPositionGroupRankings();
      case "nil":
        return nilRankingService.getNILMarketRankings();
      case "momentum":
        return momentumRankingService.getMomentumRankings();
      case "roster_strength":
        return teamRankingService.getTeamTransferRankings();
      case "portal_class":
        return teamRankingService.getTeamTransferRankings();
    }
  },

  async getAllRankingSummaries() {
    return Promise.all([
      this.getRankingSummary("players"),
      this.getRankingSummary("teams"),
      this.getRankingSummary("conferences"),
      this.getRankingSummary("positions"),
      this.getRankingSummary("nil"),
      this.getRankingSummary("momentum")
    ]);
  },

  async getCommandCenterRankingMovers() {
    const [players, teams, conferences, nil, momentum] = await Promise.all([
      this.getRankingSummary("players"),
      this.getRankingSummary("teams"),
      this.getRankingSummary("conferences"),
      this.getRankingSummary("nil"),
      this.getRankingSummary("momentum")
    ]);

    return {
      topRisingPlayers: players.items.filter((item) => item.rankChange > 0).slice(0, 3),
      topRisingTeams: teams.items.filter((item) => item.rankChange > 0).slice(0, 3),
      biggestRankChanges: momentum.items.slice(0, 3),
      conferenceMovers: conferences.items.filter((item) => item.rankChange !== 0).slice(0, 3),
      nilMarketMovers: nil.items.filter((item) => item.rankChange !== 0).slice(0, 3),
      isMock: true
    };
  }
};
