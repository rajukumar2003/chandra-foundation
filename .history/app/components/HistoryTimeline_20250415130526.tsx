"use client"

import { motion } from "framer-motion"
import { Heart, FileCheck, TrendingUp, Users, Award, Sparkles, Rocket} from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const timelineEvents = [
  {
    year: 2019,
    title: "Foundation Establishment",
    description: "Started our journey with a vision to help the underprivileged",
    icon: Heart,
    stats: "Helped 50+ families",
  },
  {
    year: 2020,
    title: "Official Registration",
    description: "Registered as a non-profit organization to expand our reach",
    icon: FileCheck,
    stats: "Became officially recognized",
  },
  {
    year: 2021,
    title: "Growing Impact",
    description: "Expanded our programs to education and healthcare",
    icon: TrendingUp,
    stats: "Reached 500+ beneficiaries",
  },
  {
    year: 2022,
    title: "Community Growth",
    description: "Significant increase in volunteers and supporters",
    icon: Users,
    stats: "100+ active volunteers",
  },
  {
    year: 2023,
    title: "Milestone Achievements",
    description: "Recognized for our contribution to society",
    icon: Award,
    stats: "5 community awards",
  },
  {
    year: 2024,
    title: "Future Vision",
    description: "Continuing our mission with greater goals",
    icon: Sparkles,
    stats: "Targeting 1000+ lives",
  },
  {
    year: 2025,
    title: "Official Launch",
    description: "Grand inauguration of Chandra Foundation in February",
    icon: Rocket,
    stats: "Nationwide recognition",
  },
]

export default function HistoryTimeline() {
  const {translations} = useLanguage();
  const timelineEvents = [
    {
      year: 2019,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: Heart,
      stats: "Helped 50+ families",
    },
    {
      year: 2020,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: FileCheck,
      stats: "Became officially recognized",
    },
    {
      year: 2021,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: TrendingUp,
      stats: "Reached 500+ beneficiaries",
    },
    {
      year: 2022,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: Users,
      stats: "100+ active volunteers",
    },
    {
      year: 2023,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: Award,
      stats: "5 community awards",
    },
    {
      year: 2024,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: Sparkles,
      stats: "Targeting 1000+ lives",
    },
    {
      year: 2025,
      title: translations.milestone[2019],
      description: translations.milestone["2019Desc"],
      icon: Rocket,
      stats: "Nationwide recognition",
    },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50 relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:radial-gradient(white,transparent_85%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Journey of Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From humble beginnings to creating lasting change, explore the milestones that have shaped our mission and
            our vision for the future.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:-translate-x-0.5" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-green-500 transform -translate-x-4 md:-translate-x-4 z-10">
                <event.icon className="w-4 h-4 text-green-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-start mb-2">
                    <span className="text-2xl font-bold text-green-600">{event.year}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <div className="text-sm font-medium text-green-600">{event.stats}</div>
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

