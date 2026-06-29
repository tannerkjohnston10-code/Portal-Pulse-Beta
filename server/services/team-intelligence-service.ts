import { mockTeamIntelligenceProfiles } from "@/data/mock/team-intelligence/team-intelligence-data";
import type { TeamIntelligenceProfile, TeamNeedItem, TeamTimelineEvent } from "@/types/team-intelligence";

export const teamIntelligenceService = {
  async getTeamIntelligenceProfile(teamId: string): Promise<TeamIntelligenceProfile | undefined> {
    // TODO: Replace mock profile composition with team, roster, claim, source, prediction, and analytics services.
    return mockTeamIntelligenceProfiles.find((team) => team.id === teamId);
  },

  async getDefaultTeamIntelligenceProfile(): Promise<TeamIntelligenceProfile> {
    return mockTeamIntelligenceProfiles[0];
  },

  async getTeamNeeds(teamId: string): Promise<TeamNeedItem[]> {
    const profile = await this.getTeamIntelligenceProfile(teamId);
    return profile?.needs ?? [];
  },

  async getTeamTimeline(teamId: string): Promise<TeamTimelineEvent[]> {
    const profile = await this.getTeamIntelligenceProfile(teamId);
    return profile?.timeline ?? [];
  },

  async getConferenceComparison(teamId: string) {
    const profile = await this.getTeamIntelligenceProfile(teamId);
    return profile?.conferenceComparison ?? [];
  }
};
