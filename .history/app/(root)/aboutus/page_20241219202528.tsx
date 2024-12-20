'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { , ChevronRight } from 'lucide-react'

const timelineEvents = [
  { year: 2019, title: "Foundation Established", description: "Chandra Foundation was born from a vision to create lasting change." },
  { year: 2020, title: "First Education Program", description: "Launched our flagship education initiative, reaching 100 children." },
  { year: 2021, title: "Healthcare Outreach", description: "Expanded services to include mobile health clinics in rural areas." },
  { year: 2022, title: "Sustainability Project", description: "Initiated eco-friendly practices in 10 partner communities." },
  { year: 2023, title: "Award for Excellence", description: "Recognized nationally for our innovative approach to community development." }
]

const teamMembers = [
  { name: "Chandra Kumar", role: "Founder & President", image: "/images/founder.jpg", bio: "Visionary leader with 20 years of experience in social work." },
  { name: "Priya Sharma", role: "Education Director", image: "/images/team-member-1.jpg", bio: "Former teacher passionate about accessible education for all." },
  { name: "Rahul Mehta", role: "Healthcare Coordinator", image: "/images/team-member-2.jpg", bio: "Medical professional dedicated to improving rural healthcare." },
  { name: "Anita Desai", role: "Community Outreach", image: "/images/team-member-3.jpg", bio: "Experienced in building strong community partnerships." }
]

export default function AboutUsPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(teamMembers[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/about-us-hero.jpg"
          alt="Chandra Foundation team working in the community"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Chandra Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Empowering Communities, Transforming Lives
          </motion.p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Chandra Foundation, we are committed to empowering underprivileged communities through education, healthcare, and sustainable development. Our vision is a world where every individual has the opportunity to thrive and contribute to society, regardless of their background.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Education</h3>
                  <p className="text-gray-600">Providing quality education and skills training to children and young adults.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Healthcare</h3>
                  <p className="text-gray-600">Ensuring access to essential healthcare services in underserved areas.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Sustainability</h3>
                  <p className="text-gray-600">Promoting eco-friendly practices and sustainable livelihoods in communities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Founder's Story</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/images/founder.jpg"
                  alt="Chandra Kumar - Founder"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-green-700 mb-4">Chandra Kumar</h3>
                <p className="text-gray-700 mb-4">
                  Chandra Kumar's journey began in a small village where he witnessed firsthand the challenges faced by underprivileged communities. Driven by a passion to make a difference, he founded the Chandra Foundation in 2019 with a vision to empower individuals through education and sustainable development.
                </p>
                <p className="text-gray-700">
                  "I believe that every person has the potential to create positive change. Our foundation aims to provide the tools and opportunities necessary for individuals to build a better future for themselves and their communities." - Chandra Kumar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200" />
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-green-700">{event.year}</h3>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{event.title}</h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeTeamMember.name === member.name ? 'scale-105 shadow-lg' : 'scale-100 shadow'
                    }`}
                    onClick={() => setActiveTeamMember(member)}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-t-lg"
                    />
                    <div className="p-2 bg-white rounded-b-lg">
                      <h3 className="font-semibold text-green-700">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{activeTeamMember.name}</h3>
              <p className="text-gray-700 mb-4">{activeTeamMember.role}</p>
              <p className="text-gray-600">{activeTeamMember.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Impact & Recognition</h2>
          <Tabs defaultValue="impact" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="recognition">Recognition</TabsTrigger>
            </TabsList>
            <TabsContent value="impact">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <h3 className="text-4xl font-bold text-green-700">5,000+</h3>
                      <p className="text-gray-600">Children Educated</p>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-green-700">20</h3>
                      <p className="text-gray-600">Villages Supported</p>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-green-700">10,000+</h3>
                      <p className="text-gray-600">Medical Checkups</p>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700">
                    Our work has touched thousands of lives, bringing hope and opportunities to underserved communities. Through education, healthcare, and sustainable development initiatives, we've seen remarkable transformations in the areas we serve.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recognition">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold text-gray-800">National NGO Excellence Award 2022</h4>
                        <p className="text-gray-600">Recognized for our innovative approach to community development</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Featured in 'Changemakers' Documentary</h4>
                        <p className="text-gray-600">Our work featured in a national documentary showcasing impactful NGOs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-green-500 mt-1 mr-2" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Partnership with UNICEF</h4>
                        <p className="text-gray-600">Collaborated on a major education initiative in rural areas</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

           {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">Together, we can create lasting change and transform lives.</p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600">
              Volunteer
            </Button>
          </div>
        </div>
      </section>


    </div>
  )
}

