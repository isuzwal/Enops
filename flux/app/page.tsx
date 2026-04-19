import { Section } from "@/components/screen";
import { NavBar } from "@/components/navbar-view";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features-section";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <Section>
      <NavBar />
      <HeroSection />
      <Features />
      <PricingSection />
      <FAQ />
      <Footer />
    </Section>
  );
}
