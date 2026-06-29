import { createApiResponse } from "@/platform/api/v1/response";
import { PlatformApiError } from "@/platform/api/errors/api-errors";

export const apiTestUtils = {
  mockResponse: <T>(data: T) => createApiResponse(data, { isMock: true }),
  mockError: () => new PlatformApiError("MOCK_DATA_ONLY", "Mock API error for tests", 400),
  mockRequest: (url = "http://localhost/api/v1/health") => new Request(url)
};
