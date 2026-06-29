import { gmWorkspaceService } from "@/platform/gm-workspace/dashboard/gm-workspace-service";
import { gmRecruitingPipelineService } from "@/platform/gm-workspace/recruiting/recruiting-pipeline-service";
import { gmReportService } from "@/platform/gm-workspace/reports/gm-report-service";
import { gmRosterStrategyService } from "@/platform/gm-workspace/roster-strategy/roster-strategy-service";
import { gmScholarshipPlanningService } from "@/platform/gm-workspace/scholarships/scholarship-planning-service";
import { gmTransferPortfolioService } from "@/platform/gm-workspace/portal/transfer-portfolio-service";
import { gmOrganizationalPlanningService } from "@/platform/gm-workspace/planning/organizational-planning-service";

export const GMWorkspaceSDK = {
  version: "v1",
  dashboard: gmWorkspaceService,
  rosterStrategy: gmRosterStrategyService,
  scholarships: gmScholarshipPlanningService,
  recruiting: gmRecruitingPipelineService,
  portal: gmTransferPortfolioService,
  planning: gmOrganizationalPlanningService,
  reports: gmReportService,
  getDashboard: gmWorkspaceService.getDashboard,
  commandCenterWidget: gmWorkspaceService.getCommandCenterWidget
};
