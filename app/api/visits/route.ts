import { toErrorResponse } from "@/lib/errors/app-error";
import { parseVisitFilters } from "@/lib/validators/query-validators";
import { visitService } from "@/server/services/visit-service";

export async function GET(request: Request) {
  try {
    const filters = parseVisitFilters(new URL(request.url).searchParams);
    return Response.json({ data: await visitService.getVisits(filters), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
