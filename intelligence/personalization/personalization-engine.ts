import { defaultPlatformState } from "@/platform/state/platform-state";

export const personalizationEngine = {
  getPlaceholderProfile(userId?: string) {
    return {
      userId: userId ?? "mock-user",
      favoriteTeams: defaultPlatformState.pinnedTeams,
      favoritePlayers: defaultPlatformState.pinnedPlayers,
      favoriteSports: [defaultPlatformState.currentSport],
      favoriteConferences: defaultPlatformState.conference ? [defaultPlatformState.conference] : [],
      dashboardLayout: defaultPlatformState.dashboardLayout,
      notificationPreferences: ["in_app"],
      searchHistory: defaultPlatformState.searchHistory,
      isMock: true
    };
  }
};
