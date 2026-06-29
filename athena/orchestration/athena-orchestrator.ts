import { agentOrchestrator } from "@/platform/athena/orchestration/agent-orchestrator";
import { athenaEvaluator } from "@/platform/athena/evaluation/athena-evaluator";

export const athenaOrchestrator = {
  coordinateDailyCycle() {
    const workflow = agentOrchestrator.runMockWorkflow();
    const evaluations = workflow.findings.map((finding) => athenaEvaluator.evaluateFinding(finding));

    return {
      id: "mock-athena-daily-cycle",
      workflow,
      evaluations,
      coreApprovalRequired: true,
      summary: "Mock daily cycle coordinated by Athena. Findings are proposed by agents and evaluated before Core-gated briefing generation.",
      createdAt: "2026-06-28T14:30:00.000Z",
      isMock: true
    };
  }
};

