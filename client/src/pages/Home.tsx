import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ApnaiyatSection } from "@/components/ApnaiyatSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ApnaiyatSection />
        <HowItWorksSection />
      </main>
      
      <FooterSection />
    </div>
  );
}
