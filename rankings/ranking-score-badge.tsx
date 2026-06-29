export function RankingScoreBadge({ score }: { score: number }) {
  return (
    <span className="inline-flex min-w-14 justify-center rounded-md border border-cyan-300/30 bg-cyan-300/12 px-2.5 py-1 text-sm font-black text-cyan-100">
      {score}
    </span>
  );
}
