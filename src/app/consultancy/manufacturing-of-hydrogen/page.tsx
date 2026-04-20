import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Zap } from "lucide-react";

export const metadata = {
    title: "Hydrogen Manufacturing Consultancy | Synergy",
    description: "Consultancy for hydrogen project development across major production pathways.",
};

export default function HydrogenConsultancyPage() {
    return (
        <SolutionLayout
            title="Manufacturing of Hydrogen"
            description="Consultancy for hydrogen projects across electrolysis, steam methane reforming, and methane pyrolysis pathways. We support route selection, sizing, utilities, and integration planning for practical deployment."
            icon={Zap}
            backHref="/#consultancy"
            backLabel="Back to Consultancy"
            specs={[
                { label: "Pathways", value: "Electrolysis / SMR / Pyrolysis" },
                { label: "Focus", value: "Route and Sizing" },
                { label: "Utilities", value: "Requirement Assessment" },
                { label: "Integration", value: "Project Planning" },
            ]}
            features={[
                "Technology route review",
                "Utility requirement assessment",
                "System sizing advisory",
                "Renewable integration planning",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We provide consultancy for hydrogen project development across electrolysis, steam methane reforming, and pyrolysis pathways.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Advisory Pathways</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>By Electrolysis: We advise on technology route review, utility requirement assessment, system sizing, and integration with renewable power.</li>
                        <li>By SMR: We support project evaluation where methane reacts with steam to produce hydrogen-rich syngas, including feedstock review and plant concept assessment.</li>
                        <li>By Pyrolysis: We advise on methane pyrolysis where methane is thermally split into hydrogen and solid carbon for lower-carbon project pathways.</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
