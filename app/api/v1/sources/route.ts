import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializeSource } from "@/platform/api/serializers/source-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const sources = await PortalPulsePlatform.sources.list();
    const data = sources.map(serializeSource);
    return Response.json(createApiResponse(data, { requestId: context.requestId, sourceCount: data.length, pagination: { page: 1, pageSize: 25, total: data.length } }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
