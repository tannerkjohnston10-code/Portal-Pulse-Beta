import { motion } from "@/lib/design-tokens";

export function Tabs({ tabs, active = tabs[0] }: { tabs: string[]; active?: string }) {
  return (
    <nav className="flex gap-2 overflow-x-auto" aria-label="Tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`inline-flex min-h-10 shrink-0 items-center rounded-md border px-3 text-sm font-black ${motion.base} ${
            tab === active ? "border-cyan-300/35 bg-cyan-300/12 text-cyan-100" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
