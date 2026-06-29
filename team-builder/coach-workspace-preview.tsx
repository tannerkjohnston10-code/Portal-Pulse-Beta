export function CoachWorkspacePreview() {
  const items = ["Coach Notes", "Staff Collaboration", "Recruiting Board", "Private Evaluation", "Visit Planning", "Internal Tags"];
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Coach workspace preview</p>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
            <p className="text-sm font-black text-white">{item}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">Future protected workspace placeholder</p>
          </div>
        ))}
      </div>
    </section>
  );
}

