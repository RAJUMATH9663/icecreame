import { FloatingSprinkles } from "@/components/ui/FloatingSprinkles";
import { Hero } from "@/components/home/Hero";
import { MarqueeBanner } from "@/components/ui/MarqueeBanner";
import { ScoopStacker3D } from "@/components/home/ScoopStacker3D";
import { FeaturedFlavors } from "@/components/home/FeaturedFlavors";
import { BrandStory } from "@/components/home/BrandStory";
import { Ingredients } from "@/components/home/Ingredients";
import { TasteQuiz3D } from "@/components/home/TasteQuiz3D";
import { SeasonalCollection } from "@/components/home/SeasonalCollection";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingSprinkles />
      <Hero />
      <MarqueeBanner />
      <ScoopStacker3D />
      <FeaturedFlavors />
      <BrandStory />
      <Ingredients />
      <TasteQuiz3D />
      <SeasonalCollection />
      <Newsletter />
    </main>
  );
}
