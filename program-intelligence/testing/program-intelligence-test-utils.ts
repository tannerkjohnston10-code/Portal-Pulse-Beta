import type { ProgramIntelligenceWorkspace } from "@/platform/program-intelligence/core/program-intelligence-types";

export function assertProgramWorkspaceIsMock(workspace: ProgramIntelligenceWorkspace) {
  return workspace.isMock && Object.values(workspace.modules).every((module) => module.isMock);
}
