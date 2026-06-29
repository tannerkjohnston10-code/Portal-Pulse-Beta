import { Eye, Maximize2, SlidersHorizontal } from "lucide-react";

export function WidgetToolbar() {
  return (
    <div className="hidden items-center gap-1 sm:flex" aria-label="Widget controls">
      <button className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Filter widget">
        <SlidersHorizontal size={14} aria-hidden />
      </button>
      <button className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Open expanded widget view">
        <Maximize2 size={14} aria-hidden />
      </button>
      <button className="grid h-8 w-8 place-items-center rounded-md border border-white/10 text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Hide widget">
        <Eye size={14} aria-hidden />
      </button>
    </div>
  );
}
