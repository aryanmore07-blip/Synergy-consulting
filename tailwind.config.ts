import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                surface: "var(--surface)",
                "surface-raised": "var(--surface-raised)",
                foreground: "var(--foreground)",
                "foreground-muted": "var(--foreground-muted)",
                gold: {
                    DEFAULT: "#C9A84C",
                    light: "#E8C97A",
                    dim: "rgba(201,168,76,0.13)",
                },
                teal: {
                    DEFAULT: "#0D9488",
                    dim: "rgba(13,148,136,0.13)",
                },
                // Keep legacy for any lingering class usage
                primary: {
                    DEFAULT: "#C9A84C",
                    foreground: "#0A0B0F",
                },
                secondary: {
                    DEFAULT: "#0D0E13",
                    foreground: "#F5F0E8",
                },
                accent: {
                    DEFAULT: "#0D9488",
                    foreground: "#F5F0E8",
                },
            },
            fontFamily: {
                heading: ["var(--font-cormorant)", "serif"],
                mono:    ["var(--font-dm-mono)", "monospace"],
                body:    ["var(--font-lato)", "sans-serif"],
                sans:    ["var(--font-lato)", "sans-serif"],
            },
            animation: {
                'float': 'float 7s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'fade-up': 'fade-up 0.7s ease forwards',
                'marquee': 'marquee 30s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
