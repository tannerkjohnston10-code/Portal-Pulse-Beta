import { defaultPlatformState, type PlatformState } from "@/platform/state/platform-state";

let platformState: PlatformState = defaultPlatformState;

export const platformStateManager = {
  getState() {
    return platformState;
  },

  setState(partial: Partial<PlatformState>) {
    platformState = { ...platformState, ...partial };
    return platformState;
  },

  reset() {
    platformState = defaultPlatformState;
    return platformState;
  }
};
