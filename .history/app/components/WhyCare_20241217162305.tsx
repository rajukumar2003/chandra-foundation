'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, School, Home, Heart, Utensils } from 'lucide-react'

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
        <div className=" mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Why We Should Care
              </h2>
              <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2 space-y-6 text-gray-600">
                <p className="text-lg">
                  In India, a significant portion of the population lives in poverty. 
                  Millions of children remain uneducated, suffer from hunger and poor health, 
                  and face an uncertain future. Additionally, the number of children living 
                  without parental support is rising day by day.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Our Solution</h3>
                  <p>
                    We started by requesting people to donate their old clothes and accessories. 
                    But we realized that was not enough. True development centers around fulfilling 
                    basic needs while focusing on Education and Employment—the foundations of a better future.
                  </p>
                </div>
              </div>
              
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-green-800 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white group"
              >
                Learn About What We Do
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

