"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  BookOpen,
  Baby,
  WormIcon as Virus,
  Brain,
  Building,
  Users,
  Stethoscope,
  Calendar,
  BarChartIcon as ChartBar,
  FileText,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

const objectives = [
  {
    title: "Improve Access to Basic Healthcare",
    description:
      "Provide essential health services to underserved populations, including primary care, maternal and child health services, and vaccinations.",
    icon: Heart,
  },
  {
    title: "Preventive Health and Education",
    description: "Raise awareness about hygiene, nutrition, disease prevention, and healthy lifestyle choices.",
    icon: BookOpen,
  },
  {
    title: "Maternal and Child Health",
    description:
      "Focus on reducing maternal and child mortality rates by providing antenatal care, skilled birth attendants, and postnatal care.",
    icon: Baby,
  },
  {
    title: "Combat Infectious Diseases",
    description:
      "Implement vaccination drives and public health campaigns to prevent and control common infectious diseases.",
    icon: Virus,
  },
  {
    title: "Mental Health Awareness",
    description:
      "Raise awareness about mental health issues, reduce stigma, and provide support for mental health services.",
    icon: Brain,
  },
  {
    title: "Strengthen Local Healthcare Infrastructure",
    description: "Build capacity in local healthcare facilities through training, equipment, and resources.",
    icon: Building,
  },
]

const timeline = [
  {
    phase: "Phase 1: Planning & Preparation",
    duration: "2 months",
    details: "Community assessment, partnership development, resource mobilization.",
  },
  {
    phase: "Phase 2: Implementation",
    duration: "12 months",
    details: "Launch mobile health clinics, health education campaigns, maternal health programs.",
  },
  {
    phase: "Phase 3: Monitoring & Evaluation",
    duration: "6 months",
    details: "Assess the effectiveness of health interventions, adjust based on feedback.",
  },
  {
    phase: "Phase 4: Sustainability",
    duration: "6 months",
    details: "Strengthen local healthcare infrastructure and partnerships for long-term impact.",
  },
]

const outcomes = [
  {
    metric: "10,000+",
    label: "Individuals Reached",
    description: "Receive medical consultations, vaccinations, and maternal care services",
  },
  {
    metric: "80%",
    label: "Increased Awareness",
    description: "Community members report increased knowledge about disease prevention and healthy living",
  },
  {
    metric: "500+",
    label: "Mental Health Support",
    description: "Individuals receive counseling and mental health support through the program",
  },
  {
    metric: "Reduced",
    label: "Mortality Rates",
    description: "Decrease in maternal and child mortality rates in targeted communities",
  },
]

