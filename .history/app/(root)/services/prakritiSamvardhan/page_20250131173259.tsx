"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sprout,
  TreePine,
  Leaf,
  CloudRain,
  Users,
  GraduationCap,
  CheckCircle2,
  Clock,
  Briefcase,
  IndianRupee,
  BarChart,
  FileText,
  LineChart,
} from "lucide-react";
import { ProgramsAndInitiatives } from "@/app/components/ProgramsAndInitiatives";
import Image from "next/image";

const objectives = [
  {
    title: "Promote Sustainable Farming",
    description:
      "Encourage local farmers to adopt eco-friendly farming practices such as agroforestry, organic farming, and crop rotation.",
    icon: Sprout,
  },
  {
    title: "Tree Plantation for Ecosystem Restoration",
    description:
      "Plant native trees to restore degraded land, improve local ecosystems, and enhance biodiversity.",
    icon: TreePine,
  },
  {
    title: "Improve Livelihoods",
    description:
      "Enhance farmers' income by diversifying crops with fruit trees, timber trees, and other tree-based products.",
    icon: Leaf,
  },
  {
    title: "Climate Change Mitigation",
    description:
      "Contribute to climate change mitigation by sequestering carbon through tree planting and sustainable farming techniques.",
    icon: CloudRain,
  },
  {
    title: "Soil and Water Conservation",
    description:
      "Implement practices to conserve soil and water, reduce erosion, and improve the quality of farmland.",
    icon: CloudRain,
  },
  {
    title: "Community Engagement and Education",
    description:
      "Engage local communities in the project and raise awareness about the benefits of combining agriculture with nature conservation.",
    icon: Users,
  },
];

const timeline = [
  {
    phase: "Phase 1: Community Engagement and Planning",
    duration: "1-2 months",
    details:
      "Engage local communities, identify suitable lands for agroforestry, and plan for tree planting activities.",
  },
  {
    phase: "Phase 2: Farmer Training and Awareness",
    duration: "3 months",
    details:
      "Conduct training programs on agroforestry, sustainable farming, and tree plantation.",
  },
  {
    phase: "Phase 3: Tree Plantation and Agroforestry Setup",
    duration: "6 months",
    details:
      "Begin tree plantation and implement agroforestry systems on selected farmlands.",
  },
  {
    phase: "Phase 4: Maintenance and Monitoring",
    duration: "Ongoing (12 months)",
    details:
      "Continue maintenance of tree plantations, assess the growth of trees and crops, and provide support to farmers.",
  },
  {
    phase: "Phase 5: Community Education and Expansion",
    duration: "12 months",
    details:
      "Expand awareness programs, conduct more tree-planting drives, and involve additional farmers in the project.",
  },
];

const outcomes = [
  {
    metric: "200+",
    label: "Farmers Adopting Agroforestry",
    description:
      "Improving crop yields and soil fertility through sustainable practices.",
  },
  {
    metric: "50,000",
    label: "Trees Planted",
    description: "Leading to restored habitats and enhanced biodiversity.",
  },
  {
    metric: "5,000+",
    label: "Community Members Engaged",
    description:
      "Involved in environmental activities and sustainable farming initiatives.",
  },
  {
    metric: "Significant",
    label: "Carbon Sequestration",
    description: "Through tree planting and sustainable farming practices.",
  },
];

const programs = [
  {
    title: "Tree Plantation",
    description:
      "Tree planting is considered one of the most attractive, eco-friendly activities that can help the planet when done properly.Due to the alarmingly increasing global warming and deforestation, there is a need to plant more trees and have a greener environment. That is why our Chandra Foundation keeps planting trees at various places from time to time under Project Prakriti Samvardhan.",
    image: "/images/planting_trees.jpeg",
    targetAudience: "Local communities, schools, and public spaces",
    impact: [
      {
        title: "Environmental Impact",
        items: [
          "Carbon dioxide absorption and oxygen production",
          "Air pollution reduction",
          "Soil conservation and erosion prevention",
          "Water cycle regulation",
          "Biodiversity support",
        ],
      },
      {
        title: "Social and Economic Impact",
        items: [
          "Improved aesthetics and property values",
          "Energy conservation through shading",
          "Food source (fruit and nut trees)",
          "Mental health benefits and stress reduction",
          "Educational opportunities for environmental awareness",
        ],
      },
    ],
  },
];

