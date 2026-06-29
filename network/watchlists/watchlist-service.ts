import { mockWatchlists } from "@/platform/network/network-mock-data";

export const networkWatchlistService = {
  getSharedWatchlists() {
    return mockWatchlists;
  },
  getWatchlist(watchlistId = "mock-watchlist-players") {
    return mockWatchlists.find((watchlist) => watchlist.id === watchlistId) ?? mockWatchlists[0];
  }
};
