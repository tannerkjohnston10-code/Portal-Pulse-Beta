import { platformVersion } from "@/platform/versioning/platform-version";

export type ApiPagination = {
  page: number;
  pageSize: number;
  total: number;
};

export type ApiMeta = {
  version: "v1";
  generatedAt: string;
  isMock: boolean;
  sourceCount: number;
  confidenceScore: number;
  requestId: string;
  pagination?: ApiPagination;
  filtersApplied?: Record<string, string>;
  sort?: string;
};

export type ApiErrorPayload = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  requestId: string;
  timestamp: string;
};

export type ApiResponse<T> = {
  data: T;
  meta: ApiMeta;
  errors: ApiErrorPayload[];
};

export function createRequestId() {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function createApiResponse<T>(
  data: T,
  options: {
    requestId?: string;
    isMock?: boolean;
    sourceCount?: number;
    confidenceScore?: number;
    pagination?: ApiPagination;
    filtersApplied?: Record<string, string>;
    sort?: string;
  } = {}
): ApiResponse<T> {
  return {
    data,
    meta: {
      version: platformVersion.player,
      generatedAt: new Date().toISOString(),
      isMock: options.isMock ?? true,
      sourceCount: options.sourceCount ?? 0,
      confidenceScore: options.confidenceScore ?? 0,
      requestId: options.requestId ?? createRequestId(),
      ...(options.pagination ? { pagination: options.pagination } : {}),
      ...(options.filtersApplied ? { filtersApplied: options.filtersApplied } : {}),
      ...(options.sort ? { sort: options.sort } : {})
    },
    errors: []
  };
}

export function jsonApiResponse<T>(data: T, options?: Parameters<typeof createApiResponse<T>>[1]) {
  return Response.json(createApiResponse(data, options));
}
