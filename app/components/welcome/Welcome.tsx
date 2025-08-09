import Image from "next/image";
import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="py-16 relative">
      <Image
        src="/svg/bg-vector.svg"
        width={800}
        height={800}
        alt="background vector"
        className="absolute right-0 bottom-0 rotate-180 translate-[10%] "
      />
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-10 gap-8">
          <div className="xl:col-span-4 pt-8">
            <h2 className="font-cinzel text-3xl md:text-4xl mb-4">
              <span className="text-black">Welcome to </span>
              <span className="text-[#923C1E]  font-bold">
                InnerStepJourney
              </span>
            </h2>
            <p className="font-alice text-base md:text-lg mb-6">
              At InnerStepJourney, we guide you inward — through meditation,
              reflection, and spiritual practices — to uncover peace, clarity,
              and connection.
            </p>
          </div>
          <div className="xl:col-span-4 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/welcomeImage1.png"
              alt="Meditation"
              fill
              className="object-cover"
            />
          </div>
          <div className="xl:col-span-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/welcomeImage2.png"
              alt="Spiritual guide"
              fill
              className="object-cover"
            />
          </div>
          <div className="xl:col-span-5 relative h-[300px] rounded-lg  overflow-hidden">
            <Image
              src="/images/welcomeImage3.png"
              alt="Temple ceremony"
              fill
              className="object-cover"
            />
          </div>
          <div className="xl:col-span-3 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/welcomeImage4.png"
              alt="Spiritual ceremony"
              fill
              className="object-cover"
            />
          </div>
          <div className="xl:col-span-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/welcomeImage5.png"
              alt="Holi celebration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
