"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-6 flex ju">Who we are</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[2/2] relative rounded-3xl overflow-hidden border border-green-200">
              <Image
                src="/images/aboutus.png"
                alt="Making a difference in communities"
                fill
                className="object-cover"
              />
              {/* Decorative borders */}
              <div className="absolute inset-0 border-2 border-green-100 rounded-3xl transform rotate-2" />
              <div className="absolute inset-0 border-2 border-green-100 rounded-3xl transform -rotate-2" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Short Para / Who we are */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2019, Chandra Foundation emerged from a vision to
                create lasting positive change in underserved communities. What
                began as a small initiative has grown into a dynamic force for
                social transformation, touching thousands of lives across
                multiple regions.
              </p>
            </div>

            {/* Our Journey */}
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Our Journey
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                From our humble beginnings distributing essential supplies,
                we've evolved into a comprehensive support system focusing on
                education, healthcare, and sustainable development. Each year
                marks new milestones in our mission to empower communities.
              </p>
            </div>

            {/* Founding Story */}
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Founding Story
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our founder, Chandra Kumar, witnessed firsthand the challenges
                faced by underprivileged communities. This personal experience
                sparked a commitment to create an organization that would bridge
                the gap between resources and needs, ensuring no one is left
                behind.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
