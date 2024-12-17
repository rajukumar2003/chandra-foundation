'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
                Together We Can Change The World
              </h2>
              <p className="text-xl text-gray-600">
                Let's create the{" "}
                <span className="text-green-600 font-semibold">DIFFERENCE</span>{" "}
                our community needs
              </p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white group"
                >
                  Join Us Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 bg-green-100 rounded-full opacity-20 animate-pulse delay-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-24 h-24 text-green-600 animate-pulse" />
              </div>
              {/* Floating Elements */}
              <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-200 rounded-full animate-float opacity-50" />
              <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-green-300 rounded-full animate-float-delayed opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

