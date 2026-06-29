import { mockCommunities } from "@/platform/network/network-mock-data";
import type { SportId } from "@/platform/sports/sport-types";

export const networkCommunityService = {
  getCommunities() {
    return mockCommunities;
  },
  getCommunityBySport(sportId: SportId) {
    return mockCommunities.find((community) => community.sportId === sportId);
  }
};
