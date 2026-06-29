import { BetaFeedbackWidget } from "@/components/beta/beta-feedback-widget";
import { DemoModeBar } from "@/components/beta/demo-mode-bar";
import { WalkthroughPanel } from "@/components/beta/walkthrough-panel";

export function BetaExperienceLayer() {
  return (
    <>
      <DemoModeBar />
      <WalkthroughPanel />
      <BetaFeedbackWidget />
    </>
  );
}
