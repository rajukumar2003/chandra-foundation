"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/about.png"
        alt="Chandra Foundation team working in the community"
        fill
        style={{ objectFit: "cover", filter: "brightness(0.8)" }}
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-800/70" /> */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.05]" /> */}

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl font-light"
        >
          Empowering Communities, Transforming Lives
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </section>
  )
}

