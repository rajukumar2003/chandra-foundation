"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  GraduationCap,
  Users,
  Lightbulb,
  Handshake,
  BarChart,
  FileText,
  LineChart,
  CheckCircle2,
  Clock,
} from "lucide-react"
import { ProgramsAndInitiatives } from "@/app/components/ProgramsAndInitiatives"
import Image from "next/image"

const objectives = [
  {
    title: "Skill Development",
    description:
      "Provide skill-building programs in key sectors such as manufacturing, IT, healthcare, and entrepreneurship.",
    icon: GraduationCap,
  },
  {
    title: "Youth Empowerment",
    description:
      "Equip young people with the skills needed to enter the workforce or become self-employed.",
    icon: Users,
  },
  {
    title: "Women’s Economic Empowerment",
    description:
      "Create equal opportunities for women to acquire skills for better employment or entrepreneurship.",
    icon: Lightbulb,
  },
  {
    title: "Job Placement and Linkages",
    description:
      "Establish connections with local businesses and industries to facilitate job placements.",
    icon: Handshake,
  },
  {
    title: "Entrepreneurship Promotion",
    description:
      "Support aspiring entrepreneurs with training, microfinancing, and mentorship programs.",
    icon: Briefcase,
  },
  {
    title: "Community Engagement",
    description:
      "Engage local communities to identify key skills required in their regions and sectors.",
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
    details: "Implement skill development programs and entrepreneurship workshops.",
  },
  {
    phase: "Phase 3: Job Placement and Mentorship",
    duration: "3 months",
    details: "Facilitate job placements, offer career services, and provide mentorship for entrepreneurs.",
  },
  {
    phase: "Phase 4: Monitoring and Evaluation",
    duration: "Ongoing",
    details: "Track participants’ progress and provide ongoing support, making adjustments as needed.",
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
    description: "In high-demand sectors such as IT, healthcare, and hospitality.",
  },
  {
    metric: "500+",
    label: "Job Placements",
    description: "Individuals successfully placed in full-time employment or internships.",
  },
  {
    metric: "100+",
    label: "New Businesses",
    description: "Established, creating jobs and contributing to local economic growth.",
  },
  {
    metric: "300+",
    label: "Women Empowered",
    description: "Through skills training and entrepreneurship support.",
  },
]

const programs = [
    {
      title: "Skill Certification",
      description:
        "Skill development is crucial in today's rapidly evolving landscape, empowering individuals, organizations, and nations to thrive. By acquiring new skills, individuals enhance their employability, career prospects, and earning potential, while also fostering adaptability and job satisfaction. Organizations benefit from increased productivity, better employee retention, and improved competitiveness, driving innovation and effective leadership. Nations reap economic growth, reduced unemployment, and elevated standards of living, ultimately boosting global competitiveness. Skill development bridges the gap between education and employment, addressing the pressing issue of skill mismatch. Moreover, it enables individuals to navigate emerging industries, technologies, and workforce shifts, ensuring future-readiness. By prioritizing skill development, we unlock human potential, fuel economic progress, and cultivate a resilient, adaptable workforce capable of navigating the complexities of the 21st century.",
      image: "/images/karmavikas-skill-certification.jpg",
      targetAudience: "Unskilled people/labour",
      impact: [
        {
          title: "Impact",
          items: [
            "Boosts employability and career prospects.",
            "Enhances productivity and competitiveness.",
            "Fosters economic growth and innovation.",
            "Increases earning potential and job satisfaction.",
            "Bridges skill gaps and addresses unemployment.",
            "Prepares workforce for emerging industries and technologies.",
            "Elevates standard of living and global competitiveness",
          ],
        },
      ],
    },
  ]

export default function KarmaVikasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/karmaVikas1.png"
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
          <h2 className="text-3xl font-bold text-green-800 mb-6">Project Summary</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The KarmaVikas project is designed to address unemployment and underemployment in underserved communities by providing targeted skill development programs. This initiative aims to equip individuals with market-relevant skills, enhance their employability, and connect them with sustainable job opportunities. By empowering youth, women, and marginalized groups, we strive to build a better future through enhanced skills and employment prospects.
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
                title: "Youth",
                description:
                  "Unemployed or underemployed young individuals, including school dropouts and those lacking formal education.",
              },
              {
                icon: Lightbulb,
                title: "Women",
                description:
                  "Marginalized women seeking financial independence through employment or entrepreneurship.",
              },
              {
                icon: Briefcase,
                title: "Unemployed Adults",
                description:
                  "Individuals in rural or low-income areas needing retraining or upskilling for better employment.",
              },
              {
                icon: Handshake,
                title: "SMEs and Entrepreneurs",
                description:
                  "Small businesses and aspiring entrepreneurs seeking skilled labor or support for start-ups.",
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

          <Tabs defaultValue="training" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="training">Skill Training</TabsTrigger>
              <TabsTrigger value="placement">Job Placement</TabsTrigger>
              <TabsTrigger value="entrepreneurship">Entrepreneurship</TabsTrigger>
            </TabsList>
            <TabsContent value="training" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Skill Development Training Programs</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Technical and Soft Skills</p>
                      <p className="text-gray-600">
                        Provide training in IT, healthcare, construction, hospitality, and entrepreneurship, including communication and leadership skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Collaboration with Experts</p>
                      <p className="text-gray-600">
                        Partner with local training institutions and industry experts to deliver high-quality courses.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="placement" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Job Placement Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Partnerships with Employers</p>
                      <p className="text-gray-600">
                        Establish connections with local businesses and industries to secure job placements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Job Fairs and Drives</p>
                      <p className="text-gray-600">
                        Organize career fairs and job placement drives to connect employers and job seekers.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="entrepreneurship" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Entrepreneurship Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Business Development Training</p>
                      <p className="text-gray-600">
                        Offer training programs for aspiring entrepreneurs, including business planning and management.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Microfinance and Mentorship</p>
                      <p className="text-gray-600">
                        Provide access to microfinancing and mentorship to support new businesses.
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
                    <th className="text-right py-2 font-semibold text-green-800">Cost (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Skill Development Training Programs",
                    "Job Placement and Career Services",
                    "Entrepreneurship Support & Microfinance",
                    "Women&apos;s Empowerment Programs",
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
                icon: Handshake,
                title: "Partnerships with Local Businesses",
                description:
                  "Collaboration with local enterprises ensures the program&apos;s relevance to the job market and long-term viability.",
              },
              {
                icon: Briefcase,
                title: "Self-sustaining Entrepreneurship",
                description:
                  "Empowering individuals with entrepreneurship skills and microfinance reduces long-term dependency on external support.",
              },
              {
                icon: GraduationCap,
                title: "Ongoing Training and Alumni Support",
                description:
                  "Graduates receive continued guidance, mentoring, and resources to ensure long-term success.",
              },
              {
                icon: Users,
                title: "Public and Private Sector Involvement",
                description:
                  "Involving local governments and private companies secures long-term funding and resources.",
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
                title: "Tracking Employment Outcomes",
                description:
                  "Monitor the number of individuals placed in jobs, their retention rates, and the sectors they are employed in.",
              },
              {
                icon: LineChart,
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
                icon: CheckCircle2,
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

      <ProgramsAndInitiatives programs={programs} />

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
              Join us in our mission to empower individuals through skill development and employment opportunities. Your support can make a significant difference in creating sustainable livelihoods for underserved communities.
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