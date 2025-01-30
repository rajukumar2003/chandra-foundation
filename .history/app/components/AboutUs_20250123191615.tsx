"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"
export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-green-50/50 to-white">
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            About Us
          </h2>
          {/* <div className="w-20 h-1 bg-green-600 mx-auto"></div> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Image */}
          <div className="relative aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/about us.jpg"
              alt="About Chandra Foundation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-16">
            <div>
              {/* <h3 className="text-2xl font-semibold text-green-700 mb-3">
                About Us
              </h3> */}
              <p className="text-gray-600 leading-relaxed">
                We are a non-profit organization dedicated to{" "}
                <strong>
                  Transforming Lives through Education, Health, and Employment
                </strong>
                . Established in 2020, we focus on integrating health,
                education, and employment, we address the interconnected needs
                of individuals and communities. Our holistic approach ensures
                that our efforts are not only effective but also sustainable,
                creating a positive ripple effect across various aspects of
                life.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative pl-4 border-l-4 border-green-500 italic text-gray-700 text-xl">
              &quot;Who would care for them if we don&apos;t start with
              ourselves?&quot;
              <div className="w-2 h-2 bg-green-500 absolute -left-[5px] -top-2 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 absolute -left-[5px] -bottom-2 rounded-full"></div>
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                  <span className="w-8 h-[2px] bg-green-500 mr-3"></span>
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where every individual has equal access
                  to healthcare, education, and employment opportunities,
                  fostering self-reliant communities that thrive in a cycle of
                  prosperity and hope.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                  <span className="w-8 h-[2px] bg-green-500 mr-3"></span>
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to drive sustainable growth by delivering
                  integrated solutions in health, education, and employment,
                  empowering individuals to overcome challenges and unlock their
                  potential.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
