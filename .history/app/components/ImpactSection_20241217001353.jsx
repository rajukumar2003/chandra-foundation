"use client"; // Required for Next.js since we use state and effects
import React, { useState } from "react";

const ImpactSection = () => {
  // Initial states for counters
  const [counters, setCounters] = useState({
    years: 0,
    children: 0,
    hours: 0,
    partners: 0,
  });

  // Range values for each counter
  const ranges = {
    years: 4,
    children: 1000,
    hours: 1000,
    partners: 1000,
  };

  // Handle hover to start animation
  const startCounting = () => {
    const interval = 30; // Speed of counting

    // Update counter values incrementally
    Object.keys(ranges).forEach((key) => {
      let current = 0;
      const step = Math.ceil(ranges[key] / 100); // Increment step

      const timer = setInterval(() => {
        current += step;
        if (current >= ranges[key]) {
          current = ranges[key];
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: current }));
      }, interval);
    });
  };

  return (
    <section
      className="impact-section py-16 bg-gray-50"
      onMouseEnter={startCounting} // Trigger animation on hover
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
          Impact done till now with your help
        </h2>

        {/* Impact Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
          {/* Years of Service */}
          <div className="impact-item">
            <div className="icon mb-4">
              <span className="text-5xl text-green-600">🌟</span>
            </div>
            <h3 className="text-3xl font-bold text-green-700">
              {counters.years}+
            </h3>
            <p className="text-gray-600 mt-2">Years of service to society</p>
          </div>

          {/* Children Impacted */}
          <div className="impact-item">
            <div className="icon mb-4">
              <span className="text-5xl text-green-600">👶</span>
            </div>
            <h3 className="text-3xl font-bold text-green-700">
              {counters.children}+
            </h3>
            <p className="text-gray-600 mt-2">
              Children received quality education
            </p>
          </div>

          {/* Hours of Work */}
          <div className="impact-item">
            <div className="icon mb-4">
              <span className="text-5xl text-green-600">⏳</span>
            </div>
            <h3 className="text-3xl font-bold text-green-700">
              {counters.hours}+
            </h3>
            <p className="text-gray-600 mt-2">Hours of work</p>
          </div>

          {/* Partners and Volunteers */}
          <div className="impact-item">
            <div className="icon mb-4">
              <span className="text-5xl text-green-600">🤝</span>
            </div>
            <h3 className="text-3xl font-bold text-green-700">
              {counters.partners}+
            </h3>
            <p className="text-gray-600 mt-2">
              Partners and volunteers joined us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
