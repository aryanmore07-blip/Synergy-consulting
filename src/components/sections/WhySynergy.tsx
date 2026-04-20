"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Settings, TrendingUp } from "lucide-react";

const features = [
    {
        title: "Regulatory Expertise",
        description:
            "Deep understanding of PESO, FSSAI, and environmental compliance standards — so your operations stay ahead of the curve.",
        icon: ShieldCheck,
    },
    {
        title: "End-to-End Engineering",
        description:
            "From concept and feasibility studies to full commissioning and lifecycle support — one partner, every phase.",
        icon: Settings,
    },
    {
        title: "Scalable Deployment",
        description:
            "Modular systems engineered to grow with your industrial requirements without costly overhauls.",
        icon: TrendingUp,
    },
];

export function WhySynergy() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--background)" }}>
            {/* Decorative glow */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 animate-pulse-glow pointer-events-none hidden sm:block"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(181,148,47,0.05) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    zIndex: 0,
                }}
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: text */}
                    <div>
                        <motion.p
                            className="label-mono section-tag mb-5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Why Partner With Us
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="font-heading mb-4"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 4rem)",
                                fontWeight: 300,
                                lineHeight: 1.1,
                            }}
                        >
                            Why Partner with{" "}
                            <span className="text-gradient-gold" style={{ fontWeight: 600 }}>
                                Synergy
                            </span>
                            ?
                        </motion.h2>

                        {/* Animated gold rule */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "4rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-px mb-6 md:mb-8"
                            style={{ background: "var(--gold)" }}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-body mb-10 text-sm md:text-base"
                            style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                        >
                            We combine technical innovation with strict regulatory adherence to
                            deliver industrial solutions that are safe, efficient, and future-proof
                            — built for India's industrial evolution.
                        </motion.p>

                        {/* Feature items */}
                        <div className="space-y-7">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className="feature-item"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <feature.icon
                                            className="w-4 h-4 flex-shrink-0"
                                            style={{ color: "var(--gold)" }}
                                            strokeWidth={1.5}
                                        />
                                        <h4
                                            className="font-heading"
                                            style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontWeight: 600 }}
                                        >
                                            {feature.title}
                                        </h4>
                                    </div>
                                    <p
                                        className="font-body text-sm"
                                        style={{ color: "var(--foreground-muted)", lineHeight: 1.8 }}
                                    >
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image — shown on lg+, stacked below on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative hidden lg:block"
                    >
                        <div
                            className="relative overflow-hidden"
                            style={{
                                clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                                aspectRatio: "4/5",
                            }}
                        >
                            <img
                                src="/images/why-synergy.png"
                                alt="Synergy Innovation"
                                className="object-cover w-full h-full"
                                style={{ transform: "scale(1.05)" }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(135deg, rgba(181,148,47,0.10) 0%, transparent 60%)",
                                }}
                            />
                        </div>

                        {/* Decorative corner frames */}
                        <div
                            className="absolute -top-4 -right-4 w-20 h-20 border-t border-r pointer-events-none"
                            style={{ borderColor: "var(--gold)", opacity: 0.4 }}
                        />
                        <div
                            className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l pointer-events-none"
                            style={{ borderColor: "var(--gold)", opacity: 0.4 }}
                        />
                    </motion.div>

                    {/* Mobile image — no clip path, simple rounded */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative lg:hidden"
                    >
                        <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "16/9" }}>
                            <img
                                src="/images/why-synergy.png"
                                alt="Synergy Innovation"
                                className="object-cover w-full h-full"
                            />
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(135deg, rgba(181,148,47,0.08) 0%, transparent 60%)" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
