import { toErrorResponse } from "@/lib/errors/app-error";
import { ingestionService } from "@/server/services/ingestion-service";

export async function GET() {
  try {
    return Response.json({ data: await ingestionService.getClaimCandidates(), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
