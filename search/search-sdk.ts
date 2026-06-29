import { searchService } from "@/server/search/search-service";
import type { PlatformSearchFilters, PlatformSearchResult } from "@/platform/types/platform-types";

export const SearchSDK = {
  version: "v1",

  async searchAll(query: string, filters: PlatformSearchFilters = {}): Promise<PlatformSearchResult> {
    const results = await searchService.searchAll(query, filters);
    return { ...results, isMock: true };
  }
};
