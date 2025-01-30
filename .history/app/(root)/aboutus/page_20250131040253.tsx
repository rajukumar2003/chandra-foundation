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

    //   {/* Mission and Vision */}
    //   <section className="py-16 bg-white">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <h2 className="text-3xl font-bold text-green-800 mb-6">
    //           Our Mission & Vision
    //         </h2>
    //         <p className="text-lg text-gray-700 mb-8">
    //           At Chandra Foundation, we are committed to empowering
    //           underprivileged communities through education, healthcare, and
    //           sustainable development. Our vision is a world where every
    //           individual has the opportunity to thrive and contribute to
    //           society, regardless of their background.
    //         </p>
    //         <div className="grid md:grid-cols-3 gap-8">
    //           <Card>
    //             <CardContent className="pt-6">
    //               <h3 className="text-xl font-semibold text-green-700 mb-2">
    //                 Education
    //               </h3>
    //               <p className="text-gray-600">
    //                 Providing quality education and skills training to children
    //                 and young adults.
    //               </p>
    //             </CardContent>
    //           </Card>
    //           <Card>
    //             <CardContent className="pt-6">
    //               <h3 className="text-xl font-semibold text-green-700 mb-2">
    //                 Healthcare
    //               </h3>
    //               <p className="text-gray-600">
    //                 Ensuring access to essential healthcare services in
    //                 underserved areas.
    //               </p>
    //             </CardContent>
    //           </Card>
    //           <Card>
    //             <CardContent className="pt-6">
    //               <h3 className="text-xl font-semibold text-green-700 mb-2">
    //                 Sustainability
    //               </h3>
    //               <p className="text-gray-600">
    //                 Promoting eco-friendly practices and sustainable livelihoods
    //                 in communities.
    //               </p>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Founder's Story */}
    //   <section className="py-16 bg-green-50">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-4xl mx-auto">
    //         <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
    //           Founder&apos;s Story
    //         </h2>
    //         <div className="flex flex-col md:flex-row items-center gap-8">
    //           <div className="md:w-1/3">
    //             <Image
    //               src="/images/about us.jpg"
    //               alt="Chandra Kumar - Founder"
    //               width={400}
    //               height={400}
    //               className="rounded-sm"
    //             />
    //           </div>
    //           <div className="md:w-2/3">
    //             <h3 className="text-2xl font-semibold text-green-700 mb-4">
    //               Chandra Kumar
    //             </h3>
    //             <p className="text-gray-700 mb-4">
    //               Chandra Kumars journey began in a small village where he
    //               witnessed firsthand the challenges faced by underprivileged
    //               communities. Driven by a passion to make a difference, he
    //               founded the Chandra Foundation in 2019 with a vision to
    //               empower individuals through education and sustainable
    //               development.
    //             </p>
    //             <p className="text-gray-700">
    //               "I believe that every person has the potential to create
    //               positive change. Our foundation aims to provide the tools and
    //               opportunities necessary for individuals to build a better
    //               future for themselves and their communities." - Chandra Kumar
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>


  );
}
