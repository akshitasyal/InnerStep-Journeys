"use client";

import React, { useState } from "react";
import Image from "next/image";
import DonationModal from "./DonationModal";

interface DonationSectionProps {
  className?: string;
}

const DonationSection: React.FC<DonationSectionProps> = ({
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDaanType, setSelectedDaanType] = useState("");

  const handleOpenModal = (daanType: string) => {
    setSelectedDaanType(daanType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={`py-16 relative ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="font-cinzel text-center text-4xl font-bold text-primary mb-6">
          SACRED FORMS OF GIVING
        </h2>

        <p className="font-alice text-center text-lg max-w-3xl mx-auto mb-12">
          Our scriptures describe various forms of Daan as some of the highest
          forms of service that purify the heart and create positive karma.
        </p>

        <div className="bg-[#F8E8B0] py-8 px-4 mb-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl text-primary absolute left-8 top-4">
              &quot;
            </span>
            <p className="font-alice text-xl italic">
              Giving is not just about making a donation. It is about making a
              difference.
            </p>
            <p className="font-cinzel text-primary text-right mt-2">
              — Kathy Calvin
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Anna Daan Card */}
          <div className="bg-[#FDF4B3] rounded-lg shadow-md p-6 max-w-sm flex-1 min-w-[300px]">
            <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">
              Anna Daan
            </h3>
            <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/anna-daan.jpg"
                alt="Anna Daan"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-alice text-gray-800 mb-4">
              Food donation is considered one of the noblest forms of charity.
              By providing nourishment to those in need, we honor the divine
              connection between all beings. Our Anna Daan programs distribute
              fresh, nutritious meals to underprivileged communities, serving
              both body and soul.
            </p>
            <div className="mt-4">
              <h4 className="font-cinzel text-lg font-bold text-primary mb-2">
                INCLUDES:
              </h4>
              <ul className="font-alice list-disc pl-5 space-y-2">
                <li>Regular food distribution drives</li>
                <li>Community kitchen volunteering</li>
                <li>Sponsorship of meals at schools and shelters</li>
                <li>Emergency food relief during disasters</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal("Anna Daan")}
              className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer"
            >
              Donate Now
            </button>
          </div>

          {/* Vidya Daan Card */}
          <div className="bg-[#FDF4B3] rounded-lg shadow-md p-6 max-w-sm flex-1 min-w-[300px]">
            <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">
              Vidya Daan
            </h3>
            <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/vidya-daan.jpg"
                alt="Vidya Daan"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-alice text-gray-800 mb-4">
              The gift of knowledge is eternal. Through our Vidya Daan
              initiatives, we support educational opportunities for
              underprivileged children and adults. By sharing wisdom and
              learning resources, we empower individuals to transform their
              lives and communities.
            </p>
            <div className="mt-4">
              <h4 className="font-cinzel text-lg font-bold text-primary mb-2">
                INCLUDES:
              </h4>
              <ul className="font-alice list-disc pl-5 space-y-2">
                <li>Educational sponsorships for children</li>
                <li>Adult literacy programs</li>
                <li>Distribution of books and learning materials</li>
                <li>Mentorship and skill development workshops</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal("Vidya Daan")}
              className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer"
            >
              Donate Now
            </button>
          </div>

          {/* Cause-Based Daan Card */}
          <div className="bg-[#FDF4B3] rounded-lg shadow-md p-6 max-w-sm flex-1 min-w-[300px]">
            <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">
              Cause-Based Daan
            </h3>
            <div className="h-48 relative mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/cause-daan.jpg"
                alt="Cause-Based Daan"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-alice text-gray-800 mb-4">
              Our targeted giving programs address specific community needs
              through strategic charitable initiatives. From environmental
              conservation to healthcare access, these programs create lasting
              positive impact in areas that need it most.
            </p>
            <div className="mt-4">
              <h4 className="font-cinzel text-lg font-bold text-primary mb-2">
                INCLUDES:
              </h4>
              <ul className="font-alice list-disc pl-5 space-y-2">
                <li>Environmental restoration projects</li>
                <li>Medical camps and healthcare initiatives</li>
                <li>Animal welfare programs</li>
                <li>Support for elderly and differently-abled individuals</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenModal("Cause-Based Daan")}
              className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer"
            >
              Donate Now
            </button>
          </div>
        </div>

        {/* Decorative element at bottom */}
        <div className="flex justify-center mt-12">
          <Image
            src="/svg/seperator.svg"
            alt="Decorative element"
            width={400}
            height={30}
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialDaanType={selectedDaanType}
      />
    </section>
  );
};

export default DonationSection;
