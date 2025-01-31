"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Users,
  Target,
  CheckCircle2,
  Clock,
  GraduationCap,
  School,
  Presentation,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";

const objectives = [
  {
    title: "Access to Education",
    description:
      "Provide basic education (literacy, numeracy, and life skills) to children in underserved communities.",
    icon: BookOpen,
  },
  {
    title: "Vocational Training",
    description:
      "Offer skill-building workshops and vocational training programs for older children and young adults.",
    icon: GraduationCap,
  },
  {
    title: "Teacher Training",
    description:
      "Provide professional development opportunities for local educators to enhance teaching methods.",
    icon: Presentation,
  },
  {
    title: "Community Engagement",
    description:
      "Involve local communities in the educational process to foster ownership and collaboration.",
    icon: HeartHandshake,
  },
  {
    title: "Promote Gender Equality",
    description:
      "Ensure equal access to education for both boys and girls, addressing barriers to female education.",
    icon: Users,
  },
  {
    title: "Sustainability",
    description:
      "Establish a model that can be replicated in other regions, ensuring long-term impact.",
    icon: Target,
  },
];

const timeline = [
  {
    phase: "Phase 1: Planning and Preparation",
    duration: "2 months",
    details:
      "Community mapping, partnership building, curriculum development, and resource mobilization.",
  },
  {
    phase: "Phase 2: Implementation",
    duration: "12 months",
    details:
      "Launch education programs, vocational training, and teacher development.",
  },
  {
    phase: "Phase 3: Monitoring & Evaluation",
    duration: "6 months",
    details:
      "Assessing the success of the program through evaluations and feedback.",
  },
  {
    phase: "Phase 4: Scaling and Sustainability",
    duration: "6 months",
    details:
      "Expand the model to other communities, ensuring long-term sustainability through community ownership.",
  },
];

const outcomes = [
  {
    metric: "80%",
    label: "School Enrollment",
    description:
      "Of children previously out of school will be enrolled in the program within the first year",
  },
  {
    metric: "70%",
    label: "Learning Improvement",
    description:
      "Of students achieving measurable improvement in literacy and numeracy",
  },
  {
    metric: "50%",
    label: "Employment Success",
    description:
      "Of youth who undergo vocational training will either find employment or start their own business",
  },
  {
    metric: "100%",
    label: "Community Support",
    description:
      "Active participation from community members in the educational process",
  },
];

export default function VidyaUdayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/education-hero.jpg"
          alt="VidyaUday - Rise of Knowledge"
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
              VidyaUday
            </h1>
            <p className="text-xl md:text-2xl font-light">Rise of Knowledge</p>
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Project Summary
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The "VidyaUday" project aims to address the educational needs of
            underprivileged children and young adults in marginalized
            communities. This initiative provides quality education, vocational
            training, and life skills development to those who are unable to
            access or afford formal education. By creating a supportive and
            accessible learning environment, the project strives to break the
            cycle of poverty and enable participants to pursue brighter futures.
          </p>
        </motion.div>
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
                icon: School,
                title: "Children",
                description:
                  "Aged 5-15 from marginalized communities who are out of school",
              },
              {
                icon: GraduationCap,
                title: "Youth",
                description:
                  "Aged 16-25 who lack access to vocational training and employment opportunities",
              },
              {
                icon: Presentation,
                title: "Local Teachers",
                description:
                  "Educators who will be upskilled to improve education quality",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Parents and Community Leaders to support their children's education",
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
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
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

          <Tabs defaultValue="education" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="vocational">Vocational</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Educational Workshops and Classes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Early Childhood Education
                      </p>
                      <p className="text-gray-600">
                        Implement foundational literacy and numeracy programs
                        for young children.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Basic Education
                      </p>
                      <p className="text-gray-600">
                        Provide classes in math, science, languages, and social
                        studies for older children.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Adult Education
                      </p>
                      <p className="text-gray-600">
                        Evening classes for adults who wish to complete their
                        basic education.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="vocational" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Vocational and Skills Development
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Practical Skills Training
                      </p>
                      <p className="text-gray-600">
                        Training in tailoring, carpentry, plumbing, and digital
                        literacy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Entrepreneurship Workshops
                      </p>
                      <p className="text-gray-600">
                        Focus on business management and soft skills
                        development.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="training" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Teacher Training and Capacity Building
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Professional Development
                      </p>
                      <p className="text-gray-600">
                        Sessions focusing on inclusive teaching strategies and
                        classroom management.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Technology Integration
                      </p>
                      <p className="text-gray-600">
                        Training on using technology effectively in the
                        classroom.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="community" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Community Engagement and Awareness
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Awareness Campaigns
                      </p>
                      <p className="text-gray-600">
                        Promoting the importance of education, especially for
                        girls.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Community Forums
                      </p>
                      <p className="text-gray-600">
                        Regular meetings to discuss educational needs and
                        progress.
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
                <div className="w-32 shrink-0 flex flex-col items-center">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {outcome.metric}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {outcome.label}
                </h3>
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Support Our Mission
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join us in our mission to provide quality education and create
              lasting change in the lives of underprivileged children and young
              adults.
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
