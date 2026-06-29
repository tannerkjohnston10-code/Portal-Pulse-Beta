import type { SourceParser } from "./parser-types";
import { genericTextParser } from "./generic-text-parser";

export const podcastTranscriptParser: SourceParser = {
  id: "podcast-transcript-parser",
  canParse: (sourceType) => sourceType === "podcast",
  parse: genericTextParser.parse
};
