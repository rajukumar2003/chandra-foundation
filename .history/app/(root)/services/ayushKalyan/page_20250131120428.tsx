import Image from "next/image"
import { motion } from "framer-motion"
import {
  FireExtinguisherIcon as FirstAidKit,
  BookOpen,
  Baby,
  WormIcon as Virus,
  Brain,
  Building2,
  Users,
  PersonStandingIcon as OlderPerson,
  CheckCircle2,
  HeartHandshake,
  Briefcase,
  IndianRupee,
  BarChart,
  FileText,
  LineChart,
} from "lucide-react"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function AyushKalyan() {
  const objectives = [
    {
      title: "Improve Access to Basic Healthcare",
      description:
        "Provide essential health services to underserved populations, including primary care, maternal and child health services, and vaccinations.",
      icon: FirstAidKit,
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
      icon: Building2,
    },
  ]

  const targetAudience = [
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
      icon: OlderPerson,
      title: "Elderly Individuals",
      description: "Those requiring specialized care and preventive services",
    },
    {
      icon: Brain,
      title: "Youth and Adolescents",
      description: "In need of mental health education and disease prevention awareness",
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

  const budgetEstimateItems = [
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
  ]

  const projectSustainability = [
    {
      icon: HeartHandshake,
      title: "Community Engagement",
      description:
        "By involving community members in health education and decision-making, the program will foster a sense of ownership, making it more likely to be sustained.",
    },
    {
      icon: Users,
      title: "Capacity Building",
      description:
        "The training of local healthcare providers will ensure that healthcare services remain accessible after the project ends.",
    },
    {
      icon: Briefcase,
      title: "Partnerships with Local Health Authorities",
      description:
        "Collaboration with local and national health authorities will help integrate the project into existing healthcare systems and ensure its long-term impact.",
    },
    {
      icon: IndianRupee,
      title: "Income-Generating Activities",
      description:
        "Engage in partnerships with local businesses to fund certain aspects of the program, such as health education materials and vaccinations.",
    },
  ]

  const monitoringAndEvaluation = [
    {
      icon: BarChart,
      title: "Health Metrics",
      description:
        "Track the number of individuals reached by mobile clinics, the number of vaccinations administered, and improvements in maternal and child health indicators.",
    },
    {
      icon: FileText,
      title: "Surveys and Feedback",
      description:
        "Regularly collect feedback from community members and healthcare providers to assess the effectiveness of the program and make necessary adjustments.",
    },
    {
      icon: LineChart,
      title: "Annual Review",
      description:
        "Perform an annual review to measure the impact of the project on local health outcomes and adjust strategies for continued improvement.",
    },
  ]

  const outcomes = [
    {
      metric: "10,000+",
      label: "Healthcare Recipients",
      description: "Individuals receiving medical consultations, vaccinations, and maternal care services",
    },
    {
      metric: "30%",
      label: "Reduced Mortality",
      description: "Decrease in maternal and child mortality rates in targeted communities",
    },
    {
      metric: "80%",
      label: "Increased Awareness",
      description: "Community members reporting increased knowledge about disease prevention and healthy living",
    },
    {
      metric: "500+",
      label: "Mental Health Support",
      description: "Individuals receiving counseling and mental health support through the program",
    },
  ]

  return (
    <div>
      <Image
        src="/images/ayushkalyan-hero.jpg"
        alt="AyushKalyan - Well-being of Life"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">AyushKalyan</h1>
          <p className="text-xl md:text-2xl font-light">Well-being of Life</p>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-600 text-lg leading-relaxed">
          The "AyushKalyan" project aims to address healthcare gaps in underserved and marginalized communities. The
          initiative will provide access to basic healthcare services, improve health awareness, and empower individuals
          to take charge of their health through education, preventive care, and treatment programs. This project
          focuses on improving maternal and child health, combating infectious diseases, and promoting mental health,
          with an emphasis on equity, accessibility, and community involvement.
        </p>
      </div>
      {/* rest of the code */}
      <Tabs defaultValue="clinics">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="clinics">Mobile Clinics</TabsTrigger>
          <TabsTrigger value="education">Health Education</TabsTrigger>
          <TabsTrigger value="maternal">Maternal Care</TabsTrigger>
          <TabsTrigger value="mental">Mental Health</TabsTrigger>
        </TabsList>
        <TabsContent value="clinics" className="mt-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Mobile Health Clinics</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Essential Services</p>
                  <p className="text-gray-600">
                    Provide primary care, vaccinations, maternal health checkups, and general health consultations in
                    remote and underserved areas.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Health Screenings</p>
                  <p className="text-gray-600">
                    Perform screenings for common diseases like hypertension, diabetes, and tuberculosis.
                  </p>
                </div>
              </li>
            </ul>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

