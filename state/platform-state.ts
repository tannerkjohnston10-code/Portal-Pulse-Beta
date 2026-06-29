import type { SportId } from "@/platform/sports/sport-types";
import { DEFAULT_SPORT_ID } from "@/platform/sports/sport-registry";

export type PlatformState = {
  currentSport: SportId;
  currentSeason: string;
  conference?: string;
  userPreferences: Record<string, string | boolean | number>;
  dashboardLayout: string[];
  watchlist: string[];
  theme: "dark" | "light" | "system";
  searchHistory: string[];
  pinnedPlayers: string[];
  pinnedTeams: string[];
  favoriteSports: SportId[];
  recentSports: SportId[];
  offlineReady: boolean;
  isMock: true;
};

export const defaultPlatformState: PlatformState = {
  currentSport: DEFAULT_SPORT_ID,
  currentSeason: "2026",
  userPreferences: {},
  dashboardLayout: ["command_center", "ai_insights", "rankings"],
  watchlist: [],
  theme: "dark",
  searchHistory: [],
  pinnedPlayers: [],
  pinnedTeams: [],
  favoriteSports: [DEFAULT_SPORT_ID],
  recentSports: [DEFAULT_SPORT_ID],
  offlineReady: false,
  isMock: true
};
