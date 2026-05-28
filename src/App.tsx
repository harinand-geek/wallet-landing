import { useScrollReveal } from "./hooks/useScrollReveal";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { MobileSection } from "./components/MobileSection";
import { DesktopShowcase } from "./components/DesktopShowcase";
import { Steps } from "./components/Steps";
import { Why } from "./components/Why";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export function App() {
  useScrollReveal(".feature-card, .step, .why-item, .phone-frame, .cta-card");

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <MobileSection />
      <DesktopShowcase />
      <Steps />
      <Why />
      <CTA />
      <Footer />
    </>
  );
}
