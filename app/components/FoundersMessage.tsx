'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Quote } from 'lucide-react'

export default function FoundersMessage() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Message from Our Founder
          </h2>
          {/* <div className="w-20 h-1 bg-green-600 mx-auto"></div> */}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-[300px_1fr] gap-8 items-start"
          >
            {/* Founder's Image */}
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-2xl border-2 border-green-200 transform rotate-6" />
                <div className="absolute inset-0 rounded-2xl border-2 border-green-300 transform -rotate-3" />
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about us.jpg"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-green-800">Chandra Kumar</h3>
                <p className="text-gray-600">Founder & President</p>
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-6">
              <Quote className="w-12 h-12 text-green-600 opacity-20" />
              <p className="text-gray-600 leading-relaxed">
                With assistance from my family, and with the support of my friends, we will able to make 
                a better use of our resources. We are a startup foundation and learning to improve and 
                serve better. We are welcoming your support and ideas.
              </p>
              <blockquote className="border-l-4 border-green-500 pl-4 my-6 italic text-gray-700">
                &quot;If you have the will and the same dreams then come and join us because any contribution 
                is very much valuable.&quot;
              </blockquote>
              <p className="text-gray-600 leading-relaxed">
                Our journey began with a simple yet powerful vision: to create meaningful change in our 
                community. Today, with the dedication of our team and the generosity of our supporters, 
                we&apos;re making that vision a reality, one life at a time.
              </p>
              <div className="pt-6">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Join Our Mission
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

