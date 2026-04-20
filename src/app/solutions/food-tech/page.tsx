import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Utensils } from "lucide-react";

export const metadata = {
    title: "Food Technology | Synergy",
    description: "Advanced packaging and anti-caking solutions for the food industry.",
};

export default function FoodTechPage() {
    return (
        <SolutionLayout
            title="Food & Beverage Technology"
            description="We support the supply of PEM fuel cell stacks and PEM fuel cell systems for clean energy and mobility applications. Our scope can cover standalone stacks, integrated system packages, and supporting components depending on project scale and application requirement."
            icon={Utensils}
            specs={[
                { label: "Compliance", value: "FSSAI / Codex" },
                { label: "Shelf Life", value: "Extended" },
                { label: "Packaging", value: "MAP / Active" },
                { label: "Application", value: "Dairy / Spices" },
            ]}
            features={[
                "Anti-caking agents for powders",
                "Modified Atmosphere Packaging (MAP)",
                "Oxygen barrier films",
                "Texture stabilization systems",
            ]}
        >
            <div className="space-y-8" style={{ color: "var(--foreground-muted)" }}>
                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>Overview</h2>
                    <p>
                        We support the supply of PEM fuel cell stacks and PEM fuel cell systems for clean energy and mobility applications. Our scope can cover standalone stacks, integrated system packages, and supporting components depending on project scale and application requirement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading mb-4" style={{ color: "var(--foreground)" }}>PEM Offerings</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-4 rounded-lg" style={{ background: "var(--surface)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>PEM Fuel Cell Stack</h4>
                            <p className="text-sm">We facilitate supply of PEM fuel cell stacks, which form the core electrochemical unit for converting hydrogen into electrical power, aligned with application-specific output and integration requirements.</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ background: "var(--surface)" }}>
                            <h4 className="font-bold mb-2" style={{ color: "var(--foreground)" }}>PEM Fuel Cell System</h4>
                            <p className="text-sm">We also support supply of integrated PEM fuel cell systems, including stack-based packaged units with associated control, thermal, and power management elements suited to end-use deployment.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SolutionLayout>
    );
}
