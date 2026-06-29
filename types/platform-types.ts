import type { CommandCenterSnapshot } from "@/types/command-center";
import type { AIInsight } from "@/types/insights";
import type { AnyRankingItem } from "@/types/rankings";
import type { Player, Prediction, Team, Visit, NILReport, TimelineEvent } from "@/types/portal";
import type { TeamIntelligenceProfile } from "@/types/team-intelligence";
import type { SportId } from "@/platform/sports/sport-types";

export type PlatformEntityType =
  | "player"
  | "team"
  | "school"
  | "coach"
  | "conference"
  | "collective"
  | "source_article"
  | "ranking"
  | "claim"
  | "prediction"
  | "nil"
  | "visit"
  | "timeline"
  | "command_center"
  | "insight"
  | "search"
  | "notification"
  | "knowledge_graph"
  | "history"
  | "map";

export type PlatformEnvironment = "development" | "preview" | "production";

export type PlatformResult<T> = {
  data: T;
  source: "platform_sdk";
  generatedAt: string;
  isMock?: true;
};

export type PlatformSearchResult = {
  players: Player[];
  teams: Team[];
  nilReports: NILReport[];
  predictions: Prediction[];
  insights?: AIInsight[];
  rankings?: AnyRankingItem[];
  filtersApplied?: PlatformSearchFilters;
  isMock?: true;
};

export type PlatformSearchFilters = {
  sportId?: SportId | "all";
  position?: string;
  conference?: string;
  programId?: string;
  athleteId?: string;
  transferStatus?: string;
  portalYear?: string;
};

export type PlatformSnapshot = {
  commandCenter?: CommandCenterSnapshot;
  topInsights?: AIInsight[];
  topRankings?: AnyRankingItem[];
  teams?: TeamIntelligenceProfile[];
  isMock: true;
};

export type PlatformTimelineSubject = {
  subjectId: string;
  subjectType: "player" | "team" | "conference" | "ranking" | "prediction";
};

export type PlatformTimelineResult = PlatformTimelineSubject & {
  events: TimelineEvent[];
  isMock: true;
};

export type PlatformVisitResult = {
  visits: Visit[];
  isMock: true;
};
