import { programIntelligenceService } from "@/platform/program-intelligence/core/program-intelligence-service";

export const ProgramIntelligenceSDK = {
  getWorkspace: programIntelligenceService.getWorkspace,
  commandCenterWidget: programIntelligenceService.getCommandCenterWidget
};
