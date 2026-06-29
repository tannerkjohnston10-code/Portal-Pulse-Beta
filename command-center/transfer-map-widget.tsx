"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Layers, MapPin, Move, ZoomIn, ZoomOut } from "lucide-react";
import type { TransferMapEvent } from "@/types/command-center";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";

export function TransferMapWidget({ events }: { events: TransferMapEvent[] }) {
  const [selectedId, setSelectedId] = useState(events[0]?.id);
  const selected = events.find((event) => event.id === selectedId) ?? events[0];

  return (
    <DashboardWidget title="Interactive Transfer Map" subtitle="Pan, zoom, hover, click, and future movement animation hooks." icon={MapPin} span={8}>
      <div className="grid gap-4 lg:grid-cols-[1fr_17rem]">
        <div className="relative min-h-[26rem] overflow-hidden rounded-lg border border-white/10 bg-[#091827]">
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-4 top-4 z-10 flex gap-2">
            <MapButton label="Zoom in" icon={ZoomIn} />
            <MapButton label="Zoom out" icon={ZoomOut} />
            <MapButton label="Pan map" icon={Move} />
            <MapButton label="Layers" icon={Layers} />
          </div>
          <div className="absolute bottom-4 left-4 z-10 rounded-md border border-white/10 bg-slate-950/80 p-3 text-xs font-bold text-slate-300">
            <div className="mb-2 text-white">Legend</div>
            <div className="flex items-center gap-2"><span className="h-2 w-6 rounded bg-cyan-300" /> Interest</div>
            <div className="mt-1 flex items-center gap-2"><span className="h-2 w-6 rounded bg-yellow-300" /> Visit</div>
          </div>
          <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Mock transfer movement map">
            <defs>
              <linearGradient id="mock-map-line" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#facc15" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {events.map((event, index) => {
              const startX = 22 + index * 16;
              const startY = 58 - index * 13;
              const endX = 64 + index * 12;
              const endY = 36 + index * 14;
              return (
                <g key={event.id}>
                  <path d={`M ${startX}% ${startY}% C 42% ${startY - 22}%, 48% ${endY + 18}%, ${endX}% ${endY}%`} stroke="url(#mock-map-line)" strokeWidth="3" fill="none" strokeDasharray="7 7" />
                  <g
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedId(event.id)}
                    onKeyDown={(keyboardEvent) => {
                      if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                        setSelectedId(event.id);
                      }
                    }}
                    aria-label={`Select ${event.playerName} map event`}
                    className="cursor-pointer outline-none"
                  >
                    <circle cx={`${startX}%`} cy={`${startY}%`} r="7" fill="#22d3ee" opacity={selectedId === event.id ? "1" : "0.6"} />
                    <circle cx={`${endX}%`} cy={`${endY}%`} r="8" fill="#facc15" opacity={selectedId === event.id ? "1" : "0.65"} />
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
        <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Selected Movement</p>
          <h3 className="mt-2 text-lg font-black text-white">{selected?.playerName}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {selected?.fromSchool} to {selected?.toSchool ?? "destination unknown"}.
          </p>
          {selected && <div className="mt-3"><ConfidenceBadge level={selected.confidence} /></div>}
          <div className="mt-5 grid gap-2">
            {events.map((event) => (
              <button key={event.id} type="button" onClick={() => setSelectedId(event.id)} className={`rounded-md border px-3 py-2 text-left text-sm font-bold transition ${selectedId === event.id ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100" : "border-white/10 bg-white/5 text-slate-300"}`}>
                {event.playerName}
              </button>
            ))}
          </div>
        </aside>
      </div>
      <TrustFooter confidence="medium" sourceCount={events.length} lastUpdated="2026-06-28T12:00:00.000Z" note="Map data is fictional" />
    </DashboardWidget>
  );
}

function MapButton({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <button type="button" className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-slate-950/80 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label={label}>
      <Icon size={16} aria-hidden />
    </button>
  );
}
