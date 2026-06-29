import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";
import { SportCapabilityRegistry } from "@/platform/sports";

export const scholarshipBalanceService = {
  getScholarshipIQ(teamId = "mock-team-state", sportId?: string) {
    const capabilities = SportCapabilityRegistry.getProfile(sportId);
    return {
      ...mockAtlasWorkspace.scholarshipIQ,
      teamId,
      sportId: capabilities.sportId,
      scholarshipModel: capabilities.scholarshipModel,
      scholarshipLimitLabel: capabilities.scholarshipLimitLabel,
      totalScholarshipsPlaceholder: capabilities.scholarshipLimit ?? 0,
      disclaimer: "Mock Scholarship IQ uses sport-engine projected placeholders only.",
      isMock: true
    };
  }
};
