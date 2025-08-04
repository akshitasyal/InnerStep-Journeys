import Image from "next/image";
import React from "react";
import { FaSpa, FaDove, FaPrayingHands } from "react-icons/fa";
import FloatingWindow from "./floatingWindow";

const MeditationBanner: React.FC = () => {
  return (
    <section className="relative w-full py-6 mt-10">
      <FloatingWindow />

      <div className="relative w-full">
        <Image
          src="/images/homepageBannerImage.png"
          alt="Meditation"
          className="w-full "
          height={720}
          width={1024}
        />
        <p className="absolute w-full bottom-0 left-0 py-6 bg-gradient-to-t to-transparent from-black/44  text-center text-white font-cinzel uppercase text-sm md:text-base lg:text-3xl tracking-wide">
          In stillness, the truth arises.
          <br />
          Meditation is the journey back to yourself
        </p>
      </div>
    </section>
  );
};

export default MeditationBanner;
