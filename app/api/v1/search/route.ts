import { apiErrorResponse } from "@/platform/api/errors/api-errors";
import { prepareApiRequest } from "@/platform/api/middleware/api-middleware";
import { serializePlayer } from "@/platform/api/serializers/player-serializer";
import { serializeTeam } from "@/platform/api/serializers/team-serializer";
import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET(request: Request) {
  try {
    const context = prepareApiRequest(request);
    const query = new URL(request.url).searchParams.get("query") ?? "";
    const results = await PortalPulsePlatform.search.searchAll(query);
    const data = {
      players: results.players.map(serializePlayer),
      teams: results.teams.map(serializeTeam),
      nilReports: results.nilReports.map((report) => ({
        id: report.id,
        playerName: report.playerName,
        school: report.school,
        sport: report.sport,
        position: report.position,
        status: report.status,
        rangeLabel: report.rangeLabel,
        confidence: report.confidence,
        confidenceScore: report.confidenceScore,
        sourceCount: 1,
        isMock: report.isMock
      })),
      predictions: results.predictions.map((prediction) => ({
        id: prediction.id,
        playerName: prediction.playerName,
        predictionType: prediction.predictionType,
        movement: prediction.movement,
        confidence: prediction.confidence,
        confidenceScore: prediction.confidenceScore,
        explanation: prediction.explanation,
        sourceCount: 1,
        isMock: prediction.isMock
      })),
      isMock: true
    };
    return Response.json(createApiResponse(data, { requestId: context.requestId, filtersApplied: { query }, sourceCount: 0, confidenceScore: 0 }));
  } catch (error) {
    return apiErrorResponse(error);
  }
}
