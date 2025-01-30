'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/aboutus.png"
        alt="Chandra Foundation team working in the community"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          About Us
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-light"
        >
          Empowering Communities, Transforming Lives
        </motion.p> */}
      </div>
    </section>
  )
}

