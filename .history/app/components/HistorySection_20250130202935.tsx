"use client"

import { motion } from "framer-motion"
import { Heart, FileCheck, TrendingUp, Sparkles, GraduationCap, Eye, Utensils, Trophy } from "lucide-react"
import Image from "next/image"

const timelineEvents = [
  {
    year: 2019,
    title: "Foundation Establishment",
    description: "Started our journey with a vision to help the underprivileged",
    stats: "Helped 50+ families",
    icon: Heart,
    image: "/images/foundation.jpg",
  },
  {
    year: 2020,
    title: "Official Registration",
    description: "Registered as a non-profit organization to expand our reach",
    stats: "Became officially recognized",
    icon: FileCheck,
    image: "/images/registration.jpg",
  },
  {
    year: 2021,
    title: "Growing Impact",
    description: "Expanded our programs to education and healthcare",
    stats: "Reached 500+ beneficiaries",
    icon: TrendingUp,
    image: "/images/impact.jpg",
  },
  {
    year: 2022,
    title: "Community Growth & Food Security",
    description: "Launched AnnaSamruddhi food distribution program, reaching thousands of families in need",
    stats: ["100+ active volunteers", "5000+ meals distributed", "5 community kitchens established"],
    icon: Utensils,
    image: "/images/food-distribution.jpg",
  },
  {
    year: 2023,
    title: "Healthcare Milestones",
    description: "Organized free eye camps under AyushKalyan initiative, serving rural communities",
    stats: ["5 community awards", "1000+ eye checkups conducted", "200+ spectacles distributed"],
    icon: Eye,
    image: "/images/eye-camp.jpg",
  },
  {
    year: 2024,
    title: "Skill Development Initiative",
    description: "Launched comprehensive skill certification program under KarmaVikas",
    stats: ["500+ youth trained", "10 skill development centers", "80% placement rate"],
    icon: GraduationCap,
    image: "/images/skill-development.jpg",
  },
  {
    year: 2025,
    title: "Official Launch",
    description: "Grand inauguration of Chandra Foundation headquarters",
    stats: ["Nationwide recognition", "Pan-India presence", "Strategic partnerships established"],
    icon: Trophy,
    image: "/images/launch.jpg",
  },
]

export default function HistorySection() {
  return (
    <section className="py-24 bg-green-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05),transparent_50%)]" />
      </div> */}

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Our Journey Through Time</h2>
          <p className="text-green-300/80 max-w-2xl mx-auto text-lg">
            From humble beginnings to nationwide impact, explore the milestones that have shaped our mission to
            transform lives.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-400/30" />

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
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-green-950 rounded-full border-2 border-green-400 transform -translate-x-4 md:-translate-x-4 z-10">
                <event.icon className="w-4 h-4 text-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-green-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-400/20 hover:border-green-400/40 transition-colors">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-green-400">{event.year}</span>
                    <div className="w-12 h-0.5 bg-green-400/30 mx-3" />
                    <h3 className="text-xl font-semibold text-green-100">{event.title}</h3>
                  </div>

                  <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 to-transparent" />
                  </div>

                  <p className="text-green-100/80 mb-4">{event.description}</p>

                  {Array.isArray(event.stats) ? (
                    <ul className="space-y-2">
                      {event.stats.map((stat, i) => (
                        <li key={i} className="flex items-center text-green-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {stat}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-green-300">{event.stats}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future Indicator */}
          <div className="absolute left-4 md:left-1/2 bottom-0 transform -translate-x-4 md:-translate-x-4">
            <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-green-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

