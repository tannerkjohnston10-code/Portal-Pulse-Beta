import type { Visit } from "@/types/portal";
import type { VisitFilters } from "@/lib/validators/query-validators";
import { visitRepository } from "@/server/repositories/visit-repository";

export const visitService = {
  async getVisits(_filters: VisitFilters = {}): Promise<Visit[]> {
    // TODO: Add sport/team/date filtering once visits are normalized to players and teams in the database.
    return visitRepository.findMany();
  },

  async getVisitsForPlayer(playerId: string): Promise<Visit[]> {
    return visitRepository.findByPlayerId(playerId);
  }
};
