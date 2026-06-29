import { platformConfig } from "@/platform/config/platform-config";
import type { CacheRecord, PlatformCacheKey } from "@/platform/cache/cache-types";

const memoryCache = new Map<string, CacheRecord<unknown>>();

export const platformCache = {
  get<T>(key: string): T | undefined {
    const record = memoryCache.get(key);
    if (!record || Date.parse(record.expiresAt) < Date.now()) return undefined;
    return record.value as T;
  },

  set<T>(namespace: PlatformCacheKey, key: string, value: T, tags: string[] = []) {
    const expiresAt = new Date(Date.now() + platformConfig.cacheTtlSeconds * 1000).toISOString();
    memoryCache.set(key, { key, namespace, value, expiresAt, tags, isMock: true });
  },

  invalidateByTag(tag: string) {
    for (const [key, record] of memoryCache.entries()) {
      if (record.tags.includes(tag)) {
        memoryCache.delete(key);
      }
    }
  }
};
