"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function WhyTrustUs() {
  const {translations} = useLanguage();
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50/50 relative overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Why Trust Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to transparency, accountability, and measurable
            impact sets us apart in creating positive change.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Card 1: We Build Smiles */}
          <motion.div
            initial={{ opacity: 0.5, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
          >
            <div className="relative w-full h-56 sm:h-64 lg:h-72">
              <Image
                src="/images/smiling2.png"
                alt="Building smiles in communities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <h4 className="text-xl font-semibold text-green-700 mb-2">
                We Build Smiles
              </h4>
              <p className="text-gray-600">
                Through our various initiatives and programs, we&apos;ve brought
                smiles to thousands of faces creating a lasting impact in
                communities.
              </p>
            </div>
          </motion.div>

          {/* Card 2: We Nurture Growth */}
          <motion.div
            initial={{ opacity: 0.5, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1}}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
          >
            <div className="relative w-full h-56 sm:h-64 lg:h-72">
              <Image
                src="/images/vidyaudaya15.jpg"
                alt="Nurturing community growth"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
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
    </section>
  );
}
