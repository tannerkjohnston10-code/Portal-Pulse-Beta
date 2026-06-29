export const colors = {
  dark: {
    backgroundPrimary: "#07111f",
    backgroundSecondary: "#0b1728",
    backgroundCard: "rgba(15, 23, 42, 0.78)",
    backgroundElevated: "#111c2e",
    textPrimary: "#f8fafc",
    textSecondary: "#cbd5e1",
    textMuted: "#64748b",
    accentPrimary: "#22d3ee",
    accentSecondary: "#facc15",
    success: "#34d399",
    warning: "#fbbf24",
    danger: "#fb7185",
    info: "#60a5fa"
  },
  light: {
    backgroundPrimary: "#f7fafc",
    backgroundSecondary: "#eef4f8",
    backgroundCard: "#ffffff",
    backgroundElevated: "#f8fafc",
    textPrimary: "#0f172a",
    textSecondary: "#334155",
    textMuted: "#64748b",
    accentPrimary: "#0891b2",
    accentSecondary: "#b45309",
    success: "#047857",
    warning: "#b45309",
    danger: "#be123c",
    info: "#2563eb"
  }
} as const;

export const spacing = {
  pageX: "px-4 sm:px-6 lg:px-8",
  pageY: "py-8",
  sectionGap: "grid gap-8",
  cardGap: "grid gap-4",
  compactGap: "grid gap-3"
} as const;

export const radius = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full"
} as const;

export const shadows = {
  card: "shadow-[0_18px_50px_rgba(0,0,0,0.28)]",
  glow: "shadow-[0_0_32px_rgba(34,211,238,0.12)]",
  inset: "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
} as const;

export const gradients = {
  appBackground:
    "radial-gradient(circle at top left, rgba(34, 211, 238, 0.12), transparent 34rem), radial-gradient(circle at top right, rgba(250, 204, 21, 0.08), transparent 28rem), #07111f",
  cardSheen: "bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]",
  ticker: "bg-[linear-gradient(90deg,rgba(34,211,238,0.18),rgba(250,204,21,0.12),rgba(34,211,238,0.18))]"
} as const;

export const borders = {
  subtle: "border border-white/10",
  active: "border border-cyan-300/35",
  warning: "border border-yellow-300/25",
  danger: "border border-rose-400/30",
  success: "border border-emerald-400/30"
} as const;

export const motion = {
  base: "transition duration-200 ease-out",
  hoverLift: "transition duration-200 ease-out hover:-translate-y-0.5",
  focusRing: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
} as const;

export const typography = {
  pageTitle: "text-3xl font-black tracking-normal text-white sm:text-5xl",
  sectionTitle: "text-xl font-black text-white sm:text-2xl",
  cardTitle: "text-lg font-black text-white",
  tableHeader: "text-xs font-black uppercase tracking-wide text-slate-400",
  body: "text-sm leading-6 text-slate-300",
  metadata: "text-xs font-semibold text-slate-500",
  badge: "text-xs font-black uppercase tracking-wide",
  statNumber: "text-3xl font-black tabular-nums text-white",
  ticker: "text-xs font-black uppercase tracking-[0.18em]",
  mobileBody: "text-sm leading-6"
} as const;

export const confidenceStateStyles = {
  high: "border-emerald-400/30 bg-emerald-400/12 text-emerald-300",
  medium: "border-amber-300/30 bg-amber-300/12 text-amber-200",
  low: "border-rose-400/30 bg-rose-400/12 text-rose-300",
  conflicting: "border-fuchsia-400/30 bg-fuchsia-400/12 text-fuchsia-200",
  unknown: "border-slate-500/30 bg-slate-500/12 text-slate-300"
} as const;

export const nilStatusStyles = {
  confirmed: "border-emerald-400/30 bg-emerald-400/12 text-emerald-300",
  reported: "border-cyan-300/30 bg-cyan-300/12 text-cyan-200",
  estimated: "border-amber-300/30 bg-amber-300/12 text-amber-200",
  rumored: "border-rose-400/30 bg-rose-400/12 text-rose-300",
  unknown: "border-slate-500/30 bg-slate-500/12 text-slate-300"
} as const;

export const movementStateStyles = {
  up: "text-emerald-300 bg-emerald-400/12 border-emerald-400/30",
  down: "text-rose-300 bg-rose-400/12 border-rose-400/30",
  flat: "text-slate-300 bg-slate-500/12 border-slate-500/30"
} as const;

export const cardStyles = `${radius.lg} ${borders.subtle} bg-slate-900/78 ${shadows.card} ${shadows.inset} backdrop-blur`;

export const panelStyles = `${radius.lg} ${borders.subtle} bg-slate-950/70 ${shadows.inset}`;

export const inputStyles =
  `min-h-11 ${radius.md} ${borders.subtle} bg-slate-950 px-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 ${motion.focusRing}`;

export const buttonStyles =
  `inline-flex min-h-11 items-center justify-center gap-2 ${radius.md} px-4 text-sm font-bold ${motion.base} ${motion.focusRing}`;
