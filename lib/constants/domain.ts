import type { ClaimStatus, ConfidenceLevel, NILStatus, PortalStatus, PredictionType, SourceType, Sport, VisitType } from "@/types/portal";

export const SPORTS: Sport[] = ["Football", "Men's Basketball", "Women's Basketball", "Baseball", "Softball", "Unknown"];

export const PORTAL_STATUSES: PortalStatus[] = ["entered", "available", "committed", "signed", "enrolled", "withdrawn", "unknown"];

export const CONFIDENCE_LEVELS: ConfidenceLevel[] = ["high", "medium", "low", "conflicting", "unknown"];

export const CLAIM_STATUSES: ClaimStatus[] = ["confirmed", "reported", "rumored", "estimated", "disputed", "needs_review", "unknown"];

export const SOURCE_TYPES: SourceType[] = [
  "official_school",
  "player_statement",
  "coach_statement",
  "verified_reporter",
  "recruiting_site",
  "news_article",
  "podcast",
  "social_media",
  "message_board",
  "unknown"
];

export const NIL_STATUSES: NILStatus[] = ["confirmed", "reported", "estimated", "rumored", "unknown"];

export const VISIT_TYPES: VisitType[] = ["official", "unofficial", "in_home", "virtual", "unknown"];

export const PREDICTION_TYPES: PredictionType[] = ["commitment", "visit", "nil", "roster_fit", "team_ranking"];

export const UNIVERSAL_POSITION_GROUPS = ["backcourt", "frontcourt", "lineup", "pitching", "offense", "defense", "special_teams", "utility"] as const;
