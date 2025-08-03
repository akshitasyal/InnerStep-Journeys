import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <div className="relative p-2 flex flex-col h-full">
      {/* Curved border at top */}
      <svg
        width="436"
        height="134"
        viewBox="0 0 436 134"
        fill="none"
        className="absolute top-0 left-0 w-[85%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M436 3.50573C436 3.17239 436 2.83906 436 2.50573C427.396 2.40409 418.792 2.30555 410.188 2.21011C314.458 1.14825 218.729 0.470013 123 0.175408L123.022 0.175496C86.0508 -0.85591 45.9532 12.7564 23.7573 44.2897C10.0799 62.9452 3.20348 85.5888 1.05931 108.039C0.228967 116.692 0.0799553 125.376 0.500006 134.004C0.833335 134.005 1.16666 134.007 1.49999 134.009C2.00511 125.425 2.94837 116.896 4.41973 108.493C8.24212 86.6634 15.6989 65.4311 28.5966 47.8367C49.5253 18.1728 86.9972 5.12789 122.978 5.83596L123 5.83605C218.729 5.54144 314.458 4.86321 410.188 3.80134C418.792 3.7059 427.396 3.60736 436 3.50573Z"
          fill="#923C1E"
        />
      </svg>

      {/* Image container with proper sizing */}
      <div className="pt-8 px-4 pb-4 z-10">
        <div className="relative overflow-hidden rounded-tl-[60px] rounded-br-[60px] h-80 w-full">
          <Image
            src={imagePath}
            alt={title}
            width={1024}
            height={720}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content with improved typography */}
      <div className="px-6 pb-6 z-10 flex-grow">
        <h3 className="font-cinzel text-xl font-bold mb-5">
          {title}
        </h3>
        <p className="font-alice text-sm text-gray-800">{description}</p>
      </div>

      {/* Curved border at bottom */}
      <svg
        width="436"
        height="135"
        viewBox="0 0 436 135"
        fill="none"
        className="absolute right-0 bottom-0 w-[85%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5928e-05 131.007C2.5928e-05 131.34 2.5928e-05 131.673 2.5928e-05 132.007C8.60412 132.108 17.2082 132.207 25.8123 132.302C121.542 133.364 217.271 134.042 313 134.337L312.978 134.337C349.949 135.368 390.047 121.756 412.243 90.2228C425.92 71.5673 432.797 48.9237 434.941 26.4733C435.771 17.8207 435.92 9.13644 435.5 0.50869C435.167 0.507057 434.833 0.50544 434.5 0.503807C433.995 9.08791 433.052 17.6162 431.58 26.0196C427.758 47.8491 420.301 69.0813 407.403 86.6758C386.475 116.34 349.003 129.385 313.022 128.676L313 128.676C217.271 128.971 121.542 129.649 25.8123 130.711C17.2082 130.807 8.60412 130.905 2.5928e-05 131.007Z"
          fill="#923C1E"
        />
      </svg>
    </div>
  );
};

export default ServiceCard;
