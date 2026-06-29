import { mockPlayers } from "@/data/mock/portal-data";
import type { Player } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const playerRepository = {
  async findMany(): Promise<Player[]> {
    return mockPlayers;
  },

  async findById(id: string): Promise<Player | undefined> {
    return mockPlayers.find((player) => player.id === id);
  }
};
