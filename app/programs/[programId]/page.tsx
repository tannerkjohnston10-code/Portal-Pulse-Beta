import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { ProgramWorkspace } from "@/components/program-intelligence/program-workspace";
import { PortalPulsePlatform } from "@/platform";

export default async function ProgramIntelligencePage({ params }: { params: Promise<{ programId: string }> }) {
  const { programId } = await params;
  const workspace = await PortalPulsePlatform.programIntelligence.getWorkspace(programId);

  return (
    <div className="grid gap-6">
      <div className="mx-auto w-full max-w-[1600px] px-4 pt-8 sm:px-6 lg:px-8">
        <MockDataNotice />
      </div>
      <ProgramWorkspace workspace={workspace} />
    </div>
  );
}
