export type PlatformErrorCode =
  | "API_ERROR"
  | "UI_ERROR"
  | "AI_ERROR"
  | "SEARCH_ERROR"
  | "NETWORK_ERROR"
  | "PERMISSION_ERROR"
  | "AUTHENTICATION_ERROR"
  | "VALIDATION_ERROR"
  | "INTERNAL_ERROR";

export type PlatformErrorShape = {
  code: PlatformErrorCode;
  message: string;
  userMessage: string;
  requestId?: string;
  details?: Record<string, unknown>;
  timestamp: string;
  isMock?: true;
};

export function createPlatformError(
  code: PlatformErrorCode,
  message: string,
  userMessage = "Something went wrong. Please try again."
): PlatformErrorShape {
  return {
    code,
    message,
    userMessage,
    timestamp: new Date().toISOString(),
    isMock: true
  };
}
