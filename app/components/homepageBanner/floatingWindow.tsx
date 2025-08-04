import Image from "next/image";
import React from "react";

function FloatingWindow() {
  return (
    <div className="absolute hidden lg:flex top-0 left-[50%] translate-[-50%] z-2  gap-8 w-fit p-5 justify-around items-center text-white bg-[#923C1E] rounded-br-[40px] rounded-tl-[40px]">
      <div className="flex flex-col  items-center space-y-2">
        <div className="h-[100px] flex items-center">
          <Image
            width={100}
            height={100}
            alt="ongoing programs"
            src="/svg/homepageBannerImage3.svg"
          />
        </div>
        <span className="font-cinzel text-sm uppercase text-center tracking-widest">
          Ongoing Programs
        </span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="h-[100px] flex items-center">
          <Image
            width={60}
            height={60}
            alt="Spiritual Retreats"
            src="/svg/homepageBannerImage2.svg"
          />
        </div>
        <span className="font-cinzel text-sm uppercase text-center tracking-widest">
          Spiritual Retreats
        </span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="h-[100px] flex items-center">
          <Image
            width={60}
            height={60}
            alt="Special Events"
            src="/svg/homepageBannerImage1.svg"
          />
        </div>
        <span className="font-cinzel text-sm uppercase text-center tracking-widest">
          Special Events
        </span>
      </div>
    </div>
  );
}

export default FloatingWindow;
