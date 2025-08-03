import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";

const WhatWeOffer: React.FC = () => {
  // Service data array
  const services = [
    {
      id: 1,
      title: "Personalised Travel Assistance",
      description:
        "From arrival to darshan, we guide you every step with care and devotion.",
      imagePath: "/images/sacredPlacesImage1.png", // Using existing image as placeholder
    },
    {
      id: 2,
      title: "Customised Batch-Wise Group Travel",
      description:
        "Each journey tailored to your group's pace, needs, and intentions.",
      imagePath: "/images/sacredPlacesImage2.png", // Using existing image as placeholder
    },
    {
      id: 3,
      title: "Based on Location & Spiritual Calendar",
      description: "Timings that align with sacred energies and festivals.",
      imagePath: "/images/sacredPlacesImage3.png", // Using existing image as placeholder
    },
    {
      id: 4,
      title: "Karma Yoga in Action Without Expectations",
      description: "Do good without asking – just as the Gita teaches.",
      imagePath: "/images/sacredPlacesImage4.png", // Using existing image as placeholder
    },
    {
      id: 5,
      title: "Verified Donations – Meals, Pujas, Support",
      description:
        "Your offerings go where they matter, with complete authenticity.",
      imagePath: "/images/sacredPlacesImage5.png", // Using existing image as placeholder
    },
    {
      id: 6,
      title: "Verified Donations – Meals, Pujas, Support",
      description:
        "Your offerings go where they matter, with complete authenticity.",
      imagePath: "/images/sacredPlacesImage6.png", // Using existing image as placeholder
    },
  ];

  return (
    <section className=" py-16 relative overflow-hidden">
      {/* Background pattern with temple silhouettes */}

      <div className="container mx-auto px-4">
        {/* Decorative element at top */}
        <div className="flex justify-center mb-12 md:mb-30">
          <Image
            src="/svg/seperator.svg"
            alt="Decorative element"
            width={400}
            height={30}
            className="h-8 w-auto"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl font-bold">
            <span className="text-black">What We </span>
            <span className="text-[#923C1E]">Offer</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imagePath={service.imagePath}
            />
          ))}
        </div>

        {/* Decorative element at bottom */}
        <div className="flex justify-center mt-12 md:mt-30">
          <Image
            src="/svg/seperator.svg"
            alt="Decorative element"
            width={400}
            height={30}
            className="h-8 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
