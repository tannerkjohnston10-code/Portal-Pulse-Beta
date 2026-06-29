import { apiErrorResponse, PlatformApiError } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializePlayer } from "@/platform/api/serializers/player-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const context = prepareApiRequest(request);
    const { id } = await params;
    const player = await PortalPulsePlatform.players.get(id).catch(() => undefined);
    if (!player) throw new PlatformApiError("NOT_FOUND", "Player not found", 404, { id }, context.requestId);
    const data = serializePlayer(player);
    return Response.json(createApiResponse(data, { requestId: context.requestId, sourceCount: data.sourceCount, confidenceScore: data.confidenceScore }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
