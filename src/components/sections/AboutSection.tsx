"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-20 md:py-32 relative overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* Gold glow */}
            <div
                className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none animate-pulse-glow hidden sm:block"
                style={{
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(181,148,47,0.05) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <p className="label-mono section-tag mb-4">Our Identity</p>
                    <h2
                        className="font-heading mx-auto"
                        style={{
                            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                            fontWeight: 300,
                            lineHeight: 1.1,
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
                        whileInView={{ width: "3.5rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="h-px mx-auto mt-6 mb-6 md:mb-8"
                        style={{ background: "var(--gold)" }}
                    />

                    <p
                        className="font-body max-w-3xl mx-auto text-sm md:text-base"
                        style={{ color: "var(--foreground-muted)", lineHeight: 1.85 }}
                    >
                        We are dedicated to enabling factories, waste handlers, and food
                        manufacturers to transition toward sustainable, regulation-compliant,
                        and scalable green industrial practices.
                    </p>
                </motion.div>

                {/* Vision / Mission */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-px"
                    style={{ background: "var(--border)" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="group relative flex flex-col p-7 sm:p-10 transition-all duration-400"
                        style={{ background: "var(--surface-raised)" }}
                    >
                        {/* Gold left accent bar */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5"
                            style={{ background: "var(--gold)", opacity: 0.6 }}
                        />
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "var(--gold)", boxShadow: "2px 0 8px rgba(181,148,47,0.2)" }}
                        />

                        <p
                            className="font-mono mb-5"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Our Vision
                        </p>
                        <h3
                            className="font-heading mb-4"
                            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 500, lineHeight: 1.2 }}
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
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        className="group relative flex flex-col p-7 sm:p-10 transition-all duration-400"
                        style={{ background: "var(--surface-raised)" }}
                    >
                        {/* Teal left accent bar */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5"
                            style={{ background: "var(--gold)", opacity: 0.6 }}
                        />
                        <div
                            className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "var(--gold)", boxShadow: "2px 0 8px rgba(11,126,115,0.2)" }}
                        />

                        <p
                            className="font-mono mb-5"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Our Mission
                        </p>
                        <h3
                            className="font-heading mb-4"
                            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 500, lineHeight: 1.2 }}
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
