import { toErrorResponse } from "@/lib/errors/app-error";
import { parseNILFilters } from "@/lib/validators/query-validators";
import { nilService } from "@/server/services/nil-service";

export async function GET(request: Request) {
  try {
    const filters = parseNILFilters(new URL(request.url).searchParams);
    return Response.json({ data: await nilService.getNILReports(filters), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
