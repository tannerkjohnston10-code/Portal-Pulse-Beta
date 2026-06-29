export type RuntimeEnvironment = "development" | "testing" | "staging" | "production";

export type EnvironmentConfig = {
  environment: RuntimeEnvironment;
  appUrl: string;
  apiBaseUrl: string;
  enableMockData: boolean;
  requireSecureCookies: boolean;
  enableStrictCsp: boolean;
  observabilityEnabled: boolean;
  isMock: true;
};

const environmentDefaults: Record<RuntimeEnvironment, EnvironmentConfig> = {
  development: {
    environment: "development",
    appUrl: "http://localhost:3000",
    apiBaseUrl: "http://localhost:3000/api",
    enableMockData: true,
    requireSecureCookies: false,
    enableStrictCsp: false,
    observabilityEnabled: true,
    isMock: true
  },
  testing: {
    environment: "testing",
    appUrl: "http://localhost:3000",
    apiBaseUrl: "http://localhost:3000/api",
    enableMockData: true,
    requireSecureCookies: false,
    enableStrictCsp: true,
    observabilityEnabled: false,
    isMock: true
  },
  staging: {
    environment: "staging",
    appUrl: "https://staging.portalpulse.example",
    apiBaseUrl: "https://staging.portalpulse.example/api",
    enableMockData: true,
    requireSecureCookies: true,
    enableStrictCsp: true,
    observabilityEnabled: true,
    isMock: true
  },
  production: {
    environment: "production",
    appUrl: "https://portalpulse.example",
    apiBaseUrl: "https://portalpulse.example/api",
    enableMockData: false,
    requireSecureCookies: true,
    enableStrictCsp: true,
    observabilityEnabled: true,
    isMock: true
  }
};

export const EnvironmentConfigService = {
  getConfig(environment: RuntimeEnvironment = "development") {
    return environmentDefaults[environment];
  },

  validateEnvironment(environment: RuntimeEnvironment = "development") {
    const config = environmentDefaults[environment];

    return {
      valid: Boolean(config.appUrl && config.apiBaseUrl),
      environment,
      warnings: config.enableMockData && environment === "production" ? ["Production must disable mock data."] : [],
      isMock: true
    };
  }
};
