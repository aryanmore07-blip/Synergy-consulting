import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Recycle } from "lucide-react";

export const metadata = {
    title: "Waste to Energy Consultancy | Synergy",
    description: "Consultancy for integrated waste-to-energy projects.",
};

export default function WasteToEnergyConsultancyPage() {
    return (
        <SolutionLayout
            title="Waste to Energy"
            description="Consultancy for integrated Waste-to-Energy systems that convert organic feedstock into renewable gas, hydrogen, and carbon co-products. Coverage includes biogas generation, gas upgrading, and downstream clean-fuel pathways."
            icon={Recycle}
            backHref="/#consultancy"
            backLabel="Back to Consultancy"
            specs={[
                { label: "Feedstock", value: "MSW / Agri-Waste" },
                { label: "Biogas Path", value: "Anaerobic Digestion" },
                { label: "Gas Upgrading", value: "Bio-Methane / BioCBG" },
                { label: "Co-Product", value: "Black Carbon" },
            ]}
            features={[
                "Biogas generation advisory",
                "Bio CO2 recovery and integration",
                "Biogas upgrading to Bio-Methane",
                "Hydrogen and black carbon pathways",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We provide consultancy for integrated Waste-to-Energy projects that convert organic waste into renewable gas, clean hydrogen, and value-added carbon products.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Consultancy Scope</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Biogas: We advise on biogas generation from MSW, Napier grass, and agricultural waste through anaerobic digestion.</li>
                        <li>Bio CO2: We support recovery of Bio CO2 during biogas purification and upgrading.</li>
                        <li>Bio Methane: We provide consultancy for upgrading biogas into high-purity biomethane or BioCBG for fuel and industrial use.</li>
                        <li>Green Hydrogen: We advise on manufacture of green hydrogen from biomethane or BioCBG using methane pyrolysis pathways.</li>
                        <li>Black Carbon: We also provide consultancy for carbon black generation as a co-product of methane pyrolysis.</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
