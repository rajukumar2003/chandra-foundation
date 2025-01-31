"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  GraduationCap,
  Users,
  Target,
  BarChart,
  CheckCircle2,
  Clock,
  UserCheck,
  HeartHandshake,
  FileText,
  LineChart,
  Building,
} from "lucide-react"
import Image from "next/image"

const objectives = [
  {
    title: "Skill Development",
    description:
      "Provide skill-building programs in key sectors such as manufacturing, information technology, healthcare, and entrepreneurship.",
    icon: GraduationCap,
  },
  {
    title: "Youth Empowerment",
    description: "Equip young people with the skills needed for entering the workforce or becoming self-employed.",
    icon: Users,
  },
  {
    title: "Women's Economic Empowerment",
    description:
      "Create equal opportunities for women to acquire skills that can help them access better employment opportunities or start their own businesses.",
    icon: HeartHandshake,
  },
  {
    title: "Job Placement and Linkages",
    description:
      "Establish connections with local businesses, industries, and enterprises to facilitate job placements for trained individuals.",
    icon: Briefcase,
  },
  {
    title: "Entrepreneurship Promotion",
    description:
      "Encourage and support aspiring entrepreneurs with business development training, access to microfinancing, and mentorship programs.",
    icon: Target,
  },
  {
    title: "Community Engagement",
    description:
      "Engage local communities in the identification of key skills required in their regions and sectors, ensuring training programs align with market needs.",
    icon: Users,
  },
]

const timeline = [
  {
    phase: "Phase 1: Program Design and Preparation",
    duration: "2 months",
    details:
      "Develop training curriculum, recruit trainers, and set up partnerships with local businesses and organizations.",
  },
  {
    phase: "Phase 2: Skill Training and Workshops",
    duration: "6 months",
    details: "Implement the skill development programs and entrepreneurship workshops.",
  },
  {
    phase: "Phase 3: Job Placement and Mentorship",
    duration: "3 months",
    details: "Facilitate job placements, offer career services, and provide mentorship for entrepreneurs.",
  },
  {
    phase: "Phase 4: Monitoring and Evaluation",
    duration: "Ongoing",
    details: "Track participants' progress and provide ongoing support, making adjustments to the program as needed.",
  },
  {
    phase: "Phase 5: Community Outreach and Expansion",
    duration: "Ongoing",
    details: "Expand the program to more communities based on the success of the initial phases.",
  },
]

const outcomes = [
  {
    metric: "1,000+",
    label: "Individuals Trained",
    description: "In high-demand sectors, including IT, healthcare, and hospitality.",
  },
  {
    metric: "500+",
    label: "Job Placements",
    description: "Individuals successfully placed in full-time employment or internships.",
  },
  {
    metric: "100",
    label: "New Businesses",
    description: "Established, creating jobs and contributing to local economic growth.",
  },
  {
    metric: "300",
    label: "Women Empowered",
    description: "Through skills training and entrepreneurship support.",
  },
]

