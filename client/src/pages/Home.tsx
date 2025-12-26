import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        
        {/* Placeholder for future sections */}
        <section className="py-24 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">How We Guarantee Security</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform uses multi-layer verification to ensure your funds reach the intended recipients.
          </p>
        </section>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; 2024 Apnaiyat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
