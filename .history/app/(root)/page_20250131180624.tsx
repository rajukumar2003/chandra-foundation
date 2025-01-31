// app/page.tsx

import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import OurPrograms from "../components/OurPrograms";
import ImpactSection from "../components/ImpactSection"
import StorySection from "../components/StorySection";
// import FoundersMessage from "../components/FoundersMessage";
import HistoryTimeline from "../components/HistoryTimeline";
import CtaSection from "../components/CtaSection";
import WhyCare from "../components/WhyCare";


// import About from "@/components/About";
// import Vision from "@/components/Vision";
// import Programs from "@/components/Programs";
// import Journey from "@/components/Journey";
// import CTA from "@/components/CTA";

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
