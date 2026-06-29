import { toErrorResponse } from "@/lib/errors/app-error";
import { parseTeamFilters } from "@/lib/validators/query-validators";
import { teamService } from "@/server/services/team-service";

export async function GET(request: Request) {
  try {
    const filters = parseTeamFilters(new URL(request.url).searchParams);
    return Response.json({ data: await teamService.getTeams(filters), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
