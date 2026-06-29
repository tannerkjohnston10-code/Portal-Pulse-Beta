import { NotFoundError } from "@/lib/errors/app-error";
import type { Player, TimelineEvent } from "@/types/portal";
import type { PlayerFilters } from "@/lib/validators/query-validators";
import { playerRepository } from "@/server/repositories/player-repository";
import { timelineRepository } from "@/server/repositories/timeline-repository";

export const playerService = {
  async getPlayers(filters: PlayerFilters = {}): Promise<Player[]> {
    const players = await playerRepository.findMany();
    return players.filter((player) => {
      if (filters.sport && player.sport !== filters.sport) return false;
      if (filters.status && player.currentStatus !== filters.status) return false;
      if (filters.confidence && player.confidence !== filters.confidence) return false;
      if (filters.query && !`${player.name} ${player.previousSchool} ${player.position}`.toLowerCase().includes(filters.query.toLowerCase())) return false;
      return true;
    });
  },

  async getPlayerDetails(id: string): Promise<Player> {
    const player = await playerRepository.findById(id);
    if (!player) throw new NotFoundError("Player not found", { id });
    return player;
  },

  async buildPlayerTimeline(playerId: string): Promise<TimelineEvent[]> {
    // TODO: Build from claim history, source timestamps, visits, predictions, NIL reports, and roster events.
    return timelineRepository.findBySubjectId(playerId);
  },

  async mergeDuplicatePlayerRecords(_primaryPlayerId: string, _duplicatePlayerId: string): Promise<void> {
    // TODO: Implement audited duplicate merge workflow after auth/admin review exists.
  }
};
