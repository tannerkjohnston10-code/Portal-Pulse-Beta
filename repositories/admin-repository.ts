import { mockAdminClaims } from "@/data/mock/portal-data";
import type { AdminClaim } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with Prisma queries in the database phase.
export const adminRepository = {
  async findClaims(): Promise<AdminClaim[]> {
    return mockAdminClaims;
  }
};
