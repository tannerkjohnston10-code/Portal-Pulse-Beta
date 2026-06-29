export type TestCategory =
  | "unit"
  | "integration"
  | "component"
  | "api"
  | "permission"
  | "performance"
  | "regression"
  | "accessibility"
  | "ai_response_validation_placeholder";

export type TestStrategyItem = {
  category: TestCategory;
  purpose: string;
  requiredBeforeProduction: boolean;
  toolingStatus: "planned" | "partial" | "ready";
  isMock: true;
};

export const TestingStrategy = {
  getTestPlan(): TestStrategyItem[] {
    return [
      {
        category: "permission",
        purpose: "Verify centralized Permission Service decisions across roles and organizations.",
        requiredBeforeProduction: true,
        toolingStatus: "planned",
        isMock: true
      },
      {
        category: "accessibility",
        purpose: "Validate keyboard navigation, contrast, ARIA, and reduced-motion support.",
        requiredBeforeProduction: true,
        toolingStatus: "planned",
        isMock: true
      },
      {
        category: "ai_response_validation_placeholder",
        purpose: "Ensure AI outputs remain evidence-backed and do not bypass Intelligence Core.",
        requiredBeforeProduction: true,
        toolingStatus: "planned",
        isMock: true
      }
    ];
  }
};
