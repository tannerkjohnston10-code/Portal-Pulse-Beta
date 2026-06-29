import { Activity, BarChart3, BrainCircuit, BriefcaseBusiness, Building2, CircleDollarSign, ClipboardList, Code2, Database, FlaskConical, GitFork, History, LayoutDashboard, Lightbulb, MapPinned, Network, RadioTower, Radar, Shield, Sparkles, TrendingUp, UserCog } from "lucide-react";

export const navigationLinks = [
  { href: "/", label: "Home", icon: Activity },
  { href: "/command-center", label: "Command", icon: LayoutDashboard },
  { href: "/realtime", label: "Realtime", icon: RadioTower },
  { href: "/network", label: "Network", icon: Network },
  { href: "/athena", label: "Athena", icon: Sparkles },
  { href: "/knowledge-graph", label: "Graph", icon: GitFork },
  { href: "/maps", label: "Maps", icon: MapPinned },
  { href: "/replay", label: "Replay", icon: History },
  { href: "/market", label: "TMX", icon: TrendingUp },
  { href: "/team-builder", label: "Builder", icon: ClipboardList },
  { href: "/coach", label: "Coach", icon: UserCog },
  { href: "/gm", label: "GM", icon: BriefcaseBusiness },
  { href: "/labs", label: "Labs", icon: FlaskConical },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/players", label: "Players", icon: Database },
  { href: "/teams", label: "Teams", icon: Shield },
  { href: "/programs/mock-state", label: "Programs", icon: Building2 },
  { href: "/rankings", label: "Rankings", icon: BarChart3 },
  { href: "/nil", label: "NIL", icon: CircleDollarSign },
  { href: "/visits", label: "Visits", icon: Radar },
  { href: "/predictions", label: "Predictions", icon: BrainCircuit },
  { href: "/developers", label: "Developers", icon: Code2 },
  { href: "/platform/admin/beta", label: "Beta Ops", icon: Activity },
  { href: "/admin", label: "Admin", icon: LayoutDashboard }
] as const;

export const adminLinks = [
  { href: "/admin", label: "Review Queue" },
  { href: "/admin?queue=conflicts", label: "Conflicts" },
  { href: "/admin?queue=nil", label: "NIL Review" }
] as const;

export const premiumLinks = [
  { href: "/watchlists", label: "Watchlists", enabled: false },
  { href: "/alerts", label: "Alerts", enabled: false },
  { href: "/dashboards", label: "Premium Dashboards", enabled: false }
] as const;
