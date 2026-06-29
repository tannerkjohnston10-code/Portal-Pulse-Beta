import { mockNetworkAIBriefing } from "@/platform/network/network-mock-data";

export const networkIntelligenceAgent = {
  id: "network-intelligence-agent",
  name: "Network Intelligence",
  summarizeCommunityIntelligence() {
    return {
      ...mockNetworkAIBriefing,
      submittedToIntelligenceCore: true as const,
      note: "Mock Network AI summaries cannot publish claims or bypass the Intelligence Core."
    };
  }
};
