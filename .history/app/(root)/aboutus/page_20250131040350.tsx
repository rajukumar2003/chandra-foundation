"use client";

import AboutIntro from "@/app/components/AboutIntro";
import AboutHero from "@/app/components/AboutHero";
import VisionMission from "@/app/components/VisionMission";
import CoreValues from "@/app/components/CoreValues";
import HistorySection from "@/app/components/HistorySection";
import FoundersMessage from "@/app/components/FoundersMessage";
import WhyTrustUs from "@/app/components/WhyTrustUs";
import ImpactSection from "@/app/components/ImpactSection";

export default function AboutUsPage() {

  return (

    <main>
      <AboutHero/>
      <AboutIntro/>
      <VisionMission/>
      <CoreValues/>
      <HistorySection/>
      <WhyTrustUs/>
      <ImpactSection/>
      <FoundersMessage/>
    </main>
  );
}
