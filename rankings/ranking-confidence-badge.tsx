export function RankingConfidenceBadge({ score }: { score: number }) {
  const tone = score >= 75 ? "border-emerald-300/30 bg-emerald-300/12 text-emerald-200" : score >= 55 ? "border-yellow-300/30 bg-yellow-300/12 text-yellow-100" : "border-rose-300/30 bg-rose-300/12 text-rose-200";
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-wide ${tone}`}>{score}% confidence</span>;
}
