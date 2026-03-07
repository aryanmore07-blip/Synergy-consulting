"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Industrial Innovation"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight">
                        Powering the Future of <br />
                        <span className="text-primary">Green Industry</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Your integrated partner for Hydrogen Systems, Waste-to-Energy, and Industrial Innovation.
                        Scalable. Sustainable. Future-Ready.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                            Request Consultation
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
                            Explore Solutions
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
