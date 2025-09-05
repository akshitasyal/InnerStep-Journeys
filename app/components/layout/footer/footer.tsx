import React from "react";
import FooterHeading from "./footerHeading";
import FooterNavigationLinks from "./footerNavigationLinks";
import FooterSocialMediaLinks from "./footerSocialMediaLinks";
import FooterLicense from "./footerLicense";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import Image from "next/image";

function Footer() {
  const SocialLinks = [
    {
      icon: AiFillInstagram,
      link: "https://www.instagram.com/innerstep_journey/",
    },
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/innerstep.journey/",
    },
    {
      icon: AiFillYoutube,
      link: "https://www.youtube.com/channel/UC5767Fw31sV64236X1sY9wQ",
    },
  ];

  const NavigationLinks = [
    "Yatra",
    "Seva",
    "Dana",
    "Darshana",
    "Experience",
    
  ];

  return (
    <footer className="relative">
      <Image
        src="/svg/bg-vector.svg"
        width={100}
        height={100}
        className="w-fit h-fit absolute top-[-60%] left-0 -z-1 pointer-events-none"
        alt="bg-vector"
      />

      <FooterHeading
        title="Let’s Create a Journey That Awakens the Soul"
        highlitedWordIndex={3}
      />

      <div className="w-full bg-primary h-[1px] "></div>

      <FooterNavigationLinks links={NavigationLinks} />

      <FooterSocialMediaLinks links={SocialLinks} />

      <FooterLicense />
    </footer>
  );
}

export default Footer;
