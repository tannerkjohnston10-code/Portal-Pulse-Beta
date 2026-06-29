import type { SourceParser } from "./parser-types";
import { genericTextParser } from "./generic-text-parser";

export const rssFeedParser: SourceParser = {
  id: "rss-feed-parser",
  canParse: (sourceType) => sourceType === "rss_feed",
  parse: genericTextParser.parse
};
