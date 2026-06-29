import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializeRanking } from "@/platform/api/serializers/ranking-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const summaries = await PortalPulsePlatform.rankings.all();
    const data = summaries.map((summary) => ({ ...summary, items: summary.items.map(serializeRanking) }));
    return Response.json(createApiResponse(data, { requestId: context.requestId, sourceCount: data.flatMap((summary) => summary.items).reduce((sum, item) => sum + item.sourceCount, 0) }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
