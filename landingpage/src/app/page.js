import HeroSection from "./components/Hero";
import ContactSection from "./components/Contact";
import ImpactSection from "./components/Impact";

import MissionSection from "./components/MissionSection";

import ActivitySection from "./components/ActivitySection";
import RescueStoriesSection from "./components/RescueStory";
import LevelRoadmap from "./components/Roadmap";
import AhimsaClassroom from "./components/Event";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AhimsaClassroom />
      <RescueStoriesSection />
      <LevelRoadmap />
      {/* <DonateSection /> */}
      <ActivitySection />
      {/* <ImpactSection /> */}
      {/* <Gallery /> */}
      <ContactSection />
    </div>
  );
}
