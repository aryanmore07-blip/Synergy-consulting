"use client";

import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-background border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                        About <span className="text-primary">Synergy</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We are dedicated to enabling factories, waste handlers, and food manufacturers to transition toward sustainable, regulation-compliant, and scalable green industrial practices.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                    >
                        <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To become India’s leading integrated green industrial transformation partner, setting benchmarks for sustainability and innovation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors"
                    >
                        <h3 className="text-2xl font-bold font-heading mb-4 text-accent">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To enable manufacturers and waste handlers to adopt scalable, commercially viable, and regulation-compliant green technologies while improving operational performance and product quality.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
