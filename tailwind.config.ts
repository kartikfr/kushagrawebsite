import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Dark mode background layers
        bg: {
          DEFAULT: "hsl(var(--bg-page))",
          1: "hsl(var(--bg-elev-1))",
          2: "hsl(var(--bg-elev-2))",
          3: "hsl(var(--bg-elev-3))",
        },
        // Text hierarchy
        text: {
          DEFAULT: "hsl(var(--text-primary))",
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          inverse: "hsl(var(--text-inverse))",
        },
        // Accent colors
        accent: {
          DEFAULT: "hsl(var(--accent))",
          strong: "hsl(var(--accent-strong))",
          muted: "hsl(var(--accent-muted))",
        },
        // Status colors
        success: {
          DEFAULT: "hsl(var(--success))",
          muted: "hsl(var(--success-muted))",
        },
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        // Glass and borders
        glass: {
          fill: "rgb(var(--glass-fill))",
          stroke: "rgb(var(--glass-stroke))",
        },
        line: {
          subtle: "rgb(var(--line-subtle))",
          medium: "rgb(var(--line-medium))",
        },
        // Modal overlays
        scrim: {
          80: "rgb(var(--scrim-80))",
          40: "rgb(var(--scrim-40))",
        },
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        "elev-1": "var(--shadow-elev-1)",
        "elev-2": "var(--shadow-elev-2)",
        "glow": "var(--shadow-glow)",
      },
      backdropBlur: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "22px",
      },
      transitionTimingFunction: {
        "out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
