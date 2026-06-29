import type { ReactNode } from "react";
import type { ProgramInformationType } from "@/platform/program-intelligence/core/program-intelligence-types";
import { InformationTypeBadge } from "@/components/program-intelligence/information-type-badge";

export function ProgramModuleShell({
  title,
  summary,
  contentType,
  confidenceScore,
  sourceCount,
  children
}: {
  title: string;
  summary: string;
  contentType: ProgramInformationType;
  confidenceScore: number;
  sourceCount: number;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-white">{title}</h2>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-400">{summary}</p>
        </div>
        <InformationTypeBadge type={contentType} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-black uppercase tracking-wide text-slate-500">
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">Confidence <span className="text-cyan-200">{confidenceScore}%</span></div>
        <div className="rounded-md border border-white/10 bg-slate-900/70 p-3">Sources <span className="text-cyan-200">{sourceCount}</span></div>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
