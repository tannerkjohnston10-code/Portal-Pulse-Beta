import type { MockSourceItem, NormalizedContent } from "@/server/ingestion/types";

export type SourceParser = {
  id: string;
  canParse(sourceType: string): boolean;
  parse(item: MockSourceItem): Promise<NormalizedContent>;
};
