import { DEFAULT_SPORT_ID, getSportEngine, resolveSportId, SUPPORTED_SPORT_IDS } from "@/platform/sports/sport-registry";
import type { LineupStructure, PositionDefinition, ScholarshipModel, SportEngine, SportId } from "@/platform/sports/sport-types";

export type DepthRepresentation = "depth_chart" | "rotation" | "lineup" | "lineup_and_pitching_staff";

export type SportCapabilityProfile = {
  sportId: SportId;
  displayName: SportEngine["displayName"];
  usesScholarshipEquivalencies: boolean;
  scholarshipModel: ScholarshipModel;
  scholarshipLimit: number | null;
  scholarshipLimitLabel: string;
  typicalRosterSpots: number | null;
  starters: number;
  positionGroups: Array<{ group: string; positions: PositionDefinition[] }>;
  transferWindows: SportEngine["transferWindows"];
  depthRepresentation: DepthRepresentation;
  depthRepresentationLabel: string;
  lineupStructure: LineupStructure;
  terminology: SportEngine["terminology"];
  isMock: true;
};

function groupPositions(positions: PositionDefinition[]) {
  return positions.reduce<Array<{ group: string; positions: PositionDefinition[] }>>((groups, position) => {
    const existing = groups.find((item) => item.group === position.group);
    if (existing) {
      existing.positions.push(position);
      return groups;
    }
    return [...groups, { group: position.group, positions: [position] }];
  }, []);
}

function resolveDepthRepresentation(engine: SportEngine): DepthRepresentation {
  if (engine.id === "football") return "depth_chart";
  if (engine.id === "mens-basketball" || engine.id === "womens-basketball") return "rotation";
  if (engine.id === "baseball" || engine.id === "softball") return "lineup_and_pitching_staff";
  return "lineup";
}

function buildCapabilityProfile(sportId: SportId): SportCapabilityProfile {
  const engine = getSportEngine(sportId);
  return {
    sportId: engine.id,
    displayName: engine.displayName,
    usesScholarshipEquivalencies: engine.scholarshipRules.equivalency,
    scholarshipModel: engine.scholarshipRules.model,
    scholarshipLimit: engine.scholarshipRules.limit,
    scholarshipLimitLabel: engine.scholarshipRules.limitLabel,
    typicalRosterSpots: engine.scholarshipRules.limit,
    starters: engine.rosterRules.starters,
    positionGroups: groupPositions(engine.positions),
    transferWindows: engine.transferWindows,
    depthRepresentation: resolveDepthRepresentation(engine),
    depthRepresentationLabel: engine.rosterRules.rotationOrDepthLabel,
    lineupStructure: engine.lineupStructure,
    terminology: engine.terminology,
    isMock: true
  };
}

export const SportCapabilityRegistry = {
  defaultSportId: DEFAULT_SPORT_ID,
  supportedSportIds: SUPPORTED_SPORT_IDS,

  getProfile(sportId?: string) {
    return buildCapabilityProfile(resolveSportId(sportId));
  },

  usesScholarshipEquivalencies(sportId?: string) {
    return this.getProfile(sportId).usesScholarshipEquivalencies;
  },

  getScholarshipModel(sportId?: string) {
    return this.getProfile(sportId).scholarshipModel;
  },

  getScholarshipLimit(sportId?: string) {
    return this.getProfile(sportId).scholarshipLimit;
  },

  getTypicalRosterSpots(sportId?: string) {
    return this.getProfile(sportId).typicalRosterSpots;
  },

  getPositionGroups(sportId?: string) {
    return this.getProfile(sportId).positionGroups;
  },

  getTransferWindows(sportId?: string) {
    return this.getProfile(sportId).transferWindows;
  },

  getDepthRepresentation(sportId?: string) {
    const profile = this.getProfile(sportId);
    return {
      type: profile.depthRepresentation,
      label: profile.depthRepresentationLabel,
      lineupStructure: profile.lineupStructure,
      terminology: profile.terminology
    };
  },

  getTerminology(sportId?: string) {
    return this.getProfile(sportId).terminology;
  }
};
