export type PlatformCacheKey =
  | "player_profile"
  | "team_dashboard"
  | "command_center_snapshot"
  | "rankings"
  | "ai_insights"
  | "conference_dashboard"
  | "search_results"
  | "prediction_summary";

export type CacheRecord<T> = {
  key: string;
  namespace: PlatformCacheKey;
  value: T;
  expiresAt: string;
  tags: string[];
  isMock?: true;
};
