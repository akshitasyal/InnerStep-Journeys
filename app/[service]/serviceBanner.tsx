import Image from "next/image";
import React from "react";

function ServiceBanner({
  serviceName,
  heading,
  subHeading,
}: {
  serviceName: string;
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="relative h-screen">
      <Image
        alt={`${serviceName} Banner Image`}
        fill
        src={`/images/${serviceName}BannerImage.png`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent from-secondary min-h-[50%] flex flex-col justify-end items-center p-10">
        <h1 className="font-cinzel text-center text-primary font-bold text-5xl">
          {heading}
        </h1>
        <h2 className="font-alice text-center text-xl max-w-190 mx-auto mt-5">
          {subHeading}
        </h2>
      </div>
    </div>
  );
}

export default ServiceBanner;
