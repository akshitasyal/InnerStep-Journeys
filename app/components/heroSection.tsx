"use client";
import React, { useRef } from "react";

function HeroSection() {
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const handleUnmute = () => {
    if (videoPlayer.current) {
      videoPlayer.current.muted = false;
      videoPlayer.current
        .play()
        .catch((err) => console.warn("Replay after unmute failed:", err));
    }
  };
  return (
    <video
      autoPlay
      loop
      muted
      className="w-full md:h-screen bg-black object-contain 2xl:object-cover"
      onClick={handleUnmute}
      ref={videoPlayer}
    >
      <source src="/videos/heroSectionVideo.mp4" type="video/mp4" />
    </video>
  );
}

export default HeroSection;
