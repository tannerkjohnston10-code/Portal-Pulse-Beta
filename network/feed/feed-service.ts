import { mockFeedItems, mockNetworkDashboard } from "@/platform/network/network-mock-data";

export const networkFeedService = {
  getIntelligenceFeed() {
    return mockFeedItems;
  },
  getTodayIntelligence() {
    return mockNetworkDashboard.todayIntelligence;
  },
  getEvidenceFeed() {
    return mockNetworkDashboard.evidenceFeed;
  },
  getConfidenceFeed() {
    return mockNetworkDashboard.confidenceFeed;
  }
};
