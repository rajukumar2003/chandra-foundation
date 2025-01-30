"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import AboutIntro from "@/app/components/AboutIntro";
import AboutHero from "@/app/components/AboutHero";
import { main } from "framer-motion/client";
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
    // <div className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">

    //   {/* Hero Section */}
    //   <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    //     <Image
    //       src="/images/aboutus_hero_section.jpeg"
    //       alt="Chandra Foundation team working in the community"
    //       fill
    //       style={{ objectFit: "cover" }}
    //       className="absolute inset-0"
    //     />
    //     <div className="absolute inset-0 bg-black/50" />
    //     <div className="relative z-10 text-center text-white">
    //       <motion.h1
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6 }}
    //         className="text-4xl md:text-5xl font-bold mb-4"
    //       >
    //         About Chandra Foundation
    //       </motion.h1>
    //       <motion.p
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.6, delay: 0.2 }}
    //         className="text-xl md:text-2xl"
    //       >
    //         Empowering Communities, Transforming Lives
    //       </motion.p>
    //     </div>
    //   </section>

    //   <AboutIntro/>


  );
}
