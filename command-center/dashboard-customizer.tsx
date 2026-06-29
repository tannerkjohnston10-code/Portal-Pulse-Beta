"use client";

import { RotateCcw, Save, Settings2 } from "lucide-react";
import type { DashboardWidgetDefinition } from "@/types/command-center";
import { useDashboardCustomization } from "@/components/command-center/use-dashboard-customization";

export function DashboardCustomizer({ widgets }: { widgets: DashboardWidgetDefinition[] }) {
  const { enabledModules, toggleModule, resetLayout } = useDashboardCustomization(widgets);

  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-4" aria-labelledby="dashboard-customizer-title">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Settings2 size={17} className="text-cyan-300" aria-hidden />
            <h2 id="dashboard-customizer-title" className="text-base font-black text-white">
              Dashboard Customization
            </h2>
          </div>
          <p className="mt-1 text-sm font-semibold text-slate-400">Mock layout controls prepared for drag, resize, hide, save, and multiple views.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 px-3 text-sm font-bold text-slate-300 transition hover:bg-white/10" type="button" aria-label="Save dashboard layout placeholder">
            <Save size={15} aria-hidden />
            Save View
          </button>
          <button className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 px-3 text-sm font-bold text-slate-300 transition hover:bg-white/10" type="button" onClick={resetLayout}>
            <RotateCcw size={15} aria-hidden />
            Reset
          </button>
        </div>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {widgets.map((widget) => {
          const enabled = enabledModules.includes(widget.id);
          return (
            <button
              key={widget.id}
              type="button"
              onClick={() => toggleModule(widget.id)}
              className={`min-h-10 shrink-0 rounded-md border px-3 text-xs font-black uppercase tracking-wide transition ${
                enabled ? "border-cyan-300/35 bg-cyan-300/12 text-cyan-100" : "border-white/10 bg-white/5 text-slate-400"
              }`}
              aria-pressed={enabled}
            >
              {widget.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}
