import { mockTeamMomentum } from "@/data/mock/command-center/command-center-data";
import type { TeamMomentumItem } from "@/types/command-center";

export const portalMomentumService = {
  async getTeamMomentum(): Promise<TeamMomentumItem[]> {
    // TODO: Calculate team momentum from commits, departures, roster needs, and source-backed impact claims.
    return mockTeamMomentum;
  }
};
