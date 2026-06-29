export type AppErrorCode =
  | "NOT_FOUND"
  | "VALIDATION"
  | "SOURCE_CONFLICT"
  | "LOW_CONFIDENCE"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "RATE_LIMIT"
  | "EXTERNAL_SOURCE";

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: AppErrorCode,
    public readonly statusCode = 500,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found", details?: unknown) {
    super(message, "NOT_FOUND", 404, details);
  }
}

export class ValidationError extends AppError {
  constructor(message = "Validation failed", details?: unknown) {
    super(message, "VALIDATION", 400, details);
  }
}

export class SourceConflictError extends AppError {
  constructor(message = "Source conflict detected", details?: unknown) {
    super(message, "SOURCE_CONFLICT", 409, details);
  }
}

export class LowConfidenceError extends AppError {
  constructor(message = "Claim confidence is too low", details?: unknown) {
    super(message, "LOW_CONFIDENCE", 422, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication required", details?: unknown) {
    super(message, "UNAUTHORIZED", 401, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = "Access forbidden", details?: unknown) {
    super(message, "FORBIDDEN", 403, details);
  }
}

export class RateLimitError extends AppError {
  constructor(message = "Rate limit exceeded", details?: unknown) {
    super(message, "RATE_LIMIT", 429, details);
  }
}

export class ExternalSourceError extends AppError {
  constructor(message = "External source error", details?: unknown) {
    super(message, "EXTERNAL_SOURCE", 502, details);
  }
}

export const toErrorResponse = (error: unknown) => {
  if (error instanceof AppError) {
    return Response.json({ error: error.message, code: error.code, details: error.details }, { status: error.statusCode });
  }

  return Response.json({ error: "Internal server error", code: "INTERNAL" }, { status: 500 });
};
