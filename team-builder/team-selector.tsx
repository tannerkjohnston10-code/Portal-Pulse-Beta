export function TeamSelector({ teamName }: { teamName: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Team selector</p>
      <p className="mt-2 text-lg font-black text-white">{teamName}</p>
      <p className="mt-1 text-xs font-bold text-slate-500">Mock selector placeholder</p>
    </div>
  );
}

