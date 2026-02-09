import { Hero } from "@/components/Hero";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Testimonials />
      <FeaturesGrid />
      <CtaSection />
    </main>
  );
}
