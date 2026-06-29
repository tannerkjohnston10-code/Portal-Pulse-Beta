"use client";

import { useState } from "react";
import { defaultPlatformState, type PlatformState } from "@/platform/state/platform-state";

export function usePlatformState(initialState: PlatformState = defaultPlatformState) {
  const [state, setState] = useState(initialState);
  return { state, setState };
}
