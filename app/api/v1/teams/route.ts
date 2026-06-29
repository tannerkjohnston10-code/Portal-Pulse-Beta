import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializeTeam } from "@/platform/api/serializers/team-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const teams = await PortalPulsePlatform.teams.list();
    const data = teams.map(serializeTeam);
    return Response.json(createApiResponse(data, { requestId: context.requestId, pagination: { page: 1, pageSize: 25, total: data.length } }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
