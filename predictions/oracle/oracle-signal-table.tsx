import type { OraclePredictionSignal } from "@/platform/athena/agents/oracle/oracle-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function OracleSignalTable({ signals }: { signals: OraclePredictionSignal[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-white/[0.04] text-xs font-black uppercase tracking-wide text-slate-400">
          <tr>
            <th className="px-4 py-3">Signal</th>
            <th className="px-4 py-3">Player</th>
            <th className="px-4 py-3">Team</th>
            <th className="px-4 py-3">Strength</th>
            <th className="px-4 py-3">Confidence</th>
            <th className="px-4 py-3">Evidence</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {signals.map((signal) => (
            <tr key={signal.id} className="bg-slate-950/40">
              <td className="px-4 py-3 font-bold text-white">{signal.signalType.replaceAll("_", " ")}</td>
              <td className="px-4 py-3 text-slate-300">{signal.affectedPlayer}</td>
              <td className="px-4 py-3 text-slate-300">{signal.affectedTeam}</td>
              <td className="px-4 py-3 font-black text-cyan-100">{signal.strength}</td>
              <td className="px-4 py-3"><ConfidenceBadge level={signal.confidence} /></td>
              <td className="px-4 py-3 text-slate-400">{signal.evidenceCount} refs · {signal.sourceCount} sources</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

