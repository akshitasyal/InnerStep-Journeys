"use client";
import React, { useRef, useState } from "react";
import { BiVolumeMute } from "react-icons/bi";
import { FaVolumeUp } from "react-icons/fa";

function HeroSection() {
  const [muted, setMuted] = useState<boolean>(true);
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const handleUnmute = () => {
    if (videoPlayer.current) {
      videoPlayer.current.muted = !videoPlayer.current.muted;
      setMuted((prev) => !prev);
      videoPlayer.current
        .play()
        .catch((err) => console.warn("Replay after unmute failed:", err));
    }
  };

  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="w-full md:h-screen bg-black object-contain 2xl:object-cover z-1"
        onClick={handleUnmute}
        ref={videoPlayer}
      >
        <source src="/videos/heroSectionVideo.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute top-5 right-5 md:top-10 md:right-10 bg-black/30 p-2  md:p-5 cursor-pointer"
        onClick={handleUnmute}
      >
        {muted ? (
          <BiVolumeMute className="text-sm md:text-xl  text-white z-2" />
        ) : (
          <FaVolumeUp className="text-sm md:text-xl  text-white z-2" />
        )}
      </div>
    </div>
  );
}

export default HeroSection;
