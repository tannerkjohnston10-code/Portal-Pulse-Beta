import type { NewsUpdate } from "@/types/portal";
import { newsRepository } from "@/server/repositories/news-repository";

export const dashboardService = {
  async getBreakingPortalFeed(): Promise<NewsUpdate[]> {
    // TODO: Build from latest approved claims, source freshness, and watched movement types.
    return newsRepository.findBreakingUpdates();
  }
};
