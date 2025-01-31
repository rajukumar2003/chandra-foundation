
import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import OurPrograms from "../components/OurPrograms";
import ImpactSection from "../components/ImpactSection"
import StorySection from "../components/StorySection";
// import FoundersMessage from "../components/FoundersMessage";
import HistoryTimeline from "../components/HistoryTimeline";
import CtaSection from "../components/CtaSection";
import WhyCare from "../components/WhyCare";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WhyCare/>
      <AboutUs />
      <OurPrograms />
      <ImpactSection />
      <HistoryTimeline/>
      <StorySection/>
      {/* <FoundersMessage/> */}
      <CtaSection/>
    </main>
  );
}
