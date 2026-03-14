"use client";

import { motion } from "framer-motion";

const industries = [
    { name: "Manufacturing", span: "col-span-2" },
    { name: "Municipal Waste", span: "col-span-1" },
    { name: "Chemical Processing", span: "col-span-1" },
    { name: "Food & Beverage", span: "col-span-1" },
    { name: "Industrial Gas", span: "col-span-2" },
    { name: "Construction", span: "col-span-1" },
];

export function IndustriesGrid() {
    return (
        <section
            id="industries"
            className="py-32"
            style={{ background: "var(--surface)" }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
                >
                    <div>
                        <p className="label-mono section-tag mb-4">Industry Verticals</p>
                        <h2
                            className="font-heading"
                            style={{
                                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
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
                        className="font-body text-sm max-w-xs"
                        style={{ color: "var(--foreground-muted)" }}
                    >
                        Delivering compliance-grade, scalable solutions across 6 critical industrial sectors.
                    </p>
                </motion.div>

                {/* Bento grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-px"
                    style={{ background: "var(--border)" }}>
                    {industries.map((industry, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.5 }}
                            className={`group relative flex items-center justify-center p-8 cursor-default transition-all duration-400 ${i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
                                }`}
                            style={{
                                background: "var(--surface-raised)",
                                minHeight: "130px",
                            }}
                        >
                            {/* Hover gold bg */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)",
                                }}
                            />

                            {/* Gold top-border reveal on hover */}
                            <div
                                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: "var(--gold)" }}
                            />

                            <span
                                className="font-heading relative z-10 transition-colors duration-300 group-hover:text-gradient-gold"
                                style={{
                                    fontSize: "1.1rem",
                                    fontWeight: 400,
                                    color: "var(--foreground-muted)",
                                    textAlign: "center",
                                }}
                            >
                                {industry.name}
                            </span>

                            {/* Number tag */}
                            <span
                                className="absolute top-3 right-4 font-mono opacity-20 group-hover:opacity-50 transition-opacity duration-300"
                                style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.1em" }}
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
