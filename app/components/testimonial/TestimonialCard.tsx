import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  location: string;
  comment: string;
  even: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageUrl,
  name,
  location,
  comment,
  even,
}) => {
  return (
    <div
      className={`p-6 ${
        even ? "pb-30" : "pt-30"
      } min-w-screen md:min-w-xs  mx-auto`}
    >
      <div className="relative overflow-hidden rounded-lg mb-6 snap-end">
        <Image
          src={imageUrl}
          alt={`${name}'s testimonial`}
          width={320}
          height={240}
          className="w-[60%] h-auto object-cover"
        />
      </div>
      <div className=" font-alice">
        <p className="font-alice text-base mb-6">{comment}</p>
        <p className="font-poppins text-md">
          — {name}, {location}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
