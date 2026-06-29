import { baseballSportEngine } from "@/platform/sports/baseball/baseball-engine";
import { footballSportEngine } from "@/platform/sports/football/football-engine";
import { mensBasketballSportEngine } from "@/platform/sports/mens-basketball/mens-basketball-engine";
import { softballSportEngine } from "@/platform/sports/softball/softball-engine";
import { womensBasketballSportEngine } from "@/platform/sports/womens-basketball/womens-basketball-engine";
import type { SportEngine, SportId } from "@/platform/sports/sport-types";

export const SPORT_ENGINES: Record<SportId, SportEngine> = {
  football: footballSportEngine,
  "mens-basketball": mensBasketballSportEngine,
  "womens-basketball": womensBasketballSportEngine,
  baseball: baseballSportEngine,
  softball: softballSportEngine
};

export const SUPPORTED_SPORT_IDS = Object.keys(SPORT_ENGINES) as SportId[];
export const DEFAULT_SPORT_ID: SportId = "football";

export function getSportEngine(sportId: SportId = DEFAULT_SPORT_ID): SportEngine {
  return SPORT_ENGINES[sportId];
}

export function getSportPositions(sportId: SportId = DEFAULT_SPORT_ID) {
  return getSportEngine(sportId).positions;
}

export function getScholarshipLimit(sportId: SportId = DEFAULT_SPORT_ID) {
  return getSportEngine(sportId).scholarshipRules.limit;
}

export function resolveSportId(value: string | undefined): SportId {
  const match = SUPPORTED_SPORT_IDS.find((sportId) => sportId === value);
  return match ?? DEFAULT_SPORT_ID;
}
