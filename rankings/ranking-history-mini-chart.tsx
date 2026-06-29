import { Sparkline } from "@/components/command-center/sparkline";

export function RankingHistoryMiniChart({ values }: { values: number[] }) {
  return <Sparkline values={values.map((value) => Math.max(1, 12 - value))} tone="cyan" />;
}
