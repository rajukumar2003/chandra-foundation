import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/study.jpg')`, // Replace with your hero image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Together, We Can Brighten Futures
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Transforming Lives Through Compassion and Action
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-x-4">
          <a
            href="/donate"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Donate Now
          </a>
          <a
            href="/volunteer"
            className="inline-block border-2 border-green-500 text-white hover:bg-green-500 px-6 py-3 rounded-full text-lg transition duration-300"
          >
            Volunteer with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
