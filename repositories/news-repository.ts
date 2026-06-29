import { mockNewsUpdates } from "@/data/mock/portal-data";
import type { NewsUpdate } from "@/types/portal";

// Temporary mock-backed repository. Replace internals with source/claim timeline queries later.
export const newsRepository = {
  async findBreakingUpdates(): Promise<NewsUpdate[]> {
    return mockNewsUpdates;
  }
};
