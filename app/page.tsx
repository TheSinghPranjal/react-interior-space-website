import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ThreeModes } from "@/components/sections/ThreeModes";
import { InteriorApartment } from "@/components/sections/InteriorApartment";
import { SketchDeepDive } from "@/components/sections/SketchDeepDive";
import { RoomFeatures } from "@/components/sections/RoomFeatures";
import { ThreeDVisualization } from "@/components/sections/ThreeDVisualization";
import { ExportShare } from "@/components/sections/ExportShare";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { StatsSocialProof } from "@/components/sections/StatsSocialProof";
import { AIAssist } from "@/components/sections/AIAssist";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ThreeModes />
      <InteriorApartment />
      <SketchDeepDive />
      <RoomFeatures />
      <ThreeDVisualization />
      <ExportShare />
      <WhoItsFor />
      <StatsSocialProof />
      <AIAssist />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
