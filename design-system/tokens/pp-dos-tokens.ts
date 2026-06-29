export const ppDosTokens = {
  color: {
    primary: {
      base: "#22d3ee",
      emphasis: "#67e8f9",
      muted: "rgba(34, 211, 238, 0.16)",
      border: "rgba(34, 211, 238, 0.34)"
    },
    secondary: {
      base: "#facc15",
      emphasis: "#fde68a",
      muted: "rgba(250, 204, 21, 0.14)",
      border: "rgba(250, 204, 21, 0.3)"
    },
    background: {
      app: "#07111f",
      canvas: "#081425",
      elevated: "#0b1728",
      inverse: "#f8fafc"
    },
    surface: {
      card: "#0f172a",
      panel: "#111c2e",
      overlay: "rgba(7, 17, 31, 0.86)",
      subtle: "rgba(255, 255, 255, 0.04)"
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
      muted: "#94a3b8",
      disabled: "#64748b",
      inverse: "#07111f"
    },
    border: {
      subtle: "rgba(255, 255, 255, 0.08)",
      default: "rgba(255, 255, 255, 0.12)",
      strong: "rgba(255, 255, 255, 0.22)",
      focus: "#67e8f9"
    },
    success: {
      base: "#34d399",
      surface: "rgba(52, 211, 153, 0.12)",
      border: "rgba(52, 211, 153, 0.3)"
    },
    warning: {
      base: "#fbbf24",
      surface: "rgba(251, 191, 36, 0.12)",
      border: "rgba(251, 191, 36, 0.3)"
    },
    critical: {
      base: "#fb7185",
      surface: "rgba(251, 113, 133, 0.12)",
      border: "rgba(251, 113, 133, 0.3)"
    },
    info: {
      base: "#60a5fa",
      surface: "rgba(96, 165, 250, 0.12)",
      border: "rgba(96, 165, 250, 0.3)"
    },
    verified: {
      base: "#34d399",
      official: "#a7f3d0",
      surface: "rgba(52, 211, 153, 0.12)"
    },
    pendingReview: {
      base: "#fbbf24",
      surface: "rgba(251, 191, 36, 0.12)"
    },
    simulation: {
      mock: "#94a3b8",
      projected: "#a78bfa",
      assumption: "#fbbf24",
      scenario: "#22d3ee"
    },
    prediction: {
      base: "#a78bfa",
      up: "#34d399",
      down: "#fb7185",
      uncertainty: "#fbbf24"
    },
    historical: {
      snapshot: "#38bdf8",
      replay: "#818cf8",
      delta: "#facc15"
    },
    confidence: {
      high: "#34d399",
      medium: "#fbbf24",
      low: "#fb7185",
      conflicting: "#e879f9",
      unknown: "#94a3b8"
    },
    neutral: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    }
  },
  typography: {
    fontFamily: {
      sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    },
    scale: {
      display: { size: "clamp(2.25rem, 4vw, 4.5rem)", lineHeight: "0.98", weight: "900" },
      h1: { size: "2.25rem", lineHeight: "2.5rem", weight: "900" },
      h2: { size: "1.5rem", lineHeight: "2rem", weight: "800" },
      h3: { size: "1.125rem", lineHeight: "1.5rem", weight: "800" },
      body: { size: "0.9375rem", lineHeight: "1.625rem", weight: "500" },
      caption: { size: "0.75rem", lineHeight: "1rem", weight: "600" },
      label: { size: "0.6875rem", lineHeight: "0.875rem", weight: "800" },
      data: { size: "0.8125rem", lineHeight: "1.125rem", weight: "700" },
      button: { size: "0.8125rem", lineHeight: "1rem", weight: "800" },
      mobileBody: { size: "0.875rem", lineHeight: "1.5rem", weight: "500" }
    },
    tracking: {
      normal: "0",
      label: "0.14em",
      data: "0.04em"
    }
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem"
  },
  radius: {
    none: "0",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "10px",
    xl: "14px",
    full: "999px"
  },
  elevation: {
    none: "none",
    card: "0 10px 28px rgba(0, 0, 0, 0.18)",
    panel: "0 18px 50px rgba(0, 0, 0, 0.28)",
    overlay: "0 24px 80px rgba(0, 0, 0, 0.42)",
    glow: "0 0 32px rgba(34, 211, 238, 0.12)",
    criticalGlow: "0 0 32px rgba(251, 113, 133, 0.12)"
  },
  opacity: {
    disabled: "0.42",
    muted: "0.64",
    overlay: "0.86",
    focus: "1"
  },
  transition: {
    standard: "color 160ms ease, background-color 160ms ease, border-color 160ms ease",
    transform: "transform 220ms ease, opacity 180ms ease",
    rankingShift: "transform 240ms ease-out, color 160ms ease-out",
    confidenceChange: "background-color 220ms ease-out, border-color 220ms ease-out",
    reduced: "none"
  },
  timing: {
    instant: "80ms",
    fast: "120ms",
    base: "200ms",
    deliberate: "320ms",
    slow: "480ms"
  },
  shadow: {
    card: "0 10px 28px rgba(0, 0, 0, 0.18)",
    panel: "0 18px 50px rgba(0, 0, 0, 0.28)",
    focus: "0 0 0 3px rgba(34, 211, 238, 0.32)",
    inset: "inset 0 1px 0 rgba(255, 255, 255, 0.08)"
  },
  breakpoint: {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
    ultraWide: "1536px"
  },
  grid: {
    mobile: "4 columns",
    tablet: "8 columns",
    desktop: "12 columns",
    ultraWide: "12 columns with expanded gutters",
    gap: {
      compact: "0.75rem",
      standard: "1rem",
      spacious: "1.5rem"
    }
  },
  sizing: {
    touchTarget: "44px",
    navHeight: "64px",
    intelligenceStreamHeight: "36px",
    sidebar: "18rem",
    contentMax: "1600px",
    cardMin: "18rem"
  },
  zIndex: {
    base: 0,
    sticky: 20,
    nav: 40,
    overlay: 60,
    modal: 80,
    toast: 100
  }
} as const;

export type PortalPulseDesignToken = typeof ppDosTokens;
