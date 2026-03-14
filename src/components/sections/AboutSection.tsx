"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-32 relative overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* Gold glow left */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <p className="label-mono section-tag mb-4">Our Identity</p>
                    <h2
                        className="font-heading mx-auto"
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                            fontWeight: 300,
                            lineHeight: 1.1,
                            maxWidth: "700px",
                        }}
                    >
                        About{" "}
                        <span className="text-gradient-gold" style={{ fontWeight: 600 }}>
                            Synergy
                        </span>
                    </h2>

                    {/* Animated divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="h-px mx-auto mt-8 mb-8"
                        style={{ background: "var(--gold)" }}
                    />

                    <p
                        className="font-body max-w-3xl mx-auto text-sm md:text-base"
                        style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                    >
                        We are dedicated to enabling factories, waste handlers, and food
                        manufacturers to transition toward sustainable, regulation-compliant,
                        and scalable green industrial practices — for a stronger industrial India.
                    </p>
                </motion.div>

                {/* Vision / Mission — horizontal banner cards */}
                <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="group relative flex flex-col p-10 transition-all duration-400"
                        style={{ background: "var(--surface-raised)" }}
                    >
                        {/* Gold left accent bar */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500"
                            style={{ background: "var(--gold)", opacity: 0.6 }}
                        />
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "var(--gold)", boxShadow: "0 0 12px var(--gold)" }}
                        />

                        <p
                            className="font-mono mb-6"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Our Vision
                        </p>
                        <h3
                            className="font-heading mb-4"
                            style={{ fontSize: "2rem", fontWeight: 500, lineHeight: 1.2 }}
                        >
                            India's Leading Green Industrial Partner
                        </h3>
                        <p
                            className="font-body text-sm"
                            style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                        >
                            To become India's leading integrated green industrial transformation
                            partner, setting benchmarks for sustainability and innovation across
                            every sector we serve.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className="group relative flex flex-col p-10 transition-all duration-400"
                        style={{ background: "var(--surface-raised)" }}
                    >
                        {/* Teal left accent bar */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500"
                            style={{ background: "var(--teal)", opacity: 0.6 }}
                        />
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "var(--teal)", boxShadow: "0 0 12px var(--teal)" }}
                        />

                        <p
                            className="font-mono mb-6"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--teal)", textTransform: "uppercase" }}
                        >
                            Our Mission
                        </p>
                        <h3
                            className="font-heading mb-4"
                            style={{ fontSize: "2rem", fontWeight: 500, lineHeight: 1.2 }}
                        >
                            Enabling Scalable Green Technology Adoption
                        </h3>
                        <p
                            className="font-body text-sm"
                            style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                        >
                            To enable manufacturers and waste handlers to adopt scalable,
                            commercially viable, and regulation-compliant green technologies —
                            while improving operational performance and product quality.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
