import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Utensils } from "lucide-react";

export const metadata = {
    title: "Sweets Manufacturing Consultancy | Synergy",
    description: "Consultancy for setting up Namkeen and Mithai manufacturing units.",
};

export default function SweetsConsultancyPage() {
    return (
        <SolutionLayout
            title="Sweets Manufacturing"
            description="Consultancy for establishing Namkeen and Mithai units with the right product mix, process standardization, and efficient plant setup. We also guide packaging strategy for market readiness and shelf performance."
            icon={Utensils}
            backHref="/#consultancy"
            backLabel="Back to Consultancy"
            specs={[
                { label: "Category", value: "Namkeen / Mithai" },
                { label: "Focus", value: "Recipe and Process" },
                { label: "Packaging", value: "Design and Shelf-Life" },
                { label: "Setup", value: "Machinery and Utilities" },
            ]}
            features={[
                "Product mix strategy",
                "Recipe standardization support",
                "Packaging selection and design",
                "Plant setup and process planning",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We provide consultancy for setting up Namkeen and Mithai manufacturing units from product selection through recipe development, packaging, and plant setup.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Consultancy Scope</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Product Selection: We help identify the right product mix based on market demand, operational feasibility, shelf-life, and positioning strategy.</li>
                        <li>Recipe Development: We support recipe and process standardization for consistent commercial production quality.</li>
                        <li>Design and Packaging: We advise on packaging selection and design for shelf appeal, protection, and handling efficiency.</li>
                        <li>Plant Setup: We assist with machinery selection, process flow, utility arrangement, and operational setup.</li>
                    </ul>
                </section>
            </div>
        </SolutionLayout>
    );
}
