import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { BarChart3 } from "lucide-react";

export const metadata = {
    title: "Procurement Cost Optimization | Synergy",
    description: "Specialized market intelligence and procurement benchmarking to ensure cost efficiency and transparency.",
};

export default function ProcurementOptimizationPage() {
    return (
        <SolutionLayout
            title="Procurement Cost Optimization"
            description="We support the supply of on-site gas generation systems for industrial and specialty applications. Our scope covers nitrogen generators, ozone generators, liquid nitrogen systems, and hydrogen generators, along with related equipment packages and accessories."
            icon={BarChart3}
            specs={[
                { label: "Service", value: "Market Intelligence" },
                { label: "Focus", value: "Cost Efficiency" },
                { label: "Confidentiality", value: "NDA Protected" },
                { label: "Output", value: "Benchmarking Report" },
            ]}
            features={[
                "Comprehensive market benchmarking",
                "Vendor neutrality & transparency",
                "Data-driven sourcing insights",
                "Strategic negotiation support",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We support the supply of on-site gas generation systems for industrial and specialty applications. Our scope covers nitrogen generators, ozone generators, liquid nitrogen systems, and hydrogen generators, along with related equipment packages and accessories.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Generator Types</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border-gold)] text-[var(--gold)] flex items-center justify-center font-mono text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--foreground)" }}>Nitrogen Gas Generator</h3>
                                <p>We facilitate supply of nitrogen gas generators for on-site nitrogen production where reliability, safety, and continuity of gas availability are important for plant operations.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border-gold)] text-[var(--gold)] flex items-center justify-center font-mono text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--foreground)" }}>Ozone Generator</h3>
                                <p>We support supply of ozone generation systems and associated gas-preparation equipment for industrial and treatment applications.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[var(--border-gold)] text-[var(--gold)] flex items-center justify-center font-mono text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--foreground)" }}>Liquid Nitrogen and Hydrogen Generators</h3>
                                <p>We support supply of liquid nitrogen generation and handling systems and hydrogen generators designed for on-site generation requirements across industrial and process applications.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Supply Focus</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "On-site generation reliability",
                            "Industrial and specialty gas applications",
                            "Integrated equipment packages",
                            "Flexible scope based on plant needs"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 p-4 border border-[var(--border)] bg-[var(--surface-raised)] rounded-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                                <span className="text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="p-6 border border-[var(--border-gold)] bg-[var(--gold-dim)] rounded-sm">
                    <h2 className="text-xl font-bold font-heading mb-2" style={{ color: "var(--gold)" }}>Hydrogen Generator</h2>
                    <p className="mb-4">
                        Supply support is available for hydrogen generators designed for on-site generation requirements across industrial and process applications.
                    </p>
                    <p className="font-mono text-lg" style={{ color: "var(--foreground)" }}>
                        Scope: <span className="text-[var(--gold)]">On-site Generation Support</span>
                    </p>
                </section>
            </div>
        </SolutionLayout>
    );
}
