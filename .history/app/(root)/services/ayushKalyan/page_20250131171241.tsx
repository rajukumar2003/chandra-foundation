"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  HeartPulse,
  Stethoscope,
  Syringe,
  Baby,
  Brain,
  ShieldCheck,
  Users,
  CheckCircle2,
  Clock,
  Briefcase,
  IndianRupee,
  BarChart,
  FileText,
  LineChart,
} from "lucide-react"
import { ProgramsAndInitiatives } from "@/components/ProgramsAndInitiatives"
import Image from "next/image"

const objectives = [
  {
    title: "Improve Access to Basic Healthcare",
    description: "Provide essential health services, including primary care, maternal and child health services, and vaccinations.",
    icon: HeartPulse,
  },
  {
    title: "Preventive Health and Education",
    description: "Raise awareness about hygiene, nutrition, disease prevention, and healthy lifestyle choices.",
    icon: ShieldCheck,
  },
  {
    title: "Maternal and Child Health",
    description: "Reduce maternal and child mortality rates by providing antenatal care, skilled birth attendants, and postnatal care.",
    icon: Baby,
  },
  {
    title: "Combat Infectious Diseases",
    description: "Implement vaccination drives and public health campaigns to prevent and control common infectious diseases.",
    icon: Syringe,
  },
  {
    title: "Mental Health Awareness",
    description: "Raise awareness about mental health issues, reduce stigma, and provide support for mental health services.",
    icon: Brain,
  },
  {
    title: "Strengthen Local Healthcare Infrastructure",
    description: "Build capacity in local healthcare facilities through training, equipment, and resources.",
    icon: Stethoscope,
  },
]

const timeline = [
  {
    phase: "Phase 1: Planning & Preparation",
    duration: "2 months",
    details: "Community assessment, partnership development, and resource mobilization.",
  },
  {
    phase: "Phase 2: Implementation",
    duration: "12 months",
    details: "Launch mobile health clinics, health education campaigns, and maternal health programs.",
  },
  {
    phase: "Phase 3: Monitoring & Evaluation",
    duration: "6 months",
    details: "Assess the effectiveness of health interventions and adjust based on feedback.",
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
    description: "Medical consultations, vaccinations, and maternal care services provided.",
  },
  {
    metric: "500+",
    label: "Mental Health Support",
    description: "Individuals receiving counseling and mental health support.",
  },
  {
    metric: "80%",
    label: "Health Awareness",
    description: "Community members reporting increased knowledge about disease prevention.",
  },
  {
    metric: "50+",
    label: "Trained Providers",
    description: "Local healthcare providers trained to deliver quality care.",
  },
]

const programs = [
    {
      title: "Free Eye Camp",
      description:
        "India has the world's largest blind population, with an estimated 12 million blind people. However, 80% of these can be corrected or prevented, mostly resulting from uncorrected refractive errors such as nearsightedness and farsightedness, and cataracts. Eye screenings and surgery play a vital role in preventing blindness, and with limited access to eye specialists, low-income Indian communities are at a higher risk of eye problems and blindness. We, Chandra Foundation, go to villages and provide free eye screenings to people, supported by our partner.",
      image: "/images/ayushkalyan-eye-camp.jpg",
      targetAudience: "Children, women and old people",
      impact: [
        {
          title: "Short-term benefits",
          items: [
            "Improved vision: Correcting refractive errors, cataracts, and other issues.",
            "Enhanced quality of life: Restoring independence, mobility, and daily functioning.",
            "Economic benefits: Reduced medical expenses, increased productivity.",
            "Increased awareness: Education on eye health, hygiene, and disease prevention.",
          ],
        },
        {
          title: "Long-term benefits",
          items: [
            "Reduced blindness: Early detection and treatment prevent permanent vision loss.",
            "Improved mental health: Reduced stress, anxiety, and depression related to vision loss.",
            "Enhanced social interactions: Restored ability to engage with family, community.",
            "Economic empowerment: Increased employability, income potential.",
          ],
        },
      ],
    },
  ]

