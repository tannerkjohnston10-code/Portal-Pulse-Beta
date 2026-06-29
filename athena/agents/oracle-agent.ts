import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { oracleService } from "@/platform/athena/agents/oracle/oracle-service";

const agent = athenaAgents.find((item) => item.id === "oracle-prediction")!;

export const oracleAgent = {
  agent,
  observe() {
    const mover = oracleService.getTopPredictionMover();
    return createMockFinding(agent, `${mover.predictedOutcome} is a mock projection at ${mover.probability}%, with ${mover.uncertaintyLevel} uncertainty and Core review required.`, "prediction_signal");
  },

  getTopPredictionMover() {
    return oracleService.getTopPredictionMover();
  },

  getPredictionMovers() {
    return oracleService.getPredictionMovers();
  }
};
