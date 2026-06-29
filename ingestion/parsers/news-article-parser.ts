import type { SourceParser } from "./parser-types";
import { genericTextParser } from "./generic-text-parser";

export const newsArticleParser: SourceParser = {
  id: "news-article-parser",
  canParse: (sourceType) => sourceType === "news_article" || sourceType === "recruiting_site",
  parse: genericTextParser.parse
};
