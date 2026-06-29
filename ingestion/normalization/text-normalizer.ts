export const textNormalizer = {
  normalizeText(value: string): string {
    return value.replace(/\s+/g, " ").trim();
  },

  summarize(value: string, maxLength = 220): string {
    const normalized = textNormalizer.normalizeText(value);
    return normalized.length > maxLength ? `${normalized.slice(0, maxLength - 1)}...` : normalized;
  },

  fingerprint(parts: string[]): string {
    return parts.join("|").toLowerCase().replace(/[^a-z0-9|]+/g, "-");
  }
};
