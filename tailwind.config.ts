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
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#007BFF", // Hydrogen Blue
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#2C2F33", // Soft Steel Grey
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#16A34A", // Eco Green
                    foreground: "#FFFFFF",
                },
                "industrial-charcoal": "#111417",
                "off-white": "#F4F4F4",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
