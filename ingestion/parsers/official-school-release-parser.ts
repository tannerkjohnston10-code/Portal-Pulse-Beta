import type { SourceParser } from "./parser-types";
import { genericTextParser } from "./generic-text-parser";

export const officialSchoolReleaseParser: SourceParser = {
  id: "official-school-release-parser",
  canParse: (sourceType) => sourceType === "official_school",
  parse: genericTextParser.parse
};
