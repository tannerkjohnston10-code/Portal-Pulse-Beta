import { mockCommunities, mockNetworkProfiles, mockNetworkReports, mockWatchlists } from "@/platform/network/network-mock-data";

export const networkSearchService = {
  searchNetwork(query: string) {
    const normalized = query.toLowerCase();
    return {
      users: mockNetworkProfiles.filter((profile) => `${profile.displayName} ${profile.expertiseTags.join(" ")}`.toLowerCase().includes(normalized)),
      reports: mockNetworkReports.filter((report) => `${report.title} ${report.tags.join(" ")}`.toLowerCase().includes(normalized)),
      communities: mockCommunities.filter((community) => `${community.name} ${community.trendingTopics.join(" ")}`.toLowerCase().includes(normalized)),
      watchlists: mockWatchlists.filter((watchlist) => `${watchlist.title} ${watchlist.items.join(" ")}`.toLowerCase().includes(normalized)),
      semanticSearchPlaceholder: true,
      isMock: true as const
    };
  }
};
