import { AnalyticsSDK } from "@/platform/analytics/analytics-sdk";
import { AISDK } from "@/platform/ai/ai-sdk";
import { BetaMetricsService } from "@/platform/admin/beta/beta-metrics-service";
import { platformApiContracts } from "@/platform/api/api-contracts";
import { ApiGateway } from "@/platform/api/api-gateway";
import { publicAuthContext } from "@/platform/auth/auth-context";
import { AuthService } from "@/platform/auth/auth-service";
import { BackupService } from "@/platform/backups/backup-service";
import { platformCache } from "@/platform/cache/cache-manager";
import { CachePolicyService } from "@/platform/cache/cache-policy";
import { EnvironmentConfigService } from "@/platform/config/environment-config";
import { platformConfig } from "@/platform/config/platform-config";
import { DeploymentConfigService } from "@/platform/deployment/deployment-config";
import { platformEventBus } from "@/platform/events/event-bus";
import { FeatureFlagService } from "@/platform/feature-flags/feature-flag-service";
import { HistorySDK } from "@/platform/history/history-sdk";
import { JobQueue } from "@/platform/jobs/job-queue";
import { PlatformLogger } from "@/platform/logging/logger";
import { MarketSDK } from "@/platform/market/market-sdk";
import { MapSDK } from "@/platform/maps/map-sdk";
import { MetricsService } from "@/platform/metrics/metrics-service";
import { HealthService } from "@/platform/monitoring/health-service";
import { LabsSDK } from "@/platform/labs/labs-sdk";
import { NotificationSDK } from "@/platform/notifications/notification-sdk";
import { NetworkSDK } from "@/platform/network/network-sdk";
import { OrganizationService } from "@/platform/organizations/organization-service";
import { PermissionService } from "@/platform/permissions/permission-service";
import { ProgramIntelligenceSDK } from "@/platform/program-intelligence/program-intelligence-sdk";
import { RecoveryService } from "@/platform/recovery/recovery-service";
import { RealtimeSDK } from "@/platform/realtime/realtime-sdk";
import { GMWorkspaceSDK } from "@/platform/gm-workspace/gm-workspace-sdk";
import { RosterSDK } from "@/platform/roster/roster-sdk";
import { SearchInfrastructure } from "@/platform/search/search-infrastructure";
import { SearchSDK } from "@/platform/search/search-sdk";
import { SecurityService } from "@/platform/security/security-service";
import { SportsSDK } from "@/platform/sports/sports-sdk";
import { platformStateManager } from "@/platform/state/state-manager";
import { TestingStrategy } from "@/platform/testing/test-strategy";
import { UserService } from "@/platform/users/user-service";
import { platformVersion } from "@/platform/versioning/platform-version";
import { CommandCenterSDK } from "@/platform/sdk/command-center-sdk";
import { InsightSDK } from "@/platform/sdk/insight-sdk";
import { IntelligenceSDK } from "@/platform/sdk/intelligence-sdk";
import { AthenaSDK } from "@/platform/sdk/athena-sdk";
import { KnowledgeGraphSDK } from "@/platform/sdk/knowledge-graph-sdk";
import { NILSDK } from "@/platform/sdk/nil-sdk";
import { PlayerSDK } from "@/platform/sdk/player-sdk";
import { PredictionSDK } from "@/platform/sdk/prediction-sdk";
import { RankingSDK } from "@/platform/sdk/ranking-sdk";
import { SourceSDK } from "@/platform/sdk/source-sdk";
import { TeamSDK } from "@/platform/sdk/team-sdk";
import { TimelineSDK } from "@/platform/sdk/timeline-sdk";
import { VisitSDK } from "@/platform/sdk/visit-sdk";
import { platformObservability } from "@/platform/core/observability";

export const PortalPulsePlatform = {
  config: platformConfig,
  beta: BetaMetricsService,
  environment: EnvironmentConfigService,
  version: platformVersion,
  auth: publicAuthContext,
  authService: AuthService,
  users: UserService,
  organizations: OrganizationService,
  permissions: PermissionService,
  security: SecurityService,
  apiContracts: platformApiContracts,
  apiGateway: ApiGateway,
  events: platformEventBus,
  cache: platformCache,
  cachePolicies: CachePolicyService,
  state: platformStateManager,
  observability: platformObservability,
  logging: PlatformLogger,
  metrics: MetricsService,
  monitoring: HealthService,
  featureFlags: FeatureFlagService,
  jobs: JobQueue,
  deployment: DeploymentConfigService,
  backups: BackupService,
  recovery: RecoveryService,
  testing: TestingStrategy,
  realtime: RealtimeSDK,
  players: PlayerSDK,
  teams: TeamSDK,
  rankings: RankingSDK,
  sources: SourceSDK,
  predictions: PredictionSDK,
  timeline: TimelineSDK,
  nil: NILSDK,
  visits: VisitSDK,
  insights: InsightSDK,
  intelligence: IntelligenceSDK,
  athena: AthenaSDK,
  search: SearchSDK,
  searchInfrastructure: SearchInfrastructure,
  sports: SportsSDK,
  notifications: NotificationSDK,
  network: NetworkSDK,
  knowledgeGraph: KnowledgeGraphSDK,
  analytics: AnalyticsSDK,
  ai: AISDK,
  history: HistorySDK,
  market: MarketSDK,
  maps: MapSDK,
  labs: LabsSDK,
  programIntelligence: ProgramIntelligenceSDK,
  gmWorkspace: GMWorkspaceSDK,
  roster: RosterSDK,
  commandCenter: CommandCenterSDK
};
