import { aiPlatformPolicy } from "@/platform/ai/ai-platform-policy";
import { InsightSDK } from "@/platform/sdk/insight-sdk";

export const AISDK = {
  version: "v1",
  policy: aiPlatformPolicy,
  insights: InsightSDK,
  explainSafety() {
    return aiPlatformPolicy.summary;
  }
};
