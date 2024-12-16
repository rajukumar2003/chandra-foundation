// app/page.tsx

import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import OurPrograms from "../components/OurPrograms";
import ImpactSection from "../components/ImpactSection"

// import About from "@/components/About";
// import Vision from "@/components/Vision";
// import Programs from "@/components/Programs";
// import Journey from "@/components/Journey";
// import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutUs />
      {/* <Vision /> */}
      <OurPrograms />
      <ImpactSection />
      <Journey />
      <CTA />
    </main>
  );
}

// components/Hero.tsx
// const Hero = () => {
//   return (
//     <div className="relative min-h-[90vh] bg-gradient-to-r from-blue-600 to-purple-600">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
//         <div className="absolute top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 relative">
//         <div className="flex flex-col lg:flex-row items-center justify-between pt-24 pb-16 gap-12">
//           <div className="flex-1 text-center lg:text-left">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//               Welcome to Chandra Foundation
//             </h1>
//             <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
//               Empowering lives through education, employment, and compassion
//               since 2019.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
//                 Support Us
//               </button>
//               <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </div>
//           <div className="flex-1 relative">
//             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="/hero-image.jpg"
//                 alt="Chandra Foundation in action"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// components/About.tsx
// const About = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           About Chandra & Foundation
//         </h2>
//         <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
//           <p>
//             We are proud to have a dream of helping the needy persons. As we all
//             know, in India, many of the population are living in poverty.
//             Statistics show that millions of children are uneducated and living
//             in hunger, poor health, as well as the number of children living
//             without a parent is increasing day by day.
//           </p>
//           <p className="font-semibold text-xl text-center">
//             Who would care for them if we don't start with ourselves?
//           </p>
//           <p>
//             This charity foundation started informally in July 2019 but was
//             registered in January 2020. From 2019, we tried to spend more time
//             with the people/children and understand their wishes and aspirations
//             in life. We requested people to donate their old clothes and
//             accessories. But that would not have been enough. Education and
//             Employment is the epicenter of development apart from one's basic
//             needs.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// components/Vision.tsx
// const Vision = () => {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="bg-white p-8 rounded-xl shadow-md">
//             <h3 className="text-2xl font-bold mb-4 text-blue-600">
//               Our Vision
//             </h3>
//             <p className="text-gray-700">
//               We expand the ideas and energy for helping the people so that with
//               assistance of my family, and with the support of my friends we are
//               able to make a better use of our resources.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-xl shadow-md">
//             <h3 className="text-2xl font-bold mb-4 text-purple-600">
//               Our Mission
//             </h3>
//             <p className="text-gray-700">
//               We will be committed to be the most effective and approachable for
//               people/children through the improvement of the care given to them
//               and the quality of their lives.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// components/Programs.tsx
const Programs = () => {
  const programs = [
    {
      title: "Education",
      description:
        "Providing quality education and learning resources to underprivileged children.",
      icon: "📚",
    },
    {
      title: "Employment",
      description:
        "Creating job opportunities and skill development programs for sustainable growth.",
      icon: "💼",
    },
    {
      title: "Basic Needs",
      description:
        "Ensuring access to essential resources and support for daily living.",
      icon: "🏠",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Focus Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-4xl mb-4 block">{program.icon}</span>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {program.title}
              </h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// components/Journey.tsx
const Journey = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {[
              {
                year: "July 2019",
                title: "Informal Beginnings",
                description:
                  "Started with small community initiatives and understanding people's needs",
              },
              {
                year: "January 2020",
                title: "Official Registration",
                description:
                  "Registered as a formal NGO to expand our reach and impact",
              },
              {
                year: "2020-Present",
                title: "Growing Impact",
                description:
                  "Focusing on education, employment, and basic needs support",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="md:w-32 flex-shrink-0">
                  <div className="font-bold text-blue-600 text-xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// components/CTA.tsx
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          From the desk of our founder: With assistance from my family, and with
          the support of my friends, we will be able to make better use of our
          resources. We are a startup foundation, learning to improve and serve
          better. We welcome your support and ideas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Donate Now
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};
