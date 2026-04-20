import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface SolutionLayoutProps {
    title: string;
    description: string;
    icon: React.ElementType;
    specs: { label: string; value: string }[];
    features: string[];
    children: React.ReactNode;
    backHref?: string;
    backLabel?: string;
}

export function SolutionLayout({
    title,
    description,
    icon: Icon,
    specs,
    features,
    children,
    backHref = "/#solutions",
    backLabel = "Back to Solutions",
}: SolutionLayoutProps) {
    return (
        <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
            {/* Hero Header */}
            <section
                className="py-24 sm:py-28 border-b relative overflow-hidden"
                style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                }}
            >
                {/* Gold top accent */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(to right, transparent, var(--gold) 30%, var(--gold) 70%, transparent)", opacity: 0.5 }}
                />

                <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 mb-10 sm:mb-12 font-mono transition-colors duration-200"
                        style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--foreground-muted)", textTransform: "uppercase" }}
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        {backLabel}
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div
                            className="p-4 sm:p-5 border"
                            style={{ borderColor: "var(--border-gold)", background: "var(--gold-dim)", color: "var(--gold)" }}
                        >
                            <Icon className="w-10 h-10" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h1
                                className="font-heading mb-4"
                                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300 }}
                            >
                                {title}
                            </h1>
                            <p
                                className="font-body"
                                style={{ color: "var(--foreground-muted)", maxWidth: "600px", lineHeight: 1.8 }}
                            >
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-12 sm:py-16 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {children}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Key Features */}
                    <div
                        className="p-6 border"
                        style={{ background: "var(--surface-raised)", borderColor: "var(--border)" }}
                    >
                        <p
                            className="font-mono mb-5"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Key Features
                        </p>
                        <ul className="space-y-3">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 font-body text-sm break-words" style={{ color: "var(--foreground-muted)" }}>
                                    <span
                                        className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                                        style={{ background: "var(--gold)" }}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical Specs */}
                    <div
                        className="p-6 border"
                        style={{ background: "var(--surface-raised)", borderColor: "var(--border)" }}
                    >
                        <p
                            className="font-mono mb-5"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Technical Specs
                        </p>
                        <div className="space-y-4">
                            {specs.map((spec, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm pb-3 border-b last:border-0 last:pb-0"
                                    style={{ borderColor: "var(--border)" }}
                                >
                                    <span className="font-mono shrink-0" style={{ fontSize: "0.7rem", color: "var(--foreground-muted)" }}>{spec.label}</span>
                                    <span className="font-body font-medium text-left sm:text-right min-w-0 break-words" style={{ color: "var(--foreground)" }}>{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className="p-6 text-center relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, rgba(181,148,47,0.10) 0%, rgba(181,148,47,0.04) 100%)",
                            border: "1px solid var(--border-gold)",
                        }}
                    >
                        <p
                            className="font-mono mb-2"
                            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}
                        >
                            Ready to implement?
                        </p>
                        <h3
                            className="font-heading mb-4"
                            style={{ fontSize: "1.5rem", fontWeight: 500 }}
                        >
                            Get a Custom Proposal
                        </h3>
                        <p
                            className="font-body text-sm mb-6"
                            style={{ color: "var(--foreground-muted)" }}
                        >
                            Our engineering team will tailor a solution to your requirements.
                        </p>
                        <a href="/#about" className="btn-gold w-full block">
                            Request Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
