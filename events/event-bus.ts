import type { PlatformEvent, PlatformEventHandler, PlatformEventType } from "@/platform/events/platform-events";

const subscribers = new Map<PlatformEventType, Set<PlatformEventHandler>>();

export const platformEventBus = {
  subscribe<TPayload>(type: PlatformEventType, handler: PlatformEventHandler<TPayload>) {
    const handlers = subscribers.get(type) ?? new Set<PlatformEventHandler>();
    handlers.add(handler as PlatformEventHandler);
    subscribers.set(type, handlers);

    return () => this.unsubscribe(type, handler);
  },

  unsubscribe<TPayload>(type: PlatformEventType, handler: PlatformEventHandler<TPayload>) {
    subscribers.get(type)?.delete(handler as PlatformEventHandler);
  },

  async publish<TPayload>(event: PlatformEvent<TPayload>) {
    const handlers = subscribers.get(event.type) ?? new Set();
    await Promise.all(Array.from(handlers).map((handler) => handler(event)));
  }
};
