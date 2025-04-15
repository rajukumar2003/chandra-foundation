'use client'

import { motion } from "framer-motion"
import {School, Home, Heart, Utensils } from 'lucide-react'
import {}

const statistics = [
  {
    icon: School,
    value: "27%",
    label: "Children out of school"
  },
  {
    icon: Utensils,
    value: "14%",
    label: "Population undernourished"
  },
  {
    icon: Home,
    value: "73M",
    label: "People in poverty"
  },
  {
    icon: Heart,
    value: "40%",
    label: "Children need support"
  }
]

export default function WhyCare() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Content Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              Why We Should Care
            </h2>

            <p className="text-lg text-gray-600">
              In India, a significant portion of the population lives in poverty. 
              Millions of children remain uneducated, suffer from hunger and poor health, 
              and face an uncertain future. Additionally, the number of children living 
              without parental support is rising day by day.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-800">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg text-left mx-auto">
              <h3 className="font-semibold text-green-800 mb-2">Our Solution</h3>
              <p className="text-gray-600">
                We started by requesting people to donate their old clothes and accessories. 
                But we realized that was not enough. True development centers around fulfilling 
                basic needs while focusing on <span className="font-semibold text-green-700">Education </span> 
                and <span className="font-semibold text-green-700">Employment</span>—the foundations of a better future.
              </p>
            </div>

            {/* <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white group mx-auto"
            >
              Learn About What We Do
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
