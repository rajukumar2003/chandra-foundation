'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Book, Heart, Utensils, Briefcase } from 'lucide-react'
import Image from "next/image"

const programs = [
  {
    title: "Education",
    icon: Book,
    description: "Providing knowledge and opportunities for a brighter future.",
    image: "/.jpg"
  },
  {
    title: "Food",
    icon: Utensils,
    description: "Ensuring no child goes to bed hungry with nutritious meals.",
    image: "/images/food.jpg"
  },
  {
    title: "Health & Care",
    icon: Heart,
    description: "Promoting healthy lives with essential medical care and support.",
    image: "/images/cloth_donation.jpg"
  },
  {
    title: "Employment",
    icon: Briefcase,
    description: "Creating opportunities for sustainable livelihoods.",
    image: "/images/smile.jpg"
  }
]

export default function OurPrograms() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              What We Do to Bring Smiles
            </h2>
            <p className="text-lg text-gray-600">
              Together, we focus on providing basic amenities like{" "}
              <span className="font-semibold text-green-600">Education</span>,{" "}
              <span className="font-semibold text-green-600">Food</span>,{" "}
              <span className="font-semibold text-green-600">Health</span>, and{" "}
              <span className="font-semibold text-green-600">Employment</span> to the
              needy. Through love, care, and collective support, we aim to make a
              positive difference in their lives.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-200px)] h-[2px] bg-green-200">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400"></div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400"></div>
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400"></div>
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-64 h-64 mb-6">
                  {/* Circle Background */}
                  <div className="absolute inset-0 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300"></div>
                  
                  {/* Program Image */}
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-green-600/0 group-hover:bg-green-600/40 transition-colors duration-300 rounded-full">
                    <program.icon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                </div>

                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 max-w-xs">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full"
          >
            Explore Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

