import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Droplets } from "lucide-react";

export const metadata = {
    title: "Industrial Additives | Synergy",
    description: "Performance-enhancing additives for paints, construction, and materials.",
};

export default function AdditivesPage() {
    return (
        <SolutionLayout
            title="Industrial Additives"
            description="We support the supply of gas bottling plant systems, cryogenic equipment, filling accessories, gas mixing systems, and control instruments for industrial gas operations. The supply scope can include complete sections or individual equipment items depending on plant configuration."
            icon={Droplets}
            specs={[
                { label: "Viscosity Control", value: "High Precision" },
                { label: "Durability", value: "+40% Lifespan" },
                { label: "Crack Resistance", value: "Enhanced" },
                { label: "Settling", value: "Anti-Settling Agents" },
            ]}
            features={[
                "Custom formulation development",
                "Bio-based sustainable options",
                "Consistent batch-to-batch quality",
                "Technical application support",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We support the supply of gas bottling plant systems, cryogenic equipment, filling accessories, gas mixing systems, and control instruments for industrial gas operations. The supply scope can include complete sections and individual equipment items depending on plant configuration.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Equipment Scope</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-4 rounded-lg" style={{ background: "var(--surface)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>Cryogenic Tanks and Cryogenic Pumps</h4>
                            <p className="text-sm">Supply support includes cryogenic storage tanks and pumping systems for safe handling and transfer of industrial gases in liquid form.</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: "var(--surface)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>Gas Mixers, Vaporisers, Manifold Systems, Cylinders, and Controls</h4>
                            <p className="text-sm">We facilitate supply of gas mixers, vaporisers, manifold systems, vacuum equipment, cylinders, regulators, flow meters, and mass flow meters required for gas transfer, filling operations, and controlled distribution.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SolutionLayout>
    );
}
