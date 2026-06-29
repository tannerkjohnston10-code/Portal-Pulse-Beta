import { ShieldCheck } from "lucide-react";
import { AlertBanner } from "./alert-banner";

export function TrustNotice() {
  return (
    <AlertBanner tone="info">
      <span className="inline-flex items-start gap-2">
        <ShieldCheck className="mt-0.5 shrink-0 text-cyan-200" size={16} aria-hidden />
        <span>Every future claim should connect to a source, confidence score, timestamp, and review state. Predictions are projections, not facts.</span>
      </span>
    </AlertBanner>
  );
}
