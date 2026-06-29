import { sourceService } from "@/server/services/source-service";

export const SourceSDK = {
  version: "v1",
  list: () => sourceService.getSources()
};
