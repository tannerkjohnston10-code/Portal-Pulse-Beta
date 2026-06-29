import type { SourceParser } from "./parser-types";
import { genericTextParser } from "./generic-text-parser";

export const socialPostParser: SourceParser = {
  id: "social-post-parser",
  canParse: (sourceType) => sourceType === "social_media" || sourceType === "player_statement" || sourceType === "coach_statement",
  parse: genericTextParser.parse
};
