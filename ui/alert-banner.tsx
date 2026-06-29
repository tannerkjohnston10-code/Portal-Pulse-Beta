import type { ReactNode } from "react";

const styles = {
  info: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  warning: "border-yellow-300/25 bg-yellow-300/10 text-yellow-100",
  danger: "border-rose-400/30 bg-rose-400/10 text-rose-100",
  success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
};

export function AlertBanner({ tone = "info", children }: { tone?: keyof typeof styles; children: ReactNode }) {
  return <div className={`rounded-lg border px-4 py-3 text-sm font-semibold ${styles[tone]}`}>{children}</div>;
}
