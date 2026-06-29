import { appConfig } from "@/lib/config/app-config";

export async function GET() {
  return Response.json({
    app: appConfig.name,
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV ?? "unknown",
    version: appConfig.version
  });
}
