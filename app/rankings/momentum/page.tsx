import { RankingCard } from "@/components/rankings/ranking-card";
import { RankingTable } from "@/components/rankings/ranking-table";
import { RankingsLayout } from "@/components/rankings/rankings-layout";
import { rankingService } from "@/server/services/ranking-service";

export default async function MomentumRankingsPage() {
  const summary = await rankingService.getRankingSummary("momentum");
  return (
    <RankingsLayout summary={summary}>
      <RankingTable items={summary.items} />
      <section className="grid gap-4">
        {summary.items.map((item) => <RankingCard key={item.id} item={item} />)}
      </section>
    </RankingsLayout>
  );
}
