import { DEFAULT_SPORT_ID, getScholarshipLimit, getSportEngine, getSportPositions, SPORT_ENGINES, SUPPORTED_SPORT_IDS } from "@/platform/sports/sport-registry";
import { SportCapabilityRegistry } from "@/platform/sports/sport-capability-registry";
import type { SportId } from "@/platform/sports/sport-types";

export const SportsSDK = {
  version: "v1",
  defaultSportId: DEFAULT_SPORT_ID,
  supportedSportIds: SUPPORTED_SPORT_IDS,
  engines: SPORT_ENGINES,
  capabilities: SportCapabilityRegistry,
  getEngine: (sportId?: SportId) => getSportEngine(sportId),
  getPositions: (sportId?: SportId) => getSportPositions(sportId),
  getScholarshipLimit: (sportId?: SportId) => getScholarshipLimit(sportId),
  usesScholarshipEquivalencies: (sportId?: SportId) => SportCapabilityRegistry.usesScholarshipEquivalencies(sportId),
  getTypicalRosterSpots: (sportId?: SportId) => SportCapabilityRegistry.getTypicalRosterSpots(sportId),
  getPositionGroups: (sportId?: SportId) => SportCapabilityRegistry.getPositionGroups(sportId),
  getTransferWindows: (sportId?: SportId) => SportCapabilityRegistry.getTransferWindows(sportId),
  getDepthRepresentation: (sportId?: SportId) => SportCapabilityRegistry.getDepthRepresentation(sportId)
};
