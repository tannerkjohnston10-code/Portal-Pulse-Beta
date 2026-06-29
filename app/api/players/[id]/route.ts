import { toErrorResponse } from "@/lib/errors/app-error";
import { claimService } from "@/server/services/claim-service";
import { nilService } from "@/server/services/nil-service";
import { playerService } from "@/server/services/player-service";
import { predictionService } from "@/server/services/prediction-service";
import { visitService } from "@/server/services/visit-service";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const [player, timeline, claims, nilReports, visits, predictions] = await Promise.all([
      playerService.getPlayerDetails(id),
      playerService.buildPlayerTimeline(id),
      claimService.getClaimsForSubject(id),
      nilService.getNILReportsForPlayer(id),
      visitService.getVisitsForPlayer(id),
      predictionService.getPredictionsForPlayer(id)
    ]);

    return Response.json({ data: { player, timeline, claims, nilReports, visits, predictions }, isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
