import { mockKnowledgeExchange, mockNetworkDashboard } from "@/platform/network/network-mock-data";
import { networkCommunityService } from "@/platform/network/communities/community-service";
import { networkCommentService } from "@/platform/network/comments/comment-service";
import { networkFeedService } from "@/platform/network/feed/feed-service";
import { networkModerationService } from "@/platform/network/moderation/moderation-service";
import { networkNotificationService } from "@/platform/network/notifications/network-notification-service";
import { networkProfileService } from "@/platform/network/profile/profile-service";
import { networkReportService } from "@/platform/network/reports/report-service";
import { networkSearchService } from "@/platform/network/search/network-search-service";
import { networkWatchlistService } from "@/platform/network/watchlists/watchlist-service";
import { networkWorkspaceSharingService } from "@/platform/network/workspaces/workspace-sharing-service";

export const networkService = {
  getDashboard() {
    return mockNetworkDashboard;
  },
  getKnowledgeExchange() {
    return mockKnowledgeExchange;
  },
  profiles: networkProfileService,
  feed: networkFeedService,
  reports: networkReportService,
  communities: networkCommunityService,
  comments: networkCommentService,
  watchlists: networkWatchlistService,
  search: networkSearchService,
  notifications: networkNotificationService,
  moderation: networkModerationService,
  workspaces: networkWorkspaceSharingService
};
