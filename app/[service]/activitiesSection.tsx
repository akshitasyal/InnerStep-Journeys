"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookingModal from "../components/BookingModal";
import { usePathname } from "next/navigation";

function ActivitiesSection({
  heading,
  subHeading,
  activities,
}: {
  heading: string;
  subHeading: string;
  activities: {
    src?: string;
    title: string;
    description?: string;
    includes?: string[];
    link?: string;
  }[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isExperiencePage, setIsExperiencePage] = useState(false);
  const [isSevaPage, setIsSevaPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're on the experience page
    setIsExperiencePage(pathname?.includes("/experience") || false);
    setIsSevaPage(pathname?.includes("/seva") || false);
  }, [pathname]);

  const handleBookNow = (serviceName: string) => {
    console.log("Book Now clicked for:", serviceName);

    // First close the modal if it's open
    setIsModalOpen(false);

    // Then set the service name and open the modal after a small delay
    setTimeout(() => {
      setSelectedService(serviceName);
      setIsModalOpen(true);
      console.log("Modal should be open now with service:", serviceName);
    }, 50);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-y-visible p-10 md:p-30">
      {/* Background image behind content */}
      <Image
        src="/svg/bg-vector.svg"
        width={1024}
        height={1024}
        alt="background vector"
        className="absolute left-0 top-0 -translate-x-1/5 z-0 pointer-events-none select-none"
      />

      {/* Main content */}
      <div className="relative z-10">
        <div className="text-center flex flex-col items-center mb-12">
          <h2 className="font-cinzel text-4xl font-bold text-primary">
            {heading}
          </h2>
          <h3 className="text-black font-alice text-xl mt-3 max-w-190">
            {subHeading}
          </h3>
        </div>

        {/* Check if we're on the seva page to apply special layout */}
        {isSevaPage ? (
          <div className="flex flex-col gap-8">
            {/* Seva activities */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {activities
                .filter((activity) => !activity.title.includes("Daan"))
                .map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col"
                  >
                    <div>
                      <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">
                        {activity.title}
                      </h3>

                      {activity.description && (
                        <p className="font-alice text-gray-800 mb-4">
                          {activity.description}
                        </p>
                      )}

                      {activity.includes && activity.includes.length > 0 && (
                        <ul className="font-alice list-disc pl-5 space-y-2">
                          {activity.includes.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Button aligned at bottom */}
                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        onClick={() => {
                          // In future: replace alert with modal trigger
                          alert("Thanks for stepping forward to volunteer!");
                        }}
                        className="w-full bg-green-50 text-green-700 font-cinzel py-2 px-4 rounded-lg border border-green-200 hover:bg-green-100 hover:border-green-300 transition-colors cursor-pointer"
                      >
                        🤝 Join as a Volunteer
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 max-w-md flex flex-col"
              >
                <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">
                  {activity.title}
                </h3>

                {activity.description && (
                  <p className="font-alice text-gray-800 mb-4">
                    {activity.description}
                  </p>
                )}

                {activity.includes && activity.includes.length > 0 && (
                  <div className="mt-4">
                    <ul className="font-alice list-disc pl-5 space-y-2">
                      {activity.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const exactTitle = activity.title.trim();
                      handleBookNow(exactTitle);
                    }}
                    className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {isExperiencePage && (
          <BookingModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            serviceName={selectedService}
          />
        )}
      </div>
    </div>
  );
}

export default ActivitiesSection;
