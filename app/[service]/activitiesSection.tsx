'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BookingModal from "../components/BookingModal";
import { usePathname } from 'next/navigation';

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
    link?: string 
  }[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isExperiencePage, setIsExperiencePage] = useState(false);
  const [isSevaPage, setIsSevaPage] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    // Check if we're on the experience page
    setIsExperiencePage(pathname?.includes('/experience') || false);
    setIsSevaPage(pathname?.includes('/seva') || false);
  }, [pathname]);

  const handleBookNow = (serviceName: string) => {
    console.log('Book Now clicked for:', serviceName);
    
    // First close the modal if it's open
    setIsModalOpen(false);
    
    // Then set the service name and open the modal after a small delay
    setTimeout(() => {
      setSelectedService(serviceName);
      setIsModalOpen(true);
      console.log('Modal should be open now with service:', serviceName);
    }, 50);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-y-visible p-10 md:p-30">
      <Image
        src="/svg/bg-vector.svg"
        width={1024}
        height={1024}
        alt="background vector"
        className="absolute left-0 top-0 translate-x-[-20%]"
      />
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
          {/* First row for Seva activities */}
          <div className="flex flex-wrap justify-center gap-8">
            {activities
              .filter(activity => !activity.title.includes("Daan"))
              .map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-md flex-1 min-w-[300px]">
                  <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">{activity.title}</h3>
                  {activity.description && (
                    <p className="font-alice text-gray-800 mb-4">{activity.description}</p>
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
                </div>
              ))}
          </div>
          
          {/* Second row for Dana part */}
          <div className="flex justify-center mt-8">
            {activities
              .filter(activity => activity.title.includes("Daan"))
              .map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
                  <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">{activity.title}</h3>
                  {activity.description && (
                    <p className="font-alice text-gray-800 mb-4">{activity.description}</p>
                  )}
                  <button
                    onClick={() => window.location.href = "/dana"}
                    className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer block text-center"
                  >
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 max-w-md">
              <h3 className="font-cinzel text-2xl font-bold text-primary mb-3">{activity.title}</h3>
              {activity.description && (
                <p className="font-alice text-gray-800 mb-4">{activity.description}</p>
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
              {activity.link ? (
                <a 
                  href={activity.link}
                  className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer block text-center"
                >
                  View Details
                </a>
              ) : isExperiencePage && (
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Use exact title string from the activity data
                    const exactTitle = activity.title.trim();
                    console.log('Exact title clicked:', exactTitle);
                    handleBookNow(exactTitle);
                  }}
                  className="mt-6 bg-primary text-white font-cinzel py-2 px-4 rounded-md hover:bg-primary/90 transition-colors w-full cursor-pointer"
                >
                  Book Now
                </button>
              )}
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
  );
}

export default ActivitiesSection;
