import Link from "next/link";

const tabs = [
  { href: "/rankings", label: "Overview" },
  { href: "/rankings/players", label: "Players" },
  { href: "/rankings/teams", label: "Teams" },
  { href: "/rankings/conferences", label: "Conferences" },
  { href: "/rankings/positions", label: "Positions" },
  { href: "/rankings/nil", label: "NIL" },
  { href: "/rankings/momentum", label: "Momentum" }
];

export function RankingTabs() {
  return (
    <nav className="flex gap-2 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/70 p-2" aria-label="Ranking categories">
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href} className="min-h-10 shrink-0 rounded-md px-3 py-2 text-sm font-black text-slate-300 transition hover:bg-white/10 hover:text-white">
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
