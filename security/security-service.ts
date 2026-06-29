export type SecurityControl =
  | "csrf_placeholder"
  | "xss_protection"
  | "input_validation"
  | "output_encoding"
  | "rate_limiting_placeholder"
  | "secure_cookies_placeholder"
  | "encryption_placeholder"
  | "secret_management"
  | "dependency_review"
  | "penetration_testing_future";

export type SecurityPostureItem = {
  control: SecurityControl;
  status: "planned" | "placeholder" | "active";
  owner: "platform" | "security" | "infrastructure";
  notes: string;
  isMock: true;
};

export const SecurityService = {
  getSecurityPosture(): SecurityPostureItem[] {
    return [
      {
        control: "input_validation",
        status: "placeholder",
        owner: "platform",
        notes: "API validators and serializers should reject unsafe input before business logic.",
        isMock: true
      },
      {
        control: "secure_cookies_placeholder",
        status: "planned",
        owner: "infrastructure",
        notes: "Session cookies should be httpOnly, secure, sameSite, and environment-aware when auth is implemented.",
        isMock: true
      },
      {
        control: "secret_management",
        status: "placeholder",
        owner: "security",
        notes: "No production credentials are stored in the repository.",
        isMock: true
      }
    ];
  },

  getPublicInformationPolicy() {
    return {
      summariesOnly: true,
      rawArticleTextBlocked: true,
      paywalledContentBlocked: true,
      sourceCitationRequired: true,
      isMock: true
    };
  }
};
