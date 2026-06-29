import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { parseApiListQuery } from "@/platform/api/schemas/query-schemas";
import { serializePlayer } from "@/platform/api/serializers/player-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const query = parseApiListQuery(new URL(request.url).searchParams);
    const players = await PortalPulsePlatform.players.list();
    const data = players.map(serializePlayer);
    return Response.json(
      createApiResponse(data, {
        requestId: context.requestId,
        sourceCount: data.reduce((sum, player) => sum + player.sourceCount, 0),
        confidenceScore: Math.round(data.reduce((sum, player) => sum + player.confidenceScore, 0) / Math.max(data.length, 1)),
        pagination: { page: query.page, pageSize: query.pageSize, total: data.length },
        filtersApplied: Object.fromEntries(Object.entries(query).filter(([, value]) => value !== undefined).map(([key, value]) => [key, String(value)]))
      })
    );
  } catch (error) {
    return apiErrorResponse(error);
  }
}
