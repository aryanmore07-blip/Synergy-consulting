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
            description="Turn environmental liabilities into profitable assets with our advanced anaerobic digestion and gas upgrading systems."
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
            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Overview</h2>
                    <p>
                        We deploy proven technologies to convert organic waste streams into clean energy. From municipal solid waste (MSW) to agricultural residues like napier grass, our systems maximize energy recovery while minimizing environmental impact.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Technology Stack</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Pre-treatment and sorting systems</li>
                        <li>CSTR and Plug-flow digesters</li>
                        <li>Membrane-based gas separation</li>
                        <li>Bio-CNG bottling and dispensing</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
