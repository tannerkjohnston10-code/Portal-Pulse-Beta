import { mockNetworkProfiles } from "@/platform/network/network-mock-data";

export const networkProfileService = {
  getProfiles() {
    return mockNetworkProfiles;
  },
  getProfile(profileId = "mock-profile-analyst") {
    return mockNetworkProfiles.find((profile) => profile.id === profileId) ?? mockNetworkProfiles[0];
  },
  getReputation(profileId = "mock-profile-analyst") {
    return this.getProfile(profileId).reputation;
  }
};
