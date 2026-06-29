import { apiErrorResponse, PlatformApiError } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializeTeamIntelligence } from "@/platform/api/serializers/team-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const context = prepareApiRequest(request);
    const { id } = await params;
    const profile = await PortalPulsePlatform.teams.intelligence(id);
    if (!profile) throw new PlatformApiError("NOT_FOUND", "Team not found", 404, { id }, context.requestId);
    const data = serializeTeamIntelligence(profile);
    return Response.json(createApiResponse(data, { requestId: context.requestId, sourceCount: data.sourceCount, confidenceScore: data.confidenceScore }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
