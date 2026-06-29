import { dailyBriefingGenerator } from "@/platform/athena/briefings/daily-briefing-generator";

export const athenaBriefingService = {
  getDailyBriefing() {
    return dailyBriefingGenerator.generate();
  }
};

