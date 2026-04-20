import { Section } from "@/components/screen";

import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <>
      <Section>
        <HeroSection />
        <Features />
      </Section>
      <div className="w-full bg-neutral-50">
        <PricingSection />
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
