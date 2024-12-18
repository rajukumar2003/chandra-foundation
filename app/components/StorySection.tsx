'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const stories = [
  {
    image: "/images/riya_education.jpg",
    title: "Education Changes Lives",
    description: "Meet Riya, who went from struggling with basic education to becoming a top student in her class with our support.",
    category: "Education"
  },
  {
    image: "/images/family.jpg",
    title: "Nourishing Dreams",
    description: "How our meal program helped Ram's family overcome food insecurity and focus on their children's future.",
    category: "Food Security"
  },
  {
    image: "/images/community_healthcare.jpg",
    title: "Healthcare for All",
    description: "The story of a community that gained access to basic healthcare through our medical camps.",
    category: "Healthcare"
  },
  {
    image: "/images/happy_community.jpg",
    title: "Building Communities",
    description: "Witness how collective effort transformed a struggling neighborhood into a thriving community.",
    category: "Community"
  }
]

export default function StorySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Heart Warming Stories Inspiring Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real stories of hope, resilience, and transformation from the communities we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-center space-y-4">
                {/* Image Container */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  {/* <div className="absolute inset-0 rounded-md border-2 border-green-200 group-hover:border-green-400 transition-colors duration-300" /> */}
                  <div className="absolute inset-2 rounded-sm overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Category Badge */}
                  {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 text-nowrap rounded-full">
                    {story.category}
                  </div> */}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {story.description}
                  </p>
                </div>

                {/* Read More Link */}
                {/* <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Read Full Story
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

