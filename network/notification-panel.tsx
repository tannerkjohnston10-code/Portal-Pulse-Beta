import type { NetworkNotification } from "@/platform/network/network-types";

export function NotificationPanel({ notifications }: { notifications: NetworkNotification[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Notifications</p>
      <div className="mt-4 grid gap-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
            <p className="text-sm font-black text-white">{notification.title}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{notification.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
