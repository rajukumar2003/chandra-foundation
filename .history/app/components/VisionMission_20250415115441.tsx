'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

export default function VisionMission() {
  const {translations} = useLanguage();
  return (
    <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{translations.aboutPage.vision.title}</h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed text-center">
            {translations.aboutPage.vision.content}
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{translations.aboutPage.vision.points[3]}</h3>
                <p className="text-gray-600">
                {translations.aboutPage.vision.points[0]}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{translations.aboutPage.vision.points[4]}</h3>
                <p className="text-gray-600">
                {translations.aboutPage.vision.points[1]}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-700 mb-3">{translations.aboutPage.vision.points[5]}</h3>
                <p className="text-gray-600">
                {translations.aboutPage.vision.points[2]}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{translations.aboutPage.mission.title}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
              {translations.aboutPage.mission.content}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-600">
                  {translations.aboutPage.mission.points[0]}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-600">
                  {translations.aboutPage.mission.points[1]}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-600">
                  {translations.aboutPage.mission.points[0]}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 shrink-0"></div>
                  <p className="text-gray-600">
                  {translations.aboutPage.mission.points[0]}
                  </p>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-green-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-green-50 rounded-3xl transform -rotate-3"></div>
              <div className="relative h-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/poor_smiling.jpg"
                  alt="Our mission in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

