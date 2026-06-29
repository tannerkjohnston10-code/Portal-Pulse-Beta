import type { PlatformEnvironment } from "@/platform/types/platform-types";
import { DEFAULT_SPORT_ID } from "@/platform/sports/sport-registry";

export const platformConfig = {
  name: "Portal Pulse Platform SDK",
  version: "1.0.0-mock",
  defaultEnvironment: "development" satisfies PlatformEnvironment,
  defaultSeason: "2026",
  defaultSport: DEFAULT_SPORT_ID,
  cacheTtlSeconds: 300,
  enableMockServices: true,
  enableEventBus: true,
  enableHistorySnapshots: true,
  enableAthenaNetwork: true,
  enableApiExposure: false,
  enableEnterpriseMode: false
} as const;
