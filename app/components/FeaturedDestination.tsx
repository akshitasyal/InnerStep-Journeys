// Refresh component
import Image from "next/image";
import React from "react";
import Link from "next/link";

const FeaturedDestination: React.FC = () => {
  const destinations = [
    {
      name: "Vrindavan-The Land of Krishna’s Leelas",
      image: "/images/yatra/vrindavan/Vrindavan icon.jpg",
      path: "/yatra/vrindavan",
    },
    {
      name: "Ujjain- The Jyotirlinga of Time",
      image: "/images/yatra/Ujjain/Ujjain icon.jpg",
      path: "/yatra/ujjain",
    },
    {
      name: "Kashi (Varanasi) – The Eternal City",
      image: "/images/yatra/kashi/Kashi icon.jpg",
      path: "/yatra/varanasi",
    },
    {
      name: "Rishikesh - The Yoga Capital",
      image: "/images/yatra/rishikesh/Rishikesh icon.jpg",
      path: "/yatra/rishikesh",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-8 w-full max-w-5xl">
            {destinations.map((destination) => (
              <Link
                href={destination.path}
                key={destination.name}
                className="group text-center"
              >
                <div className="pt-10 pb-6">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-cinzel text-xl text-primary">
                    {destination.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
