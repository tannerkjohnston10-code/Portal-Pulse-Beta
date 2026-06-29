import { createApiResponse } from "@/platform/api/v1/response";
import { PortalPulsePlatform } from "@/platform";

export async function GET() {
  return Response.json(
    createApiResponse({
      app: "Portal Pulse",
      status: "ok",
      platformVersion: PortalPulsePlatform.version.sdk,
      environment: PortalPulsePlatform.config.defaultEnvironment
    })
  );
}
