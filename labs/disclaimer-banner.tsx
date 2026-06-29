import { AlertTriangle } from "lucide-react";

export function DisclaimerBanner({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-amber-300/25 bg-amber-300/10 p-4 text-amber-50">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden />
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-200">Simulation Disclaimer</p>
          <p className="mt-2 text-sm font-semibold leading-6">{text}</p>
        </div>
      </div>
    </div>
  );
}
