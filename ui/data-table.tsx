import type { ReactNode } from "react";
import { typography } from "@/lib/design-tokens";

export function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10 bg-slate-950/70">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead className="bg-white/5">
          <tr>
            {headers.map((header) => (
              <th key={header} className={`p-4 ${typography.tableHeader}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-white/10 transition hover:bg-white/[0.03]">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-4 text-slate-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
