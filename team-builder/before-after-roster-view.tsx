export function BeforeAfterRosterView({ beforeState, afterState }: { beforeState: string; afterState: string }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
        <p className="text-xs font-black uppercase tracking-wide text-slate-500">Before</p>
        <p className="mt-2 text-sm font-bold text-slate-200">{beforeState}</p>
      </div>
      <div className="rounded-md border border-emerald-300/15 bg-emerald-300/10 p-3">
        <p className="text-xs font-black uppercase tracking-wide text-emerald-200">After</p>
        <p className="mt-2 text-sm font-bold text-emerald-50">{afterState}</p>
      </div>
    </div>
  );
}

