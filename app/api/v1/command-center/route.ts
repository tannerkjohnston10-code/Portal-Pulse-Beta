import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializeCommandCenterSnapshot } from "@/platform/api/serializers/command-center-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const snapshot = await PortalPulsePlatform.commandCenter.snapshot();
    const data = serializeCommandCenterSnapshot(snapshot);
    return Response.json(createApiResponse(data, { requestId: context.requestId, sourceCount: snapshot.breakingUpdates, confidenceScore: snapshot.confidenceAverage }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