export default function AyushKalyanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="AyushKalyan - Well-being of Life"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">AyushKalyan</h1>
            <p className="text-xl md:text-2xl font-light">Well-being of Life</p>
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
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Summary</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The "AyushKalyan" project aims to address healthcare gaps in underserved and marginalized communities. The
            initiative will provide access to basic healthcare services, improve health awareness, and empower
            individuals to take charge of their health through education, preventive care, and treatment programs. This
            project focuses on improving maternal and child health, combating infectious diseases, and promoting mental
            health, with an emphasis on equity, accessibility, and community involvement.
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Objectives</h2>
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
                <objective.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{objective.title}</h3>
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Target Audience</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Low-income Communities",
                description: "Marginalized populations in rural and underserved urban areas",
              },
              {
                icon: Baby,
                title: "Women and Children",
                description: "Those in need of maternal and child health services",
              },
              {
                icon: Users,
                title: "Elderly Individuals",
                description: "Those requiring specialized care and preventive services",
              },
              {
                icon: Users,
                title: "Youth and Adolescents",
                description: "In need of education on mental health and disease prevention",
              },
              {
                icon: Stethoscope,
                title: "Local Healthcare Providers",
                description: "To be trained in delivering quality care",
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
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">{item.title}</h3>
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Activities</h2>
          </motion.div>

          <Tabs defaultValue="mobile-clinics" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="mobile-clinics">Mobile Clinics</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="maternal">Maternal Care</TabsTrigger>
              <TabsTrigger value="infectious">Infectious Diseases</TabsTrigger>
              <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
              <TabsTrigger value="capacity">Capacity Building</TabsTrigger>
            </TabsList>
            <TabsContent value="mobile-clinics" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Mobile Health Clinics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Deploy mobile health units to provide essential services in remote and underserved areas</p>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Perform screenings for common diseases like hypertension, diabetes, and tuberculosis</p>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Health Education and Awareness Campaigns</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Conduct community workshops on sanitation, nutrition, vaccination, and general wellness</p>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>
                      Distribute educational materials in local languages on preventive measures for common diseases
                    </p>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="maternal" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Maternal and Child Health Programs</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Baby className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Provide antenatal care services, including screenings, counseling, and supplements</p>
                  </li>
                  <li className="flex items-start">
                    <Baby className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Set up skilled birth attendant programs and implement postnatal care programs</p>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="infectious" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Infectious Disease Prevention</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Virus className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Organize vaccination campaigns targeting diseases such as measles, polio, and tuberculosis</p>
                  </li>
                  <li className="flex items-start">
                    <Virus className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Educate on hygiene, water sanitation, and prevention of vector-borne diseases</p>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="mental-health" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Mental Health Awareness and Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Brain className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />

                    <p>Develop and implement community-based mental health programs and workshops</p>
                  </li>
                  <li className="flex items-start">
                    <Brain className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Establish helplines and counseling services for mental health support</p>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="capacity" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Capacity Building for Local Healthcare Providers
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Train healthcare professionals on basic healthcare delivery and disease prevention</p>
                  </li>
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <p>Provide necessary medical equipment and supplies to local healthcare centers</p>
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Timeline</h2>
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
                  <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-blue-700 text-center">{phase.duration}</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{phase.phase}</h3>
                  <p className="text-gray-600">{phase.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Estimate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Budget Estimate</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-blue-800">Item</th>
                    <th className="text-right py-2 font-semibold text-blue-800">Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Personnel (Doctors, Nurses, Trainers)",
                    "Mobile Health Units",
                    "Healthcare Supplies and Medications",
                    "Health Education Materials",
                    "Vaccination Campaigns",
                    "Mental Health Programs",
                    "Capacity Building for Providers",
                    "Monitoring and Evaluation",
                    "Community Outreach Activities",
                    "Contingency Fund",
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 text-gray-600">{item}</td>
                      <td className="py-2 text-right text-gray-600">TBD</td>
                    </tr>
                  ))}
                  <tr className="font-semibold">
                    <td className="py-2 text-blue-800">Total</td>
                    <td className="py-2 text-right text-blue-800">TBD</td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Note: This budget is an estimate and can be adjusted based on local needs and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Sustainability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Sustainability</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Community Engagement",
                description:
                  "Involve community members in health education and decision-making to foster a sense of ownership.",
              },
              {
                icon: Building,
                title: "Capacity Building",
                description:
                  "Train local healthcare providers to ensure healthcare services remain accessible after the project ends.",
              },
              {
                icon: Stethoscope,
                title: "Partnerships with Local Health Authorities",
                description:
                  "Collaborate with local and national health authorities to integrate the project into existing healthcare systems.",
              },
              {
                icon: TrendingUp,
                title: "Income-Generating Activities",
                description: "Engage in partnerships with local businesses to fund certain aspects of the program.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4 text-center" />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring and Evaluation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Monitoring and Evaluation</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                icon: ChartBar,
                title: "Health Metrics",
                description:
                  "Track the number of individuals reached by mobile clinics, vaccinations administered, and improvements in maternal and child health indicators.",
              },
              {
                icon: FileText,
                title: "Surveys and Feedback",
                description:
                  "Regularly collect feedback from community members and healthcare providers to assess the effectiveness of the program and make necessary adjustments.",
              },
              {
                icon: TrendingUp,
                title: "Annual Review",
                description:
                  "Perform an annual review to measure the impact of the project on local health outcomes and adjust strategies for continued improvement.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="w-12 shrink-0">
                  <item.icon className="w-12 h-12 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Expected Outcomes</h2>
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
                <div className="text-3xl font-bold text-blue-700 mb-2">{outcome.metric}</div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{outcome.label}</h3>
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Support Our Mission</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join us in our mission to improve healthcare access and awareness for underserved communities. Your
              support can make a significant difference in the lives of countless individuals.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Volunteer With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

