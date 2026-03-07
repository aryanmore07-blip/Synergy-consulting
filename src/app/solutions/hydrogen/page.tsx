import { SolutionLayout } from "@/components/layout/SolutionLayout";
import { Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Hydrogen Systems | Synergy",
    description: "End-to-end hydrogen generation, storage, and refueling infrastructure.",
};

export default function HydrogenPage() {
    return (
        <SolutionLayout
            title="Hydrogen & Clean Energy"
            description="Advanced PEM and Alkaline electrolysis systems for industrial-grade green hydrogen production."
            icon={Zap}
            specs={[
                { label: "Purity", value: ">99.999%" },
                { label: "Pressure", value: "30-700 bar" },
                { label: "Capacity", value: "10kW - 20MW" },
                { label: "Efficiency", value: "75-80%" },
            ]}
            features={[
                "Modular skid-mounted design",
                "SCADA integration for remote monitoring",
                "PESO compliant storage systems",
                "Automated leak detection and safety interlocks",
            ]}
        >
            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Overview</h2>
                    <p>
                        Our hydrogen generation systems are designed for maximizing efficiency and reliability in industrial environments.
                        Whether you need on-site generation for chemical processing or a complete refueling station for mobility,
                        Synergy provides end-to-end engineering support.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-heading text-white mb-4">Applications</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Industrial Feedstock</h4>
                            <p className="text-sm">Replacing grey hydrogen in ammonia and methanol production with green alternatives.</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                            <h4 className="font-bold text-white mb-2">Mobility</h4>
                            <p className="text-sm">Refueling infrastructure for FCEV fleets, including buses and heavy trucks.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SolutionLayout>
    );
}
