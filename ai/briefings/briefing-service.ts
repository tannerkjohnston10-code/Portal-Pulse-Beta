import { mockAIBriefing } from "@/data/mock/command-center/command-center-data";
import type { AIBriefingItem } from "@/types/command-center";

export const briefingService = {
  async getAIBriefing(): Promise<AIBriefingItem[]> {
    // TODO: Generate source-backed briefing items from verified claims, conflicts, and admin-reviewed signals.
    return mockAIBriefing;
  },

  async getPersonalizedMorningBriefing(_userId?: string): Promise<AIBriefingItem[]> {
    // Future implementation should personalize from watchlists, alerts, and trusted source changes.
    return mockAIBriefing;
  }
};
