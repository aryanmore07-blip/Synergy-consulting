"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Droplets, Recycle, Utensils } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        title: "Hydrogen & Clean Energy",
        description: "End-to-end hydrogen generation, storage, and refueling infrastructure.",
        icon: Zap,
        href: "/solutions/hydrogen",
        color: "text-primary",
    },
    {
        title: "Industrial Additives",
        description: "Performance-enhancing additives for paints, construction, and materials.",
        icon: Droplets,
        href: "/solutions/additives",
        color: "text-blue-400",
    },
    {
        title: "Waste-to-Energy",
        description: "Converting agricultural and municipal waste into renewable energy.",
        icon: Recycle,
        href: "/solutions/waste-to-energy",
        color: "text-accent",
    },
    {
        title: "Food & Beverage Tech",
        description: "Advanced packaging and anti-caking solutions for the food industry.",
        icon: Utensils,
        href: "/solutions/food-tech",
        color: "text-orange-400",
    },
];

// ... imports

export function SolutionsOverview() {
    return (
        <section id="solutions" className="py-24 bg-secondary text-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Integrated Industrial Solutions
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We deliver cutting-edge technology across critical industrial verticals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <div className={`p-3 rounded-lg bg-white/5 w-fit mb-4 ${solution.color}`}>
                                <solution.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-2">
                                {solution.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6">
                                {solution.description}
                            </p>

                            <Button asChild variant="link" className="p-0 h-auto text-primary group-hover:text-white transition-colors">
                                <Link href={solution.href} className="flex items-center gap-2">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
