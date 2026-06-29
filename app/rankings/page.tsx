import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RankingCard } from "@/components/rankings/ranking-card";
import { RankingsLayout } from "@/components/rankings/rankings-layout";
import { rankingService } from "@/server/services/ranking-service";

export default async function RankingsPage() {
  const summaries = await rankingService.getAllRankingSummaries();
  const overview = summaries[0];

  return (
    <RankingsLayout
      summary={{
        ...overview,
        title: "Rankings Intelligence Platform",
        description: "A source-aware ranking system for players, teams, conferences, positions, NIL markets, momentum, roster strength, and portal class impact."
      }}
    >
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {summaries.map((summary) => (
          <Link key={summary.type} href={`/rankings/${summary.type}`} className="rounded-lg border border-white/10 bg-slate-950/72 p-5 transition hover:border-cyan-300/25 hover:bg-slate-900/85">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{summary.type.replace("_", " ")}</p>
                <h2 className="mt-2 text-lg font-black text-white">{summary.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-400">{summary.description}</p>
              </div>
              <ArrowUpRight size={18} className="text-slate-500" aria-hidden />
            </div>
            <p className="mt-4 text-3xl font-black text-white">{summary.items.length}</p>
            <p className="text-xs font-bold text-slate-500">mock ranked items</p>
          </Link>
        ))}
      </section>

      <section className="grid gap-4">
        <h2 className="text-xl font-black text-white">Top Intelligence Movers</h2>
        {summaries.flatMap((summary) => summary.items.slice(0, 1)).map((item) => (
          <RankingCard key={item.id} item={item} />
        ))}
      </section>
    </RankingsLayout>
  );
}
