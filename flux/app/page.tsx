import { Section } from "@/components/ui/screen";
import { NavBar } from "@/components/ui/navbar-view";
import { HeroSection } from "@/components/ui/hero-section";
import { Features } from "@/components/ui/features-section";
import { FAQ } from "@/components/ui/faq";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <Section>
      <NavBar />
      <HeroSection />
      <Features />
      <FAQ />
      {/* <Footer /> */}
    </Section>
  );
}
