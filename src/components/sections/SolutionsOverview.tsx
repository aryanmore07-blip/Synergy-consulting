"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Recycle, Utensils } from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        index: "01",
        title: "Hydrogen & Clean Energy",
        description:
            "End-to-end hydrogen generation, storage, and refueling infrastructure for industrial and mobility applications.",
        icon: Zap,
        href: "/solutions/hydrogen",
        accentColor: "var(--gold)",
    },
    {
        index: "02",
        title: "Industrial Additives",
        description:
            "Performance-enhancing additives for paints, construction, and advanced materials that meet international standards.",
        icon: Droplets,
        href: "/solutions/additives",
        accentColor: "var(--teal)",
    },
    {
        index: "03",
        title: "Waste-to-Energy",
        description:
            "Converting agricultural and municipal waste streams into profitable, renewable energy — at scale.",
        icon: Recycle,
        href: "/solutions/waste-to-energy",
        accentColor: "var(--gold)",
    },
    {
        index: "04",
        title: "Food & Beverage Tech",
        description:
            "Advanced packaging technologies and anti-caking solutions for the modern food industry.",
        icon: Utensils,
        href: "/solutions/food-tech",
        accentColor: "var(--teal)",
    },
];

export function SolutionsOverview() {
    return (
        <section
            id="solutions"
            className="py-32 relative overflow-hidden"
            style={{ background: "var(--surface)" }}
        >
            {/* Decorative background line */}
            <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
                    opacity: 0.15,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <p className="label-mono mb-4 section-tag">Our Solutions</p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2
                            className="font-heading"
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                                fontWeight: 300,
                                lineHeight: 1.1,
                                maxWidth: "600px",
                            }}
                        >
                            Integrated Industrial{" "}
                            <span className="text-gradient-gold" style={{ fontWeight: 600 }}>
                                Solutions
                            </span>
                        </h2>
                        <p
                            className="max-w-xs font-body text-sm"
                            style={{ color: "var(--foreground-muted)" }}
                        >
                            Cutting-edge technology across critical industrial verticals — engineered for scale and compliance.
                        </p>
                    </div>

                    {/* Gold rule */}
                    <div
                        className="mt-8 h-px w-full"
                        style={{
                            background:
                                "linear-gradient(to right, var(--gold), transparent)",
                            opacity: 0.3,
                        }}
                    />
                </motion.div>

                {/* Solution cards — tall vertical panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
                    style={{ background: "var(--border)" }}>
                    {solutions.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="card-dark group relative flex flex-col p-8 pt-12 border-0"
                            style={{
                                background: "var(--surface-raised)",
                                minHeight: "360px",
                            }}
                        >
                            {/* Top accent line */}
                            <div
                                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500"
                                style={{
                                    background: s.accentColor,
                                    opacity: 0.5,
                                }}
                            />
                            <div
                                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500 opacity-0 group-hover:opacity-100"
                                style={{ background: s.accentColor, boxShadow: `0 0 12px ${s.accentColor}` }}
                            />

                            {/* Number index */}
                            <span
                                className="font-mono mb-8 block"
                                style={{
                                    fontSize: "0.68rem",
                                    color: s.accentColor,
                                    letterSpacing: "0.15em",
                                    opacity: 0.7,
                                }}
                            >
                                {s.index}
                            </span>

                            {/* Icon */}
                            <div className="mb-6" style={{ color: s.accentColor }}>
                                <s.icon className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3
                                className="font-heading mb-4"
                                style={{ fontSize: "1.5rem", fontWeight: 500 }}
                            >
                                {s.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="font-body text-sm flex-1"
                                style={{ color: "var(--foreground-muted)", lineHeight: 1.75 }}
                            >
                                {s.description}
                            </p>

                            {/* Learn more link */}
                            <Link
                                href={s.href}
                                className="mt-8 inline-flex items-center gap-2 font-mono text-xs group-hover:gap-3 transition-all duration-300"
                                style={{ color: s.accentColor, letterSpacing: "0.1em" }}
                            >
                                Learn more{" "}
                                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
