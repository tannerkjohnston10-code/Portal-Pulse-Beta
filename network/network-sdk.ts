import { networkService } from "@/platform/network/network-service";

export const NetworkSDK = {
  version: "v1",
  dashboard: () => networkService.getDashboard(),
  knowledgeExchange: () => networkService.getKnowledgeExchange(),
  profiles: networkService.profiles,
  feed: networkService.feed,
  reports: networkService.reports,
  comments: networkService.comments,
  communities: networkService.communities,
  watchlists: networkService.watchlists,
  search: networkService.search,
  notifications: networkService.notifications,
  moderation: networkService.moderation,
  workspaces: networkService.workspaces
};
