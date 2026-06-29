import { PortalPulsePlatform } from "@/platform/core/portal-pulse-platform";

export function createMockPlatform() {
  return PortalPulsePlatform;
}

export const platformTestUtils = {
  createMockPlatform,
  mockUserId: "mock-user",
  mockTeamId: "metro-university",
  mockPlayerId: "marcus-vale"
};
