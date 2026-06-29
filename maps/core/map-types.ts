import type { ConfidenceLevel } from "@/types/portal";

export type CoordinatesPlaceholder = {
  latitude: number;
  longitude: number;
  isApproximate: true;
};

export type SpatialEntityType =
  | "Region"
  | "State"
  | "City"
  | "Campus"
  | "GeographicCluster"
  | "RecruitingTerritory"
  | "TalentPipeline"
  | "TransferFlow"
  | "MapLayer"
  | "HeatZone";

export type SpatialEntity = {
  id: string;
  entityType: SpatialEntityType;
  displayName: string;
  coordinates: CoordinatesPlaceholder;
  confidence: ConfidenceLevel;
  relatedEntities: string[];
  sourceIds: string[];
  isMock: true;
};

export type MapLayerType =
  | "transfer_activity"
  | "recruiting_activity"
  | "conference_movement"
  | "coaching_connections"
  | "player_hometowns"
  | "high_school_pipelines"
  | "portal_entries"
  | "commitments"
  | "official_visits"
  | "nil_activity"
  | "prediction_activity"
  | "watchlist_activity"
  | "heat_maps"
  | "relationship_density";

export type MapLayer = {
  id: string;
  layerType: MapLayerType;
  displayName: string;
  description: string;
  enabledByDefault: boolean;
  confidence: ConfidenceLevel;
  entityIds: string[];
  sourceIds: string[];
  isMock: true;
};

export type FlowType = "player_to_school" | "school_to_school" | "conference_to_conference" | "state_to_school" | "high_school_to_college" | "coach_to_region";

export type SpatialFlow = {
  id: string;
  flowType: FlowType;
  displayName: string;
  origin: SpatialEntity;
  destination: SpatialEntity;
  confidence: ConfidenceLevel;
  strength: number;
  evidenceCount: number;
  sourceCount: number;
  timelineSupport: string[];
  relatedGraphRelationshipIds: string[];
  isMock: true;
};

export type HeatZone = SpatialEntity & {
  entityType: "HeatZone";
  intensity: number;
  metricLabel: string;
};

export type SpatialAnalyticsAnswer = {
  id: string;
  question: string;
  answer: string;
  confidence: ConfidenceLevel;
  sourceCount: number;
  evidenceCount: number;
  isMock: true;
};

export type CartographerFinding = {
  id: string;
  title: string;
  summary: string;
  hottestTransferRegion: string;
  mostActiveConference: string;
  strongestRecruitingPipeline: string;
  geographicTrendSummary: string;
  submittedToCore: true;
  confidence: ConfidenceLevel;
  sourceCount: number;
  isMock: true;
};
