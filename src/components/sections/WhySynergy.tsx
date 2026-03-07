"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Settings, TrendingUp } from "lucide-react";

const features = [
    {
        title: "Regulatory Expertise",
        description: "Deep understanding of PESO, FSSAI, and environmental compliance standards.",
        icon: ShieldCheck,
    },
    {
        title: "End-to-End Engineering",
        description: "From concept and feasibility to commissioning and lifecycle support.",
        icon: Settings,
    },
    {
        title: "Scalable Deployment",
        description: "Modular systems designed to grow with your industrial requirements.",
        icon: TrendingUp,
    },
];

export function WhySynergy() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
                            Why Partner with <span className="text-primary">Synergy</span>?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            We combine technical innovation with strict regulatory adherence to deliver industrial solutions that are safe, efficient, and future-proof.
                        </p>
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        {/* Abstract visual representation */}
                        <div className="aspect-square rounded-2xl bg-secondary/20 border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                            <img
                                src="/images/why-synergy.jpg"
                                alt="Synergy Innovation Molecule"
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
