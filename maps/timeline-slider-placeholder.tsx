export function TimelineSliderPlaceholder() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between text-xs font-black uppercase tracking-wide text-slate-500">
        <span>Season start</span>
        <span>Today</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div className="h-2 w-2/3 rounded-full bg-cyan-300" />
      </div>
      <p className="mt-3 text-xs font-bold text-slate-500">Historical replay placeholder: date slider, weekly replay, monthly replay, season replay, and transfer animation hooks.</p>
    </div>
  );
}

