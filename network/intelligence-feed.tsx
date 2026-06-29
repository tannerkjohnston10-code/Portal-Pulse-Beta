import type { FeedItem } from "@/platform/network/network-types";
import { FeedItemCard } from "@/components/network/feed-item-card";

export function IntelligenceFeed({ items }: { items: FeedItem[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Intelligence Feed™</p>
      <div className="mt-4 grid gap-4">
        {items.map((item) => <FeedItemCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
