import ContanctUsForm from "./components/contanctUsForm";
import Testimonials from "./components/testimonial/Testimonials";
import AboutUs from "./components/AboutUs";
import FeaturedDestination from "./components/featruedDestination/FeaturedDestination";
import WhatWeOffer from "./components/whatWeOffer/WhatWeOffer";
import Welcome from "./components/welcome/Welcome";
import MeditationBanner from "./components/homepageBanner/homepageBanner";

export default function Home() {
  return (
    <>
      <MeditationBanner />
      <Welcome />
      <WhatWeOffer />
      <FeaturedDestination />
      <AboutUs />
      <Testimonials />
      <ContanctUsForm />
    </>
  );
}
