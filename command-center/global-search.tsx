"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Command, Search } from "lucide-react";
import type { CommandCenterSearchResult } from "@/types/command-center";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function GlobalSearch({ results }: { results: CommandCenterSearchResult[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return results;
    }

    return results.filter((result) => `${result.label} ${result.category} ${result.description}`.toLowerCase().includes(normalized));
  }, [query, results]);

  return (
    <div className="relative min-w-0 flex-1">
      <label className="sr-only" htmlFor="command-center-search">
        Search Portal Pulse
      </label>
      <div className="flex min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-slate-950/80 px-3 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] focus-within:border-cyan-300/50">
        <Search size={17} aria-hidden />
        <input
          id="command-center-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
          className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-slate-500"
          placeholder="Search players, teams, coaches, predictions..."
        />
        <span className="hidden items-center gap-1 rounded border border-white/10 px-2 py-1 text-xs font-black text-slate-500 sm:inline-flex">
          <Command size={12} aria-hidden /> /
        </span>
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 max-h-96 overflow-y-auto rounded-lg border border-white/10 bg-slate-950 p-2 shadow-2xl">
          <div className="px-2 pb-2 text-xs font-black uppercase tracking-wide text-slate-500">Mock Search Results</div>
          {filtered.slice(0, 6).map((result) => (
            <Link key={result.id} href={result.href} className="flex items-center justify-between gap-3 rounded-md px-3 py-2 transition hover:bg-white/10">
              <span className="min-w-0">
                <span className="block truncate text-sm font-black text-white">{result.label}</span>
                <span className="block truncate text-xs font-semibold text-slate-400">{result.description}</span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold capitalize text-slate-300">{result.category.replace("_", " ")}</span>
                {result.confidence && <ConfidenceBadge level={result.confidence} />}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
