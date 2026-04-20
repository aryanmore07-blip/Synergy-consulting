import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { BarChart3 } from "lucide-react";

export const metadata = {
    title: "Procurement Cost Cutting Consultancy | Synergy",
    description: "Targeted procurement consultancy to achieve practical and sustainable savings.",
};

export default function ProcurementConsultancyPage() {
    return (
        <SolutionLayout
            title="Cost Cutting in Procurement"
            description="Targeted procurement consultancy to validate current buying patterns and identify stronger supply options across engineering goods, chemicals, gases, and raw materials. Focused on practical savings without compromising quality or continuity."
            icon={BarChart3}
            backHref="/#consultancy"
            backLabel="Back to Consultancy"
            specs={[
                { label: "Coverage", value: "Engineering / Chemicals / Gases" },
                { label: "Method", value: "Verification and Benchmarking" },
                { label: "Outcome", value: "Practical Cost Savings" },
                { label: "Priority", value: "Quality and Continuity" },
            ]}
            features={[
                "Current purchase verification",
                "Competitive source identification",
                "Market and pricing benchmark analysis",
                "Savings-focused procurement guidance",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We provide targeted procurement research services to verify present purchases and identify competitive supply sources for meaningful cost savings across engineering goods, chemicals, gases, and related raw materials.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Consultancy Scope</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Present Purchase Verification: We review current procurement patterns, items, suppliers, and price points.</li>
                        <li>Source Identification: We conduct market research to identify more competitive and reliable supply sources.</li>
                        <li>Cost Benchmarking: We compare supplier options, market prices, and sourcing terms to highlight realistic areas for savings.</li>
                        <li>Meaningful Savings Focus: We deliver practical savings guidance without compromising quality or supply continuity.</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
