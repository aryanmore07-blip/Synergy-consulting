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
                    DEFAULT: "#B5942F",
                    light: "#C9A84C",
                    dim: "rgba(181,148,47,0.08)",
                },
                teal: {
                    DEFAULT: "#0B7E73",
                    dim: "rgba(11,126,115,0.08)",
                },
                // Keep legacy for any lingering class usage
                primary: {
                    DEFAULT: "#B5942F",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F5F4F1",
                    foreground: "#1A1A1A",
                },
                accent: {
                    DEFAULT: "#0B7E73",
                    foreground: "#FFFFFF",
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
