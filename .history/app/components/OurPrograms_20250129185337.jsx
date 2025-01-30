"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart, Utensils, Book, Briefcase, Leaf } from "lucide-react"
import Image from "next/image"

const programs = [
  {
    title: "AyushKalyan",
    subtitle: "Well-being of Life",
    icon: Heart,
    description:
      "Improving healthcare accessibility for marginalized communities through mobile clinics, awareness campaigns, and mental health support.",
    image: "/images/healthcare.jpg",
  },
  {
    title: "AnnaSamruddhi",
    subtitle: "Zero Hunger Initiative",
    icon: Utensils,
    description:
      "Eradicating hunger and malnutrition through community kitchens, farmer support, and nutrition awareness programs.",
    image: "/images/food.jpg",
  },
  {
    title: "VidyaUday",
    subtitle: "Education for All",
    icon: Book,
    description:
      "Empowering underprivileged children and youth with quality education, vocational training, and literacy programs.",
    image: "/images/education.jpg",
  },
  {
    title: "KarmaVikas",
    subtitle: "Employment & Skill Development",
    icon: Briefcase,
    description:
      "Promoting self-sufficiency through skill-based training, job placement, and women empowerment programs.",
    image: "/images/employment.jpg",
  },
  {
    title: "PrakritiSamvardhan",
    subtitle: "Environmental Sustainability",
    icon: Leaf,
    description:
      "Fostering climate resilience and conservation through tree plantation, waste management, and water conservation initiatives.",
    image: "/images/environment.jpg",
  },
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Our Programs & Projects</h2>
            <p className="text-lg text-gray-600">
              At Chandra Foundation, we've launched several impactful initiatives aimed at holistic community
              development. Our focus areas include healthcare, hunger eradication, education, employment, and
              environmental sustainability.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300"></div>
                <program.icon className="absolute inset-0 m-auto w-12 h-12 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-green-700 mb-2">{program.title}</h3>
              <h4 className="text-md font-medium text-green-600 mb-4">{program.subtitle}</h4>
              <p className="text-gray-600 mb-6">{program.description}</p>

              <div className="mt-auto">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
            Learn More About Our Initiatives
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

