import { createRequestId, type ApiErrorPayload } from "@/platform/api/v1/response";

export type ApiErrorCode =
  | "VALIDATION_ERROR"
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "RATE_LIMITED"
  | "INTERNAL_ERROR"
  | "DATA_UNVERIFIED"
  | "CONFLICTING_SOURCES"
  | "FEATURE_DISABLED"
  | "MOCK_DATA_ONLY";

export class PlatformApiError extends Error {
  code: ApiErrorCode;
  details?: Record<string, unknown>;
  status: number;
  requestId: string;

  constructor(code: ApiErrorCode, message: string, status = 400, details?: Record<string, unknown>, requestId = createRequestId()) {
    super(message);
    this.code = code;
    this.details = details;
    this.status = status;
    this.requestId = requestId;
  }

  toPayload(): ApiErrorPayload {
    return {
      code: this.code,
      message: this.message,
      ...(this.details ? { details: this.details } : {}),
      requestId: this.requestId,
      timestamp: new Date().toISOString()
    };
  }
}

export function apiErrorResponse(error: unknown) {
  const apiError =
    error instanceof PlatformApiError
      ? error
      : new PlatformApiError("INTERNAL_ERROR", error instanceof Error ? error.message : "Unexpected API error", 500);

  return Response.json(
    {
      data: null,
      meta: {
        version: "v1",
        generatedAt: new Date().toISOString(),
        isMock: true,
        sourceCount: 0,
        confidenceScore: 0,
        requestId: apiError.requestId
      },
      errors: [apiError.toPayload()]
    },
    { status: apiError.status }
  );
}
