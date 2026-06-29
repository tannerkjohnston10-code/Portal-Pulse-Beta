import { mockLabsWorkspace } from "@/platform/labs/core/mock-labs-data";
import type { LabCommandCenterWidget, LabsWorkspaceData } from "@/platform/labs/core/labs-types";

export const labsService = {
  getWorkspace(): LabsWorkspaceData {
    return mockLabsWorkspace;
  },

  getCommandCenterWidget(): LabCommandCenterWidget {
    return mockLabsWorkspace.commandCenterWidget;
  }
};
