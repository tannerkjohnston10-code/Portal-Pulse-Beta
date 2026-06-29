import { digitalTwinEngine } from "@/platform/program-intelligence/digital-twin/digital-twin-engine";

export const programIntelligenceService = {
  getWorkspace: digitalTwinEngine.buildProgramWorkspace,
  getCommandCenterWidget: digitalTwinEngine.getCommandCenterWidget
};
