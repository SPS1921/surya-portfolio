import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial DARK palette
        paper: "#100E0B", // base background (warm near-black)
        paperdeep: "#0A0907", // deepest slabs / contrast bands
        card: "#1A1610", // elevated card surface
        ink: "#F4F1EA", // primary text & light surfaces/buttons
        soft: "#ADA697", // secondary text (warm gray)
        faint: "#766F62", // tertiary text
        line: "rgba(255,255,255,0.12)",
        hairline: "rgba(255,255,255,0.07)",
        // Signal accent (brightened for dark bg)
        signal: "#FF5A2C",
        signalink: "#FF7A4D",
        // Research category accents (brightened for dark bg)
        cat1: "#5B9CFF",
        cat2: "#A78BFA",
        cat3: "#34D399",
        cat4: "#FBBF24"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"]
      },
      letterSpacing: {
        tightest: "-0.045em"
      },
      maxWidth: {
        shell: "1240px"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