export default function KarmaVikasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="KarmaVikas - Development of Work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">KarmaVikas</h1>
            <p className="text-xl md:text-2xl font-light">Development of Work</p>
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
            The "KarmaVikas" project is designed to address the growing issue of unemployment and underemployment in underserved communities by providing targeted skill development programs. The project aims to equip individuals with market-relevant skills, enhance their employability, and connect them with sustainable job opportunities in various sectors. The focus will be on empowering youth, women, and marginalized groups to build a better future through enhanced skills and employment prospects.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Youth",
                description: "Especially young individuals who are unemployed or underemployed, including those who have dropped out of school or faced challenges in accessing formal education.",
              },
              {
                icon: HeartHandshake,
                title: "Women",
                description: "Particularly those from marginalized communities, who need support to gain financial independence through employment or entrepreneurship.",
              },
              {
                icon: UserCheck,
                title: "Unemployed Adults",
                description: "Individuals in rural or low-income areas who need retraining or upskilling to access better employment opportunities.",
              },
              {
                icon: Building,
                title: "Small and Medium Enterprises (SMEs)",
                description: "Local businesses and industries seeking skilled labor to boost productivity and development.",
              },
              {
                icon: Target,
                title: "Entrepreneurs",
                description: "Aspiring entrepreneurs looking to start their own businesses with the support of training and microfinance options.",
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

          <Tabs defaultValue="training" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="training">Skill Development</TabsTrigger>
              <TabsTrigger value="placement">Job Placement</TabsTrigger>
              <TabsTrigger value="entrepreneurship">Entrepreneurship</TabsTrigger>
            </TabsList>
            <TabsContent value="training" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Skill Development Training Programs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Sector-specific Training</p>
                      <p className="text-gray-600">
                        Organize short-term and long-term training programs in key sectors such as information technology (IT), healthcare, construction, hospitality, and textiles.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Soft Skills Development</p>
                      <p className="text-gray-600">
                        Courses will include both technical and soft skills, such as communication, teamwork, leadership, and digital literacy.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="placement" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Job Placement Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Industry Partnerships</p>
                      <p className="text-gray-600">
                        Establish partnerships with local businesses, government agencies, and large enterprises to secure job placements for trained individuals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Job Readiness Programs</p>
                      <p className="text-gray-600">
                        Provide career counseling, resume writing, interview preparation, and job search strategies to help candidates be job-ready.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="entrepreneurship" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Entrepreneurship Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Business Development Training</p>
                      <p className="text-gray-600">
                        Offer entrepreneurship training programs to individuals interested in starting their own businesses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Mentorship an<cut_off_point>
div>
                      <p className="font-medium text-gray-800">Mentorship an
</cut_off_point>

d Financial Support</p>
                      <p className="text-gray-600">
                        Provide mentorship through experienced entrepreneurs and facilitate access to microfinance and small business loans to encourage start-ups and small businesses in local areas.
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
                  <Clock className="w-8 h-8 text-blue-600 mb-2" />
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
                    <th className="text-right py-2 font-semibold text-blue-800">Cost (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Skill Development Training Programs",
                    "Job Placement and Career Services",
                    "Entrepreneurship Support & Microfinance",
                    "Women's Empowerment Programs",
                    "Monitoring, Evaluation, and Reporting",
                    "Administrative Costs and Staff",
                    "Community Outreach and Engagement",
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
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Sustainability</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: "Partnerships with Local Businesses",
                description:
                  "Collaboration with local enterprises and industries for job placements and support ensures the program's relevance to the local job market and its long-term viability.",
              },
              {
                icon: Target,
                title: "Self-sustaining Entrepreneurship",
                description:
                  "By empowering individuals with entrepreneurship skills and microfinance opportunities, the project will encourage self-employment, reducing long-term dependency on external support.",
              },
              {
                icon: GraduationCap,
                title: "Ongoing Training and Alumni Support",
                description:
                  "Graduates of the training programs can continue to receive guidance, mentoring, and resources even after completing the program, which will increase long-term success rates.",
              },
              {
                icon: Users,
                title: "Public and Private Sector Involvement",
                description:
                  "By involving local governments, private companies, and non-profit organizations, the project can secure long-term funding, technical support, and resources.",
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
                icon: BarChart,
                title: "Tracking Employment Outcomes",
                description:
                  "Monitor the number of individuals placed in jobs, their retention rates, and the sectors they are employed in.",
              },
              {
                icon: Target,
                title: "Entrepreneurship Success Rates",
                description:
                  "Track the number of businesses started, their sustainability, and their impact on the local economy.",
              },
              {
                icon: FileText,
                title: "Feedback from Beneficiaries",
                description:
                  "Conduct surveys and interviews with participants to assess the quality and relevance of training programs.",
              },
              {
                icon: LineChart,
                title: "Impact Assessment",
                description:
                  "Regularly assess the overall impact of the program on poverty reduction, economic independence, and community development.",
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
              Join us in our mission to empower individuals through skill development and create sustainable employment opportunities. Your support can make a significant difference in transforming lives and building stronger communities.
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

