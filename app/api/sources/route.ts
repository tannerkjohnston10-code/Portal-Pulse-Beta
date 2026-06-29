import { toErrorResponse } from "@/lib/errors/app-error";
import { sourceService } from "@/server/services/source-service";

export async function GET() {
  try {
    return Response.json({ data: await sourceService.getRegisteredSources(), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
