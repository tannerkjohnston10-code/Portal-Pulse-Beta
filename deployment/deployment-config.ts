export type DeploymentTarget = "local" | "preview" | "production";

export type DeploymentChecklistItem = {
  label: string;
  required: boolean;
  status: "pending" | "ready" | "blocked";
  notes: string;
  isMock: true;
};

export const DeploymentConfigService = {
  getDeploymentChecklist(target: DeploymentTarget): DeploymentChecklistItem[] {
    return [
      {
        label: "Environment variables validated",
        required: true,
        status: target === "local" ? "ready" : "pending",
        notes: "Production validation should run in CI/CD before release.",
        isMock: true
      },
      {
        label: "Health checks configured",
        required: true,
        status: "ready",
        notes: "Mock health service exists; provider checks are future work.",
        isMock: true
      },
      {
        label: "Rollback plan documented",
        required: true,
        status: "pending",
        notes: "Future deployments should include release rollback instructions.",
        isMock: true
      }
    ];
  }
};
