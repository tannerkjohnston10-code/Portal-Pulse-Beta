import type { PlatformResult } from "@/platform/types/platform-types";

export function createPlatformResult<T>(data: T, isMock?: true): PlatformResult<T> {
  return {
    data,
    source: "platform_sdk",
    generatedAt: new Date().toISOString(),
    ...(isMock ? { isMock } : {})
  };
}
