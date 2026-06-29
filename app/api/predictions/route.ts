import { toErrorResponse } from "@/lib/errors/app-error";
import { parsePredictionFilters } from "@/lib/validators/query-validators";
import { predictionService } from "@/server/services/prediction-service";

export async function GET(request: Request) {
  try {
    const filters = parsePredictionFilters(new URL(request.url).searchParams);
    return Response.json({ data: await predictionService.getPredictions(filters), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
