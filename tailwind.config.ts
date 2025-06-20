import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2D1B3D",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Sophisticated color palette inspired by the images
        burgundy: {
          50: "#fdf2f2",
          100: "#fce7e7",
          200: "#f9d5d5",
          300: "#f4b5b5",
          400: "#ec8888",
          500: "#e05d5d",
          600: "#cd3f3f",
          700: "#ab2f2f",
          800: "#8d2929",
          900: "#762727",
          950: "#401111",
        },
        cream: {
          50: "#fefdf9",
          100: "#fefbf0",
          200: "#fcf4d9",
          300: "#f9e9b8",
          400: "#f4d888",
          500: "#efc055",
          600: "#d9a441",
          700: "#b5843a",
          800: "#926838",
          900: "#785632",
          950: "#432e18",
        },
        sage: {
          50: "#f6f7f6",
          100: "#e3e7e3",
          200: "#c7cfc8",
          300: "#a3b0a5",
          400: "#7a8a7d",
          500: "#5d6f61",
          600: "#48594c",
          700: "#3c4a3f",
          800: "#323d35",
          900: "#2b342e",
          950: "#161c18",
        },
        bronze: {
          50: "#fdf8f3",
          100: "#faeee1",
          200: "#f4dac2",
          300: "#ecc198",
          400: "#e2a06c",
          500: "#d4824a",
          600: "#c66a3f",
          700: "#a55436",
          800: "#854533",
          900: "#6c3a2c",
          950: "#3a1d16",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
