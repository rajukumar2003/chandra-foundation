"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, TrendingUp, Users, Award } from "lucide-react";

const impactStats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Lives Impacted",
  },
  {
    icon: Heart,
    value: "50+",
    label: "Active Programs",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Success Rate",
  },
  {
    icon: Award,
    value: "5+",
    label: "Awards Received",
  },
];

export default function WhyTrustUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:radial-gradient(white,transparent_85%)]" /> */}

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Why Trust Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to transparency, accountability, and measurable
            impact sets us apart in creating positive change.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column - Our Impact */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Our Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Since our inception, we've been dedicated to creating meaningful
                change in communities across India. Our approach combines
                grassroots engagement with strategic planning to ensure
                sustainable impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-green-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Right Column - Growth Areas */}
          <div className="grid gap-8">
            {/* We Build Smile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/images/we-build-smile.jpg"
                  alt="Building smiles in communities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">
                  We Build Smile
                </h4>
                <p className="text-gray-600">
                  Through our various initiatives and programs, we've brought
                  smiles to thousands of faces, creating lasting positive impact
                  in communities.
                </p>
              </div>
            </motion.div>

            {/* We Nurture Growth */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/images/we-nurture-growth.jpg"
                  alt="Nurturing community growth"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">
                  We Nurture Growth
                </h4>
                <p className="text-gray-600">
                  Our sustainable development approach ensures long-term growth
                  and self-reliance in the communities we serve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
