import React from "react";
import ServiceCard from "../components/whatWeOffer/ServiceCard";

function ActivitiesSection({
  heading,
  subHeading,
  activities,
}: {
  heading: string;
  subHeading: string;
  activities: { src: string; title: string }[];
}) {
  return (
    <div className="p-10 md:p-30">
      <div className="text-center flex flex-col items-center mb-12">
        <h2 className="font-cinzel text-4xl font-bold text-primary">
          {heading}
        </h2>
        <h3 className="text-black font-alice text-xl mt-3 max-w-190">
          {subHeading}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center">
        {activities.map((acitvity, index) => (
          <ServiceCard
            imagePath={acitvity.src}
            key={index}
            title={acitvity.title}
            description=""
            className="flex-1 min-w-sm max-w-md "
          />
        ))}
      </div>
    </div>
  );
}

export default ActivitiesSection;
