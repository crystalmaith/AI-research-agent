import { ResearchHero } from "@/components/ResearchHero";
import { ResearchDashboard } from "@/components/ResearchDashboard";
import { ResearchFeatures } from "@/components/ResearchFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResearchHero />
      <ResearchDashboard />
      <ResearchFeatures />
    </div>
  );
};

export default Index;
