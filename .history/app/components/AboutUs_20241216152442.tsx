import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us-container bg-green-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/smile.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Get To Know Us
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              About Us
            </h3>
            <p className="text-gray-700 leading-relaxed">
              This charity foundation started informally in July 2019 but was
              registered in January 2020. From 2019, we tried to spend more time
              with the people/children and understand their wishes and
              aspirations in life. We are proud to have a dream of helping the
              needy persons.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="italic text-gray-600 font-semibold border-l-4 border-green-500 pl-4 mb-6">
            “Who would care for them if we doesn’t start from with ourselves?”
          </blockquote>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We expand the ideas and energy for helping the people so that with
              assistance of my family, and with the support of my friends we are
              able to make a better use of our resources.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-green-500 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We will be committed to be the most effective and approachable for
              people/children through the improvement of the care given to them
              and the quality of their lives.
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
