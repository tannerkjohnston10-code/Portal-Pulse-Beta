import { NotFoundError, toErrorResponse } from "@/lib/errors/app-error";
import { sourceService } from "@/server/services/source-service";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const source = await sourceService.getRegisteredSourceById(id);
    if (!source) throw new NotFoundError("Source not found", { id });
    return Response.json({ data: source, isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
