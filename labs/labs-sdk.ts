import { labsService } from "@/platform/labs/core/labs-service";

export const LabsSDK = {
  getWorkspace: labsService.getWorkspace,
  commandCenterWidget: labsService.getCommandCenterWidget
};
