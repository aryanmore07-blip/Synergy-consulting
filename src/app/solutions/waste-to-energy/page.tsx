import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Recycle } from "lucide-react";

export const metadata = {
    title: "Waste to Energy | Synergy",
    description: "Converting agricultural and municipal waste into renewable energy.",
};

export default function WasteToEnergyPage() {
    return (
        <SolutionLayout
            title="Waste-to-Energy"
            description="We support the supply of complete plants, plant modules, and critical equipment related to waste-to-energy applications. Our offering covers systems for biogas generation, biogas refining, CO2 recovery, CNG or CBG production, and hydrogen and carbon black plant configurations linked to renewable gas processing."
            icon={Recycle}
            specs={[
                { label: "Feedstock", value: "MSW / Agri-Waste" },
                { label: "Output", value: "Bio-CNG / Power" },
                { label: "Methane Rec.", value: ">95%" },
                { label: "CO2 Purity", value: "Food Grade Capable" },
            ]}
            features={[
                "High-efficiency anaerobic digesters",
                "Biogas upgrading systems",
                "Integrated fertilizer recovery",
                "Remote process monitoring",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We support the supply of complete plants, plant modules, and critical equipment related to waste-to-energy applications. Our offering covers systems for biogas generation, biogas refining, CO2 recovery, CNG or CBG production, and advanced hydrogen and carbon black plant configurations linked to renewable gas processing.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Technology Stack</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Bio-Gas Plant: Supply support includes major process units, storage systems, handling systems, and associated balance-of-plant requirements for converting organic feedstock into renewable gas.</li>
                        <li>Refining of Bio-Gas and CO2 Plant: We support equipment and system components for biogas purification, upgrading, gas-cleaning, gas-conditioning, and integrated CO2 separation, recovery, handling, and storage.</li>
                        <li>CNG or CBG Plant: Our supply scope includes plant systems and major equipment for compression, handling, and transfer of CNG or CBG streams for industrial or mobility applications.</li>
                        <li>Hydrogen and Black Carbon Plant: We support plant and equipment supply for hydrogen production and carbon black recovery in methane-based conversion systems.</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
