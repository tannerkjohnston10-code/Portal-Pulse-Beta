import { toErrorResponse } from "@/lib/errors/app-error";
import { adminReviewService } from "@/server/services/admin-review-service";

export async function GET() {
  try {
    return Response.json({ data: await adminReviewService.getReviewQueue(), isMock: true });
  } catch (error) {
    return toErrorResponse(error);
  }
}
