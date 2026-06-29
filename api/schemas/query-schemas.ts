export type ApiListQuery = {
  page: number;
  pageSize: number;
  query?: string;
  sport?: string;
  conference?: string;
  position?: string;
  confidence?: string;
  sort?: string;
};

export function parseApiListQuery(searchParams: URLSearchParams): ApiListQuery {
  return {
    page: Number(searchParams.get("page") ?? 1),
    pageSize: Math.min(Number(searchParams.get("pageSize") ?? 25), 100),
    query: searchParams.get("query") ?? undefined,
    sport: searchParams.get("sport") ?? undefined,
    conference: searchParams.get("conference") ?? undefined,
    position: searchParams.get("position") ?? undefined,
    confidence: searchParams.get("confidence") ?? undefined,
    sort: searchParams.get("sort") ?? undefined
  };
}
