export type FeatureFlagAudience = "internal" | "beta" | "premium" | "enterprise" | "public";

export type PlatformFeatureFlag = {
  key: string;
  enabled: boolean;
  audience: FeatureFlagAudience;
  rolloutPercentage: number;
  description: string;
  isMock: true;
};

const productionFoundationFlags: PlatformFeatureFlag[] = [
  {
    key: "enable_enterprise_workspaces",
    enabled: false,
    audience: "enterprise",
    rolloutPercentage: 0,
    description: "Placeholder for enterprise organization features.",
    isMock: true
  },
  {
    key: "enable_experimental_ai",
    enabled: false,
    audience: "internal",
    rolloutPercentage: 0,
    description: "Placeholder for controlled AI experiments.",
    isMock: true
  },
  {
    key: "enable_premium_features",
    enabled: false,
    audience: "premium",
    rolloutPercentage: 0,
    description: "Placeholder for future paid membership features.",
    isMock: true
  }
];

export const FeatureFlagService = {
  listFlags() {
    return productionFoundationFlags;
  },

  isEnabled(flagKey: string, audience: FeatureFlagAudience = "public") {
    const flag = productionFoundationFlags.find((candidate) => candidate.key === flagKey);
    return Boolean(flag?.enabled && (flag.audience === audience || flag.audience === "public"));
  }
};
