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
            description="Next-generation rheology modifiers, dispersants, and performance additives for the construction and coatings industries."
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
            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Overview</h2>
                    <p>
                        Synergy provides a comprehensive range of industrial additives designed to improve the performance, durability, and application properties of paints, coatings, and construction materials. Our material science division focuses on enhanced toughness and long-term sustainability.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Product Categories</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Paints & Coatings</h4>
                            <p className="text-sm">Dispersants and rheology modifiers for superior coverage and stability.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Construction Chemicals</h4>
                            <p className="text-sm">Admixtures for improved concrete strength, curing, and crack resistance.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SolutionLayout>
    );
}
