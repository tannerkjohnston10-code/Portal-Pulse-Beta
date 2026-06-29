import { depthChartService } from "@/platform/roster/depth-chart/depth-chart-service";
import { rosterChemistryService } from "@/platform/roster/chemistry/roster-chemistry-service";
import { rosterDNAService } from "@/platform/roster/dna/roster-dna-service";
import { teamGenomeService } from "@/platform/roster/dna/team-genome-service";
import { rosterFitService } from "@/platform/roster/fit/roster-fit-service";
import { transferFitService } from "@/platform/roster/fit/transfer-fit-service";
import { rosterForecastService } from "@/platform/roster/forecast/roster-forecast-service";
import { opportunityEngine } from "@/platform/roster/opportunities/opportunity-engine";
import { rosterIntelligenceService } from "@/platform/roster/core/roster-intelligence-service";
import { scholarshipBalanceService } from "@/platform/roster/scholarships/scholarship-balance-service";
import { rosterSimulationService, type RosterSimulationInput } from "@/platform/roster/simulation/roster-simulation-service";
import { strategyEngine } from "@/platform/roster/strategy/strategy-engine";
import { teamBuilderService } from "@/platform/roster/team-builder/team-builder-service";
import { teamNeedsService } from "@/platform/roster/needs/team-needs-service";
import type { SportId } from "@/platform/sports/sport-types";

export const RosterSDK = {
  version: "v1",
  getRosterIntelligence: (teamId = "mock-team-state") => rosterIntelligenceService.getRosterIntelligence(teamId),
  getTeamNeeds: (teamId = "mock-team-state") => teamNeedsService.getTeamNeeds(teamId),
  getRosterDNA: (teamId = "mock-team-state") => rosterDNAService.getRosterDNA(teamId),
  getTeamGenome: (teamId = "mock-team-state") => teamGenomeService.getTeamGenome(teamId),
  getRosterChemistry: (teamId = "mock-team-state") => rosterChemistryService.getRosterChemistry(teamId),
  getScholarshipIQ: (teamId = "mock-team-state", sportId?: SportId) => scholarshipBalanceService.getScholarshipIQ(teamId, sportId),
  getTransferFit: (playerId = "mock-transfer-tackle", teamId = "mock-team-state") => transferFitService.getTransferFit(playerId, teamId),
  runRosterSimulation: (input: RosterSimulationInput) => rosterSimulationService.runRosterSimulation(input),
  generateRosterStrategy: (teamId = "mock-team-state") => strategyEngine.generateRosterStrategy(teamId),
  depthChart: depthChartService,
  fit: rosterFitService,
  forecast: rosterForecastService,
  opportunities: opportunityEngine,
  simulations: rosterSimulationService,
  teamBuilder: teamBuilderService
};
