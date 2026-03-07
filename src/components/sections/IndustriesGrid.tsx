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
        <section id="industries" className="py-24 bg-secondary border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-12">
                    Industries We Serve
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-6 rounded-lg bg-background border border-white/5 hover:border-primary/50 transition-colors flex items-center justify-center text-gray-300 font-medium hover:text-primary cursor-default"
                        >
                            {industry}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
