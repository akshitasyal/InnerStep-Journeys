import React from "react";

function HeroSection() {
  return (
    <video autoPlay muted loop className="w-full md:h-screen bg-black object-contain">
      <source src="/videos/heroSectionVideo.mp4" type="video/mp4" />
    </video>
  );
}

export default HeroSection;
