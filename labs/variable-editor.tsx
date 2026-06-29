import type { LabVariable } from "@/platform/labs/core/labs-types";

export function VariableEditor({ variables }: { variables: LabVariable[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-900/80 p-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Universal Simulation Controls</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <label className="grid gap-2">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">Scenario Name</span>
          <input className="min-h-11 rounded-md border border-white/10 bg-slate-950 px-3 text-sm font-semibold text-slate-100" value="Mock scenario draft" readOnly />
        </label>
        {variables.map((variable) => (
          <div key={variable.id} className="rounded-md border border-white/10 bg-slate-950 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{variable.label}</p>
            <p className="mt-2 text-sm font-bold text-white">{variable.value}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{variable.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {["Reset", "Duplicate", "Compare", "Share placeholder", "Export placeholder", "Notes placeholder"].map((action) => (
          <button key={action} className="rounded-md border border-white/10 px-3 py-2 text-xs font-black uppercase tracking-wide text-slate-300 transition hover:bg-white/10" type="button">
            {action}
          </button>
        ))}
      </div>
    </section>
  );
}
