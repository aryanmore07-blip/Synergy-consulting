"use client";

import { motion } from "framer-motion";

const industries = [
    "Manufacturing",
    "Municipal Waste",
    "Chemical Processing",
    "Food & Beverage",
    "Industrial Gas",
    "Construction",
];

export function IndustriesGrid() {
    return (
        <section
            id="industries"
            className="py-20 md:py-32"
            style={{ background: "var(--surface)" }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4"
                >
                    <div>
                        <p className="label-mono section-tag mb-4">Industry Verticals</p>
                        <h2
                            className="font-heading"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 4rem)",
                                fontWeight: 300,
                                lineHeight: 1.1,
                            }}
                        >
                            Industries We{" "}
                            <span className="text-gradient-gold" style={{ fontWeight: 600 }}>
                                Serve
                            </span>
                        </h2>
                    </div>
                    <p
                        className="font-body text-sm md:max-w-xs"
                        style={{ color: "var(--foreground-muted)" }}
                    >
                        Delivering compliance-grade, scalable solutions across 6 critical industrial sectors.
                    </p>
                </motion.div>

                {/* Grid — 2 cols on mobile, 3 cols on md+ */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px"
                    style={{ background: "var(--border)" }}
                >
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.5 }}
                            className="group relative flex items-center justify-center p-5 sm:p-8 cursor-default transition-all duration-300"
                            style={{
                                background: "var(--surface-raised)",
                                minHeight: "90px",
                            }}
                        >
                            {/* Hover gold bg */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)",
                                }}
                            />

                            {/* Gold top-border reveal */}
                            <div
                                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: "var(--gold)" }}
                            />

                            <span
                                className="font-heading relative z-10 transition-colors duration-300 text-center"
                                style={{
                                    fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                                    fontWeight: 400,
                                    color: "var(--foreground-muted)",
                                }}
                            >
                                {industry}
                            </span>

                            {/* Number tag */}
                            <span
                                className="absolute top-2 right-3 font-mono opacity-20 group-hover:opacity-50 transition-opacity duration-300 hidden sm:block"
                                style={{ fontSize: "0.55rem", color: "var(--gold)", letterSpacing: "0.1em" }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
