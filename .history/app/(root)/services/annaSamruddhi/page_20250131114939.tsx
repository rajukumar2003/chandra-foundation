"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, Sprout, TruckIcon, BookOpen, Recycle, Store, Users, CheckCircle2, Clock } from "lucide-react"
import Image from "next/image"

const objectives = [
  {
    title: "Eradicate Hunger and Malnutrition",
    description: "Ensure access to nutritious food for communities facing food insecurity.",
    icon: Utensils,
  },
  {
    title: "Promote Sustainable Agriculture",
    description: "Support small-scale farmers and encourage sustainable farming practices to increase food production.",
    icon: Sprout,
  },
  {
    title: "Enhance Food Distribution Systems",
    description:
      "Strengthen food distribution networks to ensure that food reaches the most vulnerable populations in a timely manner.",
    icon: TruckIcon,
  },
  {
    title: "Raise Awareness on Nutrition",
    description:
      "Educate communities about the importance of balanced diets, healthy eating habits, and food preservation.",
    icon: BookOpen,
  },
  {
    title: "Reduce Food Waste",
    description: "Implement initiatives to reduce food loss and waste at the community level and among food suppliers.",
    icon: Recycle,
  },
  {
    title: "Support Local Food Systems",
    description:
      "Empower local communities by promoting local food systems and connecting farmers directly to markets.",
    icon: Store,
  },
]

const timeline = [
  {
    phase: "Phase 1: Needs Assessment & Planning",
    duration: "2 months",
    details: "Identify target communities, assess food security needs, and set up partnerships.",
  },
  {
    phase: "Phase 2: Implementation",
    duration: "12 months",
    details: "Begin food distribution, agricultural training, nutrition education, and food waste reduction programs.",
  },
  {
    phase: "Phase 3: Monitoring & Evaluation",
    duration: "6 months",
    details: "Track the progress of food distribution and agriculture programs, gather feedback.",
  },
  {
    phase: "Phase 4: Expansion & Sustainability",
    duration: "6 months",
    details: "Expand the program to additional communities and ensure sustainability by involving local stakeholders.",
  },
]

const outcomes = [
  {
    metric: "5,000+",
    label: "Food Aid Recipients",
    description: "Vulnerable individuals and families provided with direct food aid",
  },
  {
    metric: "500+",
    label: "Trained Farmers",
    description: "Small-scale farmers trained on sustainable agricultural techniques",
  },
  {
    metric: "10,000+",
    label: "Nutrition Education",
    description: "Individuals educated on healthy eating practices and proper food storage",
  },
  {
    metric: "10 tons",
    label: "Food Rescued",
    description: "Excess food rescued and redistributed annually",
  },
]

export default function AnnaSamruddhiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/annasamruddhi-hero.jpg"
          alt="AnnaSamruddhi - Abundance of Food"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">AnnaSamruddhi</h1>
            <p className="text-xl md:text-2xl font-light">Abundance of Food</p>
          </motion.div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">Project Summary</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The "AnnaSamruddhi" project aims to eradicate hunger and malnutrition by ensuring access to nutritious food
            for the most vulnerable communities. This initiative focuses on improving food security through sustainable
            agricultural practices, enhancing food distribution systems, and raising awareness about nutrition and food
            waste reduction. By working with local communities, government agencies, and other stakeholders, we seek to
            create a hunger-free world, empowering individuals to lead healthy, productive lives.
          </p>
        </motion.div>
      </section>

      {/* Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6">Project Objectives</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <objective.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6">Target Audience</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Vulnerable Communities",
                description: "Rural areas, urban slums, and conflict-affected regions facing food insecurity",
              },
              {
                icon: Sprout,
                title: "Small-scale Farmers",
                description: "Farmers lacking access to modern agricultural technologies and markets",
              },
              {
                icon: Utensils,
                title: "At-risk Groups",
                description: "Children and pregnant women at higher risk of malnutrition and food insecurity",
              },
              {
                icon: Store,
                title: "Local Food Suppliers",
                description: "Markets, food banks, and cooperatives that can improve food access",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <item.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6">Project Activities</h2>
          </motion.div>

          <Tabs defaultValue="distribution" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="distribution">Distribution</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="waste">Waste Reduction</TabsTrigger>
            </TabsList>
            <TabsContent value="distribution" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Food Distribution and Relief Programs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Regular Food Distribution</p>
                      <p className="text-gray-600">
                        Organize food distribution programs targeting communities with high levels of food insecurity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Community Kitchens</p>
                      <p className="text-gray-600">
                        Set up community kitchens or food banks to provide regular access to nutritious meals.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="agriculture" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Support for Sustainable Agriculture</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Farmer Training</p>
                      <p className="text-gray-600">
                        Provide training on sustainable farming techniques, including organic farming and water
                        conservation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Community Gardens</p>
                      <p className="text-gray-600">
                        Establish community gardens and urban farming initiatives to grow food locally.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Nutrition Education Campaigns</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Workshops and Seminars</p>
                      <p className="text-gray-600">
                        Conduct workshops on the importance of nutrition, proper food storage, and healthy eating
                        habits.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Educational Materials</p>
                      <p className="text-gray-600">
                        Develop and distribute materials on balanced diets and food preparation.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="waste" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Food Waste Reduction Programs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Food Rescue Programs</p>
                      <p className="text-gray-600">
                        Partner with local businesses to collect excess food for redistribution.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Awareness Campaigns</p>
                      <p className="text-gray-600">
                        Educate people on reducing food waste through portion control and preservation techniques.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6">Project Timeline</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="w-32 shrink-0 flex flex-col justify-center items-center">
                  <Clock className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium text-green-700 text-center">{phase.duration}</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{phase.phase}</h3>
                  <p className="text-gray-600">{phase.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6">Expected Outcomes</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">{outcome.metric}</div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">{outcome.label}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6">Support Our Mission</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join us in our mission to eradicate hunger and ensure food security for all. Your support can make a
              significant difference in the lives of vulnerable communities.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Volunteer With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

