import type { LabsWorkspaceData } from "@/platform/labs/core/labs-types";

export function assertLabsWorkspaceIsMock(workspace: LabsWorkspaceData) {
  return workspace.isMock && workspace.categories.every((category) => category.isMock);
}
