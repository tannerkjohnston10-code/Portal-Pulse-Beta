export function Sparkline({ values, tone = "cyan" }: { values: number[]; tone?: "cyan" | "green" | "red" | "yellow" }) {
  const color = {
    cyan: "bg-cyan-300",
    green: "bg-emerald-300",
    red: "bg-rose-300",
    yellow: "bg-yellow-300"
  }[tone];
  const max = Math.max(...values, 1);

  return (
    <div className="flex h-10 items-end gap-1" aria-label={`Trend values ${values.join(", ")}`}>
      {values.map((value, index) => (
        <span key={`${value}-${index}`} className={`w-2 rounded-t ${color}/80`} style={{ height: `${Math.max(18, (value / max) * 40)}px` }} />
      ))}
    </div>
  );
}
