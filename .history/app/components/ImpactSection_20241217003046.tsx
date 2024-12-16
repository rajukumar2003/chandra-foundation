'use client'

import { motion } from "framer-motion"
import { Clock, Users, GraduationCap, HandHeart, Award } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: 4,
    suffix: '+',
    label: 'Years of dedicated service to society',
    color: 'text-green-500'
  },
  {
    icon: GraduationCap,
    value: 1000,
    suffix: '+',
    label: 'Children received quality education',
    color: 'text-blue-500'
  },
  {
    icon: HandHeart,
    value: 5000,
    suffix: '+',
    label: 'Hours of community service',
    color: 'text-purple-500'
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Partners and volunteers joined us',
    color: 'text-orange-500'
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Commitment to transforming lives',
    color: 'text-red-500'
  }
]

export default function ImpactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Through your generous support and our dedicated team's efforts, 
            we've made significant strides in transforming lives and building 
            a better future for our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6">
                <div className="mb-4 relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

