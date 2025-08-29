import ContanctUsForm from "./components/contanctUsForm";
import Testimonials from "./components/testimonial/Testimonials";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/whatWeOffer/WhatWeOffer";
import Welcome from "./components/welcome/Welcome";
import MeditationBanner from "./components/homepageBanner/homepageBanner";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MeditationBanner />
      <Welcome />
      <WhatWeOffer />
      <AboutUs />
      <Testimonials />
      <ContanctUsForm />
    </>
  );
}
