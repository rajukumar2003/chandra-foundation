import React from "react";

const OurPrograms = () => {
  return (
    <section className="programs-container py-16 bg-green-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
          What We Do to Bring Smiles
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Together, we focus on providing basic amenities like{" "}
          <span className="font-semibold text-green-600">Education</span>,
          <span className="font-semibold text-green-600"> Food</span>, and{" "}
          <span className="font-semibold text-green-600">Warmth</span> to the
          needy. Through love, care, and collective support, we aim to make a
          positive difference in their lives.
        </p>

        {/* Programs Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Education */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-600 flex items-center justify-center">
              <span className="text-lg font-bold text-green-600">Education</span>
            </div>
            <p className="mt-4 text-gray-600">
              Providing knowledge and opportunities for a brighter future.
            </p>
          </div>

          {/* Food */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-600 flex items-center justify-center">
              <span className="text-lg font-bold text-green-600">Food</span>
            </div>
            <p className="mt-4 text-gray-600">
              Ensuring no child goes to bed hungry with nutritious meals.
            </p>
          </div>

          {/* Health */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-600 flex items-center justify-center">
              <span className="text-lg font-bold text-green-600">Health</span>
            </div>
            <p className="mt-4 text-gray-600">
              Promoting healthy lives with essential medical care and support.
            </p>
          </div>

          {/* Warmth */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-600 flex items-center justify-center">
              <span className="text-lg font-bold text-green-600">Warmth</span>
            </div>
            <p className="mt-4 text-gray-600">
              Distributing clothes, blankets, and care during harsh times.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
