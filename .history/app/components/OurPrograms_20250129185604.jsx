"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function OurPrograms() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">What We Do to Bring Smiles</h2>
            <p className="text-lg text-gray-600">
              Together, we focus on providing basic amenities like{" "}
              <span className="font-semibold text-green-600">Education</span>,{" "}
              <span className="font-semibold text-green-600">Food</span>,{" "}
              <span className="font-semibold text-green-600">Health</span>, and{" "}
              <span className="font-semibold text-green-600">Employment</span> to the needy. Through love, care, and
              collective support, we aim to make a positive difference in their lives.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto mb-12">
          {/* AyushKalyan (Health & Care) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image src="/images/healthcare.jpg" alt="Health & Care Initiative" fill className="object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Health & Care</h3>
            <p className="text-gray-600">
              Promoting healthy lives with essential medical care and support through our AyushKalyan initiative.
            </p>
          </motion.div>

          {/* AnnaSamruddhi (Food) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image src="/images/food.jpg" alt="Food Security Initiative" fill className="object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Food</h3>
            <p className="text-gray-600">
              Ensuring no child goes to bed hungry with nutritious meals through AnnaSamruddhi.
            </p>
          </motion.div>

          {/* VidyaUday (Education) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image src="/images/education.jpg" alt="Education Initiative" fill className="object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Education</h3>
            <p className="text-gray-600">
              Providing knowledge and opportunities for a brighter future through VidyaUday.
            </p>
          </motion.div>

          {/* KarmaVikas (Employment) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image src="/images/employment.jpg" alt="Employment Initiative" fill className="object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Employment</h3>
            <p className="text-gray-600">Creating opportunities for sustainable livelihoods through KarmaVikas.</p>
          </motion.div>
        </div>

        {/* Additional Program - PrakritiSamvardhan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-md mx-auto text-center mb-12"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image src="/images/environment.jpg" alt="Environmental Initiative" fill className="object-cover" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Environmental Sustainability</h3>
          <p className="text-gray-600">Fostering climate resilience through PrakritiSamvardhan.</p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full">
            Explore Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

