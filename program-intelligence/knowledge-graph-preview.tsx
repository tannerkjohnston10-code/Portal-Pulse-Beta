import type { ProgramIntelligenceModule, ProgramKnowledgeGraphPreview } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function KnowledgeGraphPreview({ module }: { module: ProgramIntelligenceModule<ProgramKnowledgeGraphPreview> }) {
  return (
    <ProgramModuleShell {...module}>
      <p className="text-sm text-slate-300">{module.data.entityCount} mock entities · {module.data.relationshipCount} relationships</p>
      <p className="mt-3 text-sm text-slate-400">Strongest: {module.data.strongestRelationships.join(", ")}</p>
      <p className="mt-2 text-sm text-fuchsia-100">Conflicts: {module.data.conflictingRelationships.join(", ")}</p>
    </ProgramModuleShell>
  );
}
