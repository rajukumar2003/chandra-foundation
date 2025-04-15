"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function OurPrograms() {
  const { translations } = useLanguage();
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            {translations.whatWeDo.title}
            </h2>
            <p className="text-lg text-gray-600 px-4">
            {translations.whatWeDo.desc}
            </p>
          </motion.div>
        </div>

        {/* Main Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16 max-w-7xl mx-auto mb-16">
          {/* AyushKalyan (Health & Care) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-56 h-56 mb-6 mx-auto">
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/community_healthcare.jpg"
                  alt="Health & Care Initiative"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">
            {translations.programs.ayushKalyan}
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto">
            {translations.programs.ayushKalyanDesc}
            </p>
            <Link href="/services/ayushKalyan" className="mt-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {translations.know.more}
              </Button>
            </Link>
          </motion.div>

          {/* AnnaSamruddhi (Food) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-56 h-56 mb-6 mx-auto">
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/foood.jpg"
                  alt="Food Security Initiative"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">
            {translations.programs.annaSamruddhi}
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto">
            {translations.programs.annaSamruddhiDesc}
            </p>
            <Link href="/services/annaSamruddhi" className="mt-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {translations.know.more}
              </Button>
            </Link>
          </motion.div>

          {/* VidyaUday (Education) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-56 h-56 mb-6 mx-auto">
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/education.jpg"
                  alt="Education Initiative"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">
            {translations.programs.vidyaUday}
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto">
            {translations.programs.vidyaUdayDesc}
            </p>
            <Link href="/services/vidyaUday" className="mt-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {translations.know.more}
              </Button>
            </Link>
          </motion.div>

          {/* KarmaVikas (Employment) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-56 h-56 mb-6 mx-auto">
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/employment.jpg"
                  alt="Employment Initiative"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">
            {translations.programs.karmaVikas}
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto">
            {translations.programs.karmaVikasDesc}
            </p>
            <Link href="/services/karmaVikas" className="mt-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {translations.know.more}
              </Button>
            </Link>
          </motion.div>

          {/* Additional Program - PrakritiSamvardhan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative w-56 h-56 mb-6 mx-auto">
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/planting_trees.jpeg"
                  alt="Planting Trees"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">
            {translations.programs.prakritiSamvardhan}
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              {translations.programs.prakritiSamvardhanDesc}
            </p>
            <Link href="/services/prakritiSamvardhan" className="mt-4">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                {translations.know.more}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* CTA Button */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
          >
            Explore Our Work
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
