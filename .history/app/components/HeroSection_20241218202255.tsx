'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: "/images/ed.jpeg",
    title: "Education: The Key to a Brighter Future",
    description: "Empowering children with knowledge and skills to build a better tomorrow",
    cta: "Support Education"
  },
  {
    image: "/images/foods.jpg",
    title: "No Child Should Sleep Hungry",
    description: "Providing nutritious meals to those in need for a healthier life",
    cta: "Sponsor a Meal"
  },
  {
    image: "/images/cl.jpg",
    title: "Warmth Through Generosity",
    description: "Distributing clothes, blankets, and other essentials to keep the needy warm and safe",
    cta: "Donate Essentials"
  },
  {
    image: "/images/poor_smiling.jpg",
    title: "Compassion in Every Gesture",
    description: "Offering love, care, and emotional support to those who need it the most",
    cta: "Volunteer with Us"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[calc(100vh-140px)] overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with next/image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              quality={90}
              priority={index === 0 || index === 1}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/80 to-transparent" />

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="space-x-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    {slide.cta}
                  </Button>
                  <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-green-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

