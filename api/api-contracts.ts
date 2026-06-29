import type { PlatformEntityType } from "@/platform/types/platform-types";

export type PlatformAPIResource =
  | "players"
  | "teams"
  | "rankings"
  | "predictions"
  | "nil"
  | "timeline"
  | "insights"
  | "search"
  | "statistics"
  | "historical_replay"
  | "sources"
  | "claims"
  | "command_center"
  | "visits";

export type PlatformAPIContract = {
  resource: PlatformAPIResource;
  version: "v1";
  entityType?: PlatformEntityType;
  supportsList: boolean;
  supportsDetail: boolean;
  supportsHistory: boolean;
  isMock: true;
};

export const platformApiContracts: PlatformAPIContract[] = [
  { resource: "players", version: "v1", entityType: "player", supportsList: true, supportsDetail: true, supportsHistory: true, isMock: true },
  { resource: "teams", version: "v1", entityType: "team", supportsList: true, supportsDetail: true, supportsHistory: true, isMock: true },
  { resource: "rankings", version: "v1", entityType: "ranking", supportsList: true, supportsDetail: false, supportsHistory: true, isMock: true },
  { resource: "predictions", version: "v1", entityType: "prediction", supportsList: true, supportsDetail: true, supportsHistory: true, isMock: true },
  { resource: "nil", version: "v1", entityType: "nil", supportsList: true, supportsDetail: true, supportsHistory: true, isMock: true },
  { resource: "visits", version: "v1", entityType: "visit", supportsList: true, supportsDetail: true, supportsHistory: false, isMock: true },
  { resource: "insights", version: "v1", entityType: "insight", supportsList: true, supportsDetail: true, supportsHistory: false, isMock: true },
  { resource: "search", version: "v1", entityType: "search", supportsList: true, supportsDetail: false, supportsHistory: false, isMock: true },
  { resource: "sources", version: "v1", entityType: "source_article", supportsList: true, supportsDetail: true, supportsHistory: false, isMock: true },
  { resource: "claims", version: "v1", entityType: "claim", supportsList: true, supportsDetail: true, supportsHistory: true, isMock: true },
  { resource: "command_center", version: "v1", entityType: "command_center", supportsList: false, supportsDetail: true, supportsHistory: true, isMock: true }
];
