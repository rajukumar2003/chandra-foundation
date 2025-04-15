"use client"

import { motion } from "framer-motion"
import { Users, Scale, Shield, HandshakeIcon, Lightbulb, Heart, Leaf } from "lucide-react"
import {userLa}

const coreValues = [
  {
    icon: Users,
    title: "Empowerment",
    description:
      "We believe in empowering individuals and communities to take charge of their own lives, fostering self-reliance and resilience.",
  },
  {
    icon: Scale,
    title: "Equity",
    description:
      "We are committed to promoting fairness and equal opportunities for all, ensuring that marginalized and underserved populations receive the support they need.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and honesty, building trust with our stakeholders and communities through ethical practices.",
  },
  {
    icon: HandshakeIcon,
    title: "Collaboration",
    description:
      "We value partnerships and teamwork, recognizing that collective efforts lead to greater impact and sustainable change.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and adaptability, continually seeking new solutions and approaches to address the evolving challenges in health, education, and employment.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach our work with empathy and understanding, prioritizing the well-being and dignity of every individual we serve.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are dedicated to creating lasting change through sustainable practices, ensuring that our initiatives have a positive impact for future generations.",
  },
]

export default function CoreValues() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Core Values</h2>
          {/* <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div> */}
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-green-100 group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

