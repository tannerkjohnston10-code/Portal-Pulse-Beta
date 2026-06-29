import type { SourceParser } from "./parser-types";
import { genericTextParser } from "./generic-text-parser";
import { newsArticleParser } from "./news-article-parser";
import { officialSchoolReleaseParser } from "./official-school-release-parser";
import { podcastTranscriptParser } from "./podcast-transcript-parser";
import { rssFeedParser } from "./rss-feed-parser";
import { socialPostParser } from "./social-post-parser";

const parsers: SourceParser[] = [
  rssFeedParser,
  officialSchoolReleaseParser,
  newsArticleParser,
  socialPostParser,
  podcastTranscriptParser,
  genericTextParser
];

export const parserRegistry = {
  getParser(sourceType: string): SourceParser {
    return parsers.find((parser) => parser.canParse(sourceType)) ?? genericTextParser;
  }
};
