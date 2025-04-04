import HeroSection from "./components/Hero";
import ContactSection from "./components/Contact";
import ImpactSection from "./components/Impact";
import DonateSection from "./components/DonateSection";
import MissionSection from "./components/MissionSection";
import Header from "./components/Hearder";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <DonateSection />
      <ContactSection />
    </div>
  );
}
