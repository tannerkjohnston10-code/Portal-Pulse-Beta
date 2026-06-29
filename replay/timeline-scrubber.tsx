import type { ReplayEvent } from "@/platform/history/snapshots/history-types";

export function TimelineScrubber({ events }: { events: ReplayEvent[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between text-xs font-black uppercase tracking-wide text-slate-500">
        <span>{events[0]?.eventDate.slice(0, 10)}</span>
        <span>{events[events.length - 1]?.eventDate.slice(0, 10)}</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div className="h-2 w-3/4 rounded-full bg-cyan-300" />
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
            <p className="text-xs font-black text-white">{event.title}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">{event.eventDate.slice(0, 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

