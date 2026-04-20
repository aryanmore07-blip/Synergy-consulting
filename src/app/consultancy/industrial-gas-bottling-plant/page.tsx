import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Droplets } from "lucide-react";

export const metadata = {
    title: "Industrial Gas Bottling Consultancy | Synergy",
    description: "End-to-end consultancy for industrial gas bottling plants.",
};

export default function GasBottlingConsultancyPage() {
    return (
        <SolutionLayout
            title="Industrial Gas Bottling Plant"
            description="End-to-end advisory for industrial gas bottling facilities, from site assessment and planning to approvals and system configuration. Includes manifold and gas-mixer panel planning for speciality gases."
            icon={Droplets}
            backHref="/#consultancy"
            backLabel="Back to Consultancy"
            specs={[
                { label: "Gases", value: "O2 / N2 / Ar / CO2 / Mixes" },
                { label: "Planning", value: "Layout and Utilities" },
                { label: "Compliance", value: "Approvals and Permissions" },
                { label: "Systems", value: "Manifold and Gas Mixer" },
            ]}
            features={[
                "Land and site suitability review",
                "Plant layout and equipment planning",
                "Approvals and compliance guidance",
                "Bottling and manifold design support",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We provide end-to-end consultancy for industrial gas bottling plants handling oxygen, nitrogen, argon, carbon dioxide, and speciality gas mixtures.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Consultancy Scope</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Land Inspection: We assess site access, safety, utility availability, expansion potential, and suitability for storage and bottling operations.</li>
                        <li>Drawings and Plant Planning: We assist in layout, equipment positioning, utility planning, cylinder flow arrangement, and operational zoning.</li>
                        <li>Permissions and Approvals: We guide clients through project approvals and compliance requirements.</li>
                        <li>Plant Setup and Bottling Systems: We advise on storage, filling, cylinder handling, and system configuration.</li>
                        <li>Manifold Design and Gas Mixer Panels: We support manifold and blending panel planning for speciality mixtures.</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
