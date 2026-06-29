import type { NILReport } from "@/types/portal";
import type { NILFilters } from "@/lib/validators/query-validators";
import { nilRepository } from "@/server/repositories/nil-repository";

export const nilService = {
  async getNILReports(filters: NILFilters = {}): Promise<NILReport[]> {
    const reports = await nilRepository.findMany();
    return reports.filter((report) => {
      if (filters.sport && report.sport !== filters.sport) return false;
      if (filters.status && report.status !== filters.status) return false;
      return true;
    });
  },

  async getNILReportsForPlayer(playerId: string): Promise<NILReport[]> {
    return nilRepository.findByPlayerId(playerId);
  },

  async buildSourceBackedSummary(report: NILReport): Promise<string> {
    // TODO: Summarize only sourced NIL context and preserve status/confidence labels.
    return `${report.status} NIL placeholder for ${report.playerName}`;
  }
};
