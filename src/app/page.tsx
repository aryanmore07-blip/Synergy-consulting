import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { WhySynergy } from "@/components/sections/WhySynergy";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ConsultancySection } from "@/components/sections/ConsultancySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SolutionsOverview />
      <ConsultancySection />
      <WhySynergy />
      <IndustriesGrid />
      <AboutSection />
      <Footer />
    </main>
  );
}
