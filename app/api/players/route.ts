import { toErrorResponse } from "@/lib/errors/app-error";
import { parsePlayerFilters } from "@/lib/validators/query-validators";
import { playerService } from "@/server/services/player-service";

export async function GET(request: Request) {
  try {
    const filters = parsePlayerFilters(new URL(request.url).searchParams);
    return Response.json({ data: await playerService.getPlayers(filters), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
