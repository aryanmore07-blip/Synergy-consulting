import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Hydrogen Systems | Synergy",
    description: "End-to-end hydrogen generation, storage, and refueling infrastructure.",
};

export default function HydrogenPage() {
    return (
        <SolutionLayout
            title="Hydrogen & Clean Energy"
            description="We support the supply of hydrogen plant systems, skids, and selected equipment packages across major hydrogen production routes. Our offering is aligned with project requirements for conventional as well as emerging hydrogen technologies."
            icon={Zap}
            specs={[
                { label: "Purity", value: ">99.999%" },
                { label: "Pressure", value: "30-700 bar" },
                { label: "Capacity", value: "10kW - 20MW" },
                { label: "Efficiency", value: "75-80%" },
            ]}
            features={[
                "Modular skid-mounted design",
                "SCADA integration for remote monitoring",
                "PESO compliant storage systems",
                "Automated leak detection and safety interlocks",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We support the supply of hydrogen plant systems, skids, and selected equipment packages across major hydrogen production routes. Our offering is aligned with project requirements for conventional as well as emerging hydrogen technologies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Production Routes</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-4 rounded-lg" style={{ background: "var(--surface)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>SMR Plant</h4>
                            <p className="text-sm">Supply support for steam methane reforming plants includes process packages and associated system components required for methane-to-hydrogen conversion.</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: "var(--surface)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>Electrolysis and Pyrolysis Plants</h4>
                            <p className="text-sm">We support supply for electrolysis-based hydrogen plants and methane pyrolysis-based hydrogen sections, including equipment packages required for hydrogen generation and carbon co-product integration.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SolutionLayout>
    );
}
