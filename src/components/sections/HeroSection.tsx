"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stats = [
    { value: "10+", label: "Projects" },
    { value: "4", label: "Verticals" },
    { value: "Pan-India", label: "Reach" },
];

export function HeroSection() {
    const cursorRef = useRef<HTMLSpanElement>(null);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Industrial Innovation"
                    fill
                    className="object-cover"
                    priority
                    style={{ opacity: 0.35 }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(10,11,15,0.6) 60%, rgba(10,11,15,0.97) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(10,11,15,0.5) 0%, transparent 30%, rgba(10,11,15,0.9) 85%, #0A0B0F 100%)",
                    }}
                />
            </div>

            {/* Animated glow blobs — hidden on smallest screens to avoid scroll issues */}
            <div
                className="absolute rounded-full animate-float hidden sm:block"
                style={{
                    width: "clamp(200px, 40vw, 520px)",
                    height: "clamp(200px, 40vw, 520px)",
                    top: "10%",
                    left: "-8%",
                    background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    animationDelay: "0s",
                    animationDuration: "9s",
                    zIndex: 1,
                }}
            />
            <div
                className="absolute rounded-full animate-float hidden sm:block"
                style={{
                    width: "clamp(150px, 30vw, 400px)",
                    height: "clamp(150px, 30vw, 400px)",
                    bottom: "15%",
                    right: "-5%",
                    background: "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    animationDelay: "3s",
                    animationDuration: "11s",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10 text-center pt-24 pb-8">
                {/* Section tag */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="label-mono mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center"
                >
                    <span className="inline-block w-5 sm:w-8 h-px" style={{ background: "var(--gold)" }} />
                    Green Industrial Transformation
                    <span className="inline-block w-5 sm:w-8 h-px" style={{ background: "var(--gold)" }} />
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25 }}
                    className="font-heading text-cream mb-5 sm:mb-6"
                    style={{
                        fontSize: "clamp(2.6rem, 8vw, 7.5rem)",
                        fontWeight: 300,
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                    }}
                >
                    Powering the Future
                    <br className="hidden xs:block" />
                    {" "}of{" "}
                    <span className="text-gradient-gold" style={{ fontWeight: 600 }}>
                        Green Industry
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="font-mono text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-8 sm:mb-10 px-2"
                    style={{ color: "var(--foreground-muted)", letterSpacing: "0.04em", lineHeight: 1.8 }}
                >
                    Your integrated partner for Hydrogen Systems, Waste-to-Energy &amp; Industrial Innovation
                    <span
                        ref={cursorRef}
                        className="inline-block w-px h-3 sm:h-4 ml-1 align-middle"
                        style={{ background: "var(--gold)", animation: "blink 1.1s step-end infinite" }}
                    />
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-20 px-4"
                >
                    <a href="/#about" className="btn-gold w-full sm:w-auto text-center">
                        Request Consultation
                    </a>
                    <a href="/#solutions" className="btn-ghost w-full sm:w-auto text-center">
                        Explore Solutions
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="grid grid-cols-3 max-w-xs sm:max-w-sm md:max-w-xl mx-auto border-t"
                    style={{ borderColor: "rgba(201,168,76,0.2)" }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="py-4 sm:py-6 flex flex-col items-center gap-1"
                            style={{
                                borderRight:
                                    i < stats.length - 1
                                        ? "1px solid rgba(201,168,76,0.2)"
                                        : "none",
                            }}
                        >
                            <span
                                className="font-heading text-gradient-gold"
                                style={{ fontSize: "clamp(1.2rem, 4vw, 1.8rem)", fontWeight: 600 }}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="font-mono text-center"
                                style={{
                                    fontSize: "clamp(0.5rem, 1.5vw, 0.62rem)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--foreground-muted)",
                                }}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator — hidden on small screens */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
                style={{ zIndex: 10 }}
            >
                <span
                    className="font-mono"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--foreground-muted)", textTransform: "uppercase" }}
                >
                    Scroll
                </span>
                <div
                    className="w-px h-10 relative overflow-hidden"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                >
                    <div
                        className="absolute top-0 left-0 w-full"
                        style={{ height: "40%", background: "var(--gold)", animation: "float 2s ease-in-out infinite" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
