import { featureFlags } from "./features";
import { DEFAULT_SPORT_ID } from "@/platform/sports/sport-registry";

export const appConfig = {
  name: "Portal Pulse",
  tagline: "The Transfer Portal, Decoded.",
  description:
    "Premium college athletics intelligence for source-backed transfer portal movement, NIL, visits, predictions, and team momentum.",
  defaultSport: DEFAULT_SPORT_ID,
  defaultUpdateIntervalMs: 60_000,
  version: "0.2.0-architecture-foundation",
  featureFlags
} as const;
