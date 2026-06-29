import type { ProgramSnapshot } from "@/platform/program-intelligence/core/program-intelligence-types";
import { InformationTypeBadge } from "@/components/program-intelligence/information-type-badge";

export function ProgramHeader({ snapshot }: { snapshot: ProgramSnapshot }) {
  return (
    <header className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-lg border border-cyan-300/25 bg-slate-950 text-2xl font-black text-cyan-100">
            {snapshot.identity.logoInitials}
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Program Intelligence Workspace</p>
            <h1 className="mt-2 text-3xl font-black text-white sm:text-5xl">{snapshot.identity.schoolName}</h1>
            <p className="mt-2 text-sm font-semibold text-cyan-50">{snapshot.identity.sport} · {snapshot.identity.conference} · {snapshot.identity.headCoach}</p>
          </div>
        </div>
        <InformationTypeBadge type="Verified Information" />
      </div>
      <p className="mt-5 max-w-4xl text-sm font-semibold leading-6 text-cyan-50">
        Mock workspace powered internally by the Digital Twin Engine. Each module labels whether it shows verified information, analysis, historical context, predictions, or simulations.
      </p>
    </header>
  );
}
