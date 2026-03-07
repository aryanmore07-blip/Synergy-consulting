


import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface SolutionLayoutProps {
    title: string;
    description: string;
    icon: React.ElementType;
    specs: { label: string; value: string }[];
    features: string[];
    children: React.ReactNode;
}

export function SolutionLayout({
    title,
    description,
    icon: Icon,
    specs,
    features,
    children,
}: SolutionLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Header */}
            <section className="bg-secondary py-20 border-b border-white/5">
                <div className="container px-4 md:px-6 mx-auto">
                    <Link href="/#solutions" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="p-4 rounded-xl bg-primary/10 text-primary">
                            <Icon className="w-12 h-12" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container px-4 md:px-6 mx-auto py-12 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {children}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Key Features */}
                    <div className="bg-secondary/50 rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold font-heading text-white mb-4">Key Features</h3>
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specifications */}
                    <div className="bg-secondary/50 rounded-xl p-6 border border-white/5">
                        <h3 className="text-lg font-bold font-heading text-white mb-4">Technical Specs</h3>
                        <div className="space-y-4">
                            {specs.map((spec, index) => (
                                <div key={index} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                    <span className="text-gray-400">{spec.label}</span>
                                    <span className="text-white font-medium text-right">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary rounded-xl p-6 text-center">
                        <h3 className="text-lg font-bold font-heading text-white mb-2">Ready to implement?</h3>
                        <p className="text-white/80 text-sm mb-6">
                            Get in touch with our engineering team for a custom proposal.
                        </p>
                        <Button className="w-full bg-white text-primary hover:bg-gray-100">
                            Request Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
