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
            description="Enhancing shelf life, texture, and stability through advanced food chemistry and packaging innovation."
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
            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Overview</h2>
                    <p>
                        Our food technology division focuses on preserving quality and reducing waste. We offer FSSAI-compliant solutions for anti-caking in milk powders and spices, as well as next-generation packaging technologies that significantly extend shelf life.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Key Solutions</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Anti-Caking</h4>
                            <p className="text-sm">Preventing clumping in hygroscopic powders like milk, whey, and spice mixes.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Smart Packaging</h4>
                            <p className="text-sm">Barrier films and absorbers to protect against oxidation and moisture.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SolutionLayout>
    );
}
