import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializeInsight } from "@/platform/api/serializers/insight-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const insights = await PortalPulsePlatform.insights.feed();
    const data = insights.map(serializeInsight);
    return Response.json(createApiResponse(data, { requestId: context.requestId, sourceCount: data.reduce((sum, item) => sum + item.sourceCount, 0), confidenceScore: Math.round(data.reduce((sum, item) => sum + item.confidenceScore, 0) / Math.max(data.length, 1)) }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
