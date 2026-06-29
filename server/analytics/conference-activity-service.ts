import { mockConferenceActivity } from "@/data/mock/command-center/command-center-data";
import type { ConferenceActivityItem } from "@/types/command-center";

export const conferenceActivityService = {
  async getConferenceActivity(): Promise<ConferenceActivityItem[]> {
    // TODO: Aggregate conference-level portal entries, commitments, and net talent movement from verified claims.
    return mockConferenceActivity;
  }
};
