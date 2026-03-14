import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Synergy Consulting & Solutions",
  description: "Leading integrated green industrial transformation partner — Hydrogen, Waste-to-Energy, and Industrial Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmMono.variable} ${lato.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
