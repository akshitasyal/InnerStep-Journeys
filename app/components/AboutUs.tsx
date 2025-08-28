import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className=" py-16 relative">
      <div className="container mx-auto px-4">


        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Text content */}
          <div className="lg:w-1/4">
            <h2 className="font-cinzel text-primary text-3xl md:text-4xl font-bold mb-6">
              ABOUT US
            </h2>
            <div className="font-alice text-base md:text-lg space-y-4">
              <p>
                InnerStepJourneys is a spiritual travel collective dedicated to
                curating immersive pilgrimages, educational tours, and
                soul-nourishing retreats across India&apos;s sacred geography.
                We serve students, families, seekers, and faith-based
                communities — blending ancient wisdom with mindful facilitation.
              </p>
              <p>
                Our journeys are crafted not just to explore holy places, but to
                awaken inner purpose, deepen values, and reconnect with the
                divine within. Whether you&apos;re walking the sacred sands of
                Vrindavan, chanting by the Ganga in Rishikesh, or meditating
                beneath the Himalayan sky — every InnerStepJourney is a call to
                grow from the inside out.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-2/4 flex justify-center">
            <div className="rounded-4xl shadow-[5px_5px_0px_0px] shadow-[#923C1E]">
              <Image
                src="/images/aboutImage.png"
                alt="Person in prayer"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
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
      <Image
        src="/svg/bg-vector.svg"
        alt="background vector"
        width={700}
        height={700}
        className="absolute bottom-0 right-0 rotate-180  z-[-1]"
      />
    </section>
  );
};

export default AboutUs;