export default function AyushKalyanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ayushKlyaan23.jpg"
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
          <h2 className="text-3xl font-bold text-green-800 mb-6">Project Summary</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The AyushKalyan project aims to address healthcare gaps in underserved and marginalized communities. This initiative provides access to basic healthcare services, improves health awareness, and empowers individuals to take charge of their health through education, preventive care, and treatment programs. By focusing on maternal and child health, combating infectious diseases, and promoting mental health, we strive to create a healthier, more equitable future for all.
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
                title: "Marginalized Communities",
                description: "Low-income populations in rural and underserved urban areas.",
              },
              {
                icon: Baby,
                title: "Women and Children",
                description: "Individuals in need of maternal and child health services.",
              },
              {
                icon: HeartPulse,
                title: "Elderly Individuals",
                description: "Older adults requiring specialized care and preventive services.",
              },
              {
                icon: Brain,
                title: "Youth and Adolescents",
                description: "Young people in need of mental health education and disease prevention awareness.",
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

          <Tabs defaultValue="clinics" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="clinics">Mobile Clinics</TabsTrigger>
              <TabsTrigger value="education">Health Education</TabsTrigger>
              <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
            </TabsList>
            <TabsContent value="clinics" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Mobile Health Clinics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Primary Care Services</p>
                      <p className="text-gray-600">
                        Provide essential health services, including consultations, vaccinations, and maternal health checkups.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Disease Screenings</p>
                      <p className="text-gray-600">
                        Conduct screenings for hypertension, diabetes, and tuberculosis in underserved areas.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Health Education Campaigns</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Workshops and Seminars</p>
                      <p className="text-gray-600">
                        Educate communities on hygiene, nutrition, and disease prevention through interactive sessions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Educational Materials</p>
                      <p className="text-gray-600">
                        Distribute pamphlets and posters in local languages to promote healthy living.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="mental-health" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Mental Health Programs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Counseling Services</p>
                      <p className="text-gray-600">
                        Provide mental health support through helplines and community-based counseling.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Awareness Workshops</p>
                      <p className="text-gray-600">
                        Conduct workshops on stress management, coping mechanisms, and reducing stigma around mental health.
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">Budget Estimate</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-green-800">Item</th>
                    <th className="text-right py-2 font-semibold text-green-800">Cost (USD)</th>
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
                    <td className="py-2 text-green-800">Total</td>
                    <td className="py-2 text-right text-green-800">TBD</td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <p className="text-sm text-gray-500 mt-4">
              Note: This budget is an estimate and may vary based on local conditions and resources.
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">Project Sustainability</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Community Engagement",
                description:
                  "Involve community members in health education and decision-making to foster ownership and long-term commitment.",
              },
              {
                icon: Briefcase,
                title: "Capacity Building",
                description:
                  "Train local healthcare providers to ensure continued access to quality care after the project ends.",
              },
              {
                icon: IndianRupee,
                title: "Partnerships with Local Authorities",
                description:
                  "Collaborate with local health authorities to integrate the project into existing healthcare systems.",
              },
              {
                icon: HeartPulse,
                title: "Income-Generating Activities",
                description:
                  "Partner with local businesses to fund health education materials and vaccination programs.",
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
                <item.icon className="w-12 h-12 text-green-600 mb-4 text-center" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">Monitoring and Evaluation</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                icon: BarChart,
                title: "Health Metrics",
                description:
                  "Track the number of individuals reached, vaccinations administered, and improvements in maternal and child health indicators.",
              },
              {
                icon: FileText,
                title: "Surveys and Feedback",
                description:
                  "Collect feedback from community members and healthcare providers to assess program effectiveness.",
              },
              {
                icon: LineChart,
                title: "Annual Review",
                description:
                  "Conduct an annual review to measure the project's impact and adjust strategies for improvement.",
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
                  <item.icon className="w-12 h-12 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
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
              Join us in our mission to improve healthcare access and ensure well-being for all. Your support can make a
              significant difference in the lives of underserved communities.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-blue-50">
                Volunteer With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}