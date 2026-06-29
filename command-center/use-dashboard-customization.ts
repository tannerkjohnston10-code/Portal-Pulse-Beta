"use client";

import { useMemo, useState } from "react";
import type { CommandCenterModule, DashboardWidgetDefinition } from "@/types/command-center";

export function useDashboardCustomization(widgets: DashboardWidgetDefinition[]) {
  const [enabledModules, setEnabledModules] = useState<CommandCenterModule[]>(() => widgets.filter((widget) => widget.defaultEnabled).map((widget) => widget.id));

  const visibleWidgets = useMemo(() => widgets.filter((widget) => enabledModules.includes(widget.id)), [enabledModules, widgets]);

  function toggleModule(module: CommandCenterModule) {
    setEnabledModules((current) => (current.includes(module) ? current.filter((item) => item !== module) : [...current, module]));
  }

  function resetLayout() {
    setEnabledModules(widgets.filter((widget) => widget.defaultEnabled).map((widget) => widget.id));
  }

  return {
    enabledModules,
    visibleWidgets,
    toggleModule,
    resetLayout
  };
}