export default function PrakritiSamvardhanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/planting_trees.jpeg"
          alt="PrakritiSamvardhan - Nature Nurturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              PrakritiSamvardhan
            </h1>
            <p className="text-xl md:text-2xl font-light">Nature Nurturing</p>
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
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Project Summary
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The PrakritiSamvardhan project is a holistic approach to integrate
            tree planting with sustainable farming practices to restore
            ecosystems, improve soil health, combat climate change, and enhance
            biodiversity. This initiative aims to empower local communities by
            promoting environmentally friendly agricultural practices, tree
            plantation, and fostering a deeper connection between farming and
            nature conservation.
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Project Objectives
            </h2>
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
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {objective.title}
                </h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Target Audience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Sprout,
                title: "Farmers",
                description:
                  "Local farmers engaged in traditional farming practices who need support in adopting sustainable techniques.",
              },
              {
                icon: Users,
                title: "Local Communities",
                description:
                  "Communities in rural areas that rely on agriculture for their livelihood and are affected by environmental degradation.",
              },
              {
                icon: GraduationCap,
                title: "Students and Youth Groups",
                description:
                  "Educating younger generations about sustainable farming, agroforestry, and tree plantation.",
              },
              {
                icon: Briefcase,
                title: "Environmental Organizations",
                description:
                  "NGOs, environmental groups, and government agencies that can collaborate in fostering nature conservation.",
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
                <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Project Activities
            </h2>
          </motion.div>

          <Tabs defaultValue="training" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="training">Farmer Training</TabsTrigger>
              <TabsTrigger value="plantation">Tree Plantation</TabsTrigger>
              <TabsTrigger value="conservation">Conservation</TabsTrigger>
            </TabsList>
            <TabsContent value="training" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Farmer Training and Capacity Building
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Workshops and Training Sessions
                      </p>
                      <p className="text-gray-600">
                        Organize sessions on agroforestry, sustainable farming
                        practices, organic farming, crop rotation, and soil
                        conservation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Resource Provision
                      </p>
                      <p className="text-gray-600">
                        Provide farmers with seeds, tools, and knowledge on
                        implementing agroforestry systems.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="plantation" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Tree Plantation and Ecosystem Restoration
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Land Identification
                      </p>
                      <p className="text-gray-600">
                        Identify degraded or underutilized lands suitable for
                        tree plantation and agroforestry systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Native Tree Planting
                      </p>
                      <p className="text-gray-600">
                        Collaborate with local farmers and communities to plant
                        a variety of native and fruit-bearing trees.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="conservation" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Soil and Water Conservation
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Soil Conservation Methods
                      </p>
                      <p className="text-gray-600">
                        Train farmers on soil conservation methods such as
                        mulching, contour farming, and cover cropping.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Water-Saving Techniques
                      </p>
                      <p className="text-gray-600">
                        Implement water-saving irrigation techniques, including
                        drip irrigation, rainwater harvesting, and efficient
                        watering systems.
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Project Timeline
            </h2>
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
                  <span className="text-sm font-medium text-green-700 text-center">
                    {phase.duration}
                  </span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {phase.phase}
                  </h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Budget Estimate
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-green-800">
                      Item
                    </th>
                    <th className="text-right py-2 font-semibold text-green-800">
                      Cost (INR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Farmer Training and Capacity Building",
                    "Tree Plantation and Maintenance",
                    "Agroforestry System Implementation",
                    "Soil and Water Conservation Programs",
                    "Environmental Education and Outreach",
                    "Monitoring and Evaluation",
                    "Staffing and Operational Costs",
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
              Note: This budget is an estimate and may vary based on local
              conditions and resources.
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Project Sustainability
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Community Ownership",
                description:
                  "Involving local farmers and communities in the planning and implementation stages will ensure long-term ownership and commitment to the project's goals.",
              },
              {
                icon: GraduationCap,
                title: "Capacity Building",
                description:
                  "By training farmers in sustainable farming techniques and agroforestry, we are empowering them with the skills to maintain the project beyond its duration.",
              },
              {
                icon: IndianRupee,
                title: "Economic Incentives",
                description:
                  "The introduction of fruit and timber-bearing trees will provide farmers with additional income streams, motivating them to continue practicing agroforestry.",
              },
              {
                icon: LineChart,
                title: "Ongoing Monitoring",
                description:
                  "Continuous monitoring of tree plantations, soil health, and water conservation will allow for adaptive management and ensure the project's sustainability.",
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
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Monitoring and Evaluation
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                icon: TreePine,
                title: "Tree Plantation Success Rates",
                description:
                  "Regular checks will be conducted to assess the survival and growth of trees and determine the effectiveness of the agroforestry system.",
              },
              {
                icon: CloudRain,
                title: "Soil and Water Health",
                description:
                  "Soil health will be monitored to evaluate the impact of sustainable farming practices and tree planting on soil fertility and water retention.",
              },
              {
                icon: FileText,
                title: "Farmer Feedback",
                description:
                  "Collect feedback from farmers on the improved crop yields, income generation, and their satisfaction with agroforestry methods.",
              },
              {
                icon: BarChart,
                title: "Environmental Impact",
                description:
                  "Conduct biodiversity assessments and track the improvement in local ecosystems and wildlife activity due to the project.",
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
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {item.title}
                  </h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Expected Outcomes
            </h2>
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
                <div className="text-3xl font-bold text-green-700 mb-2">
                  {outcome.metric}
                </div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">
                  {outcome.label}
                </h3>
                <p className="text-gray-600">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs and Initiatives */}
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Support Our Mission
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join us in our mission to promote sustainable farming and restore
              nature. Your support can make a significant difference in creating
              a greener, more sustainable future for our planet.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Volunteer With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
