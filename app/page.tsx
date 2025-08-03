import ContanctUsForm from "./components/contanctUsForm";
import Testimonials from "./components/testimonial/Testimonials";
import AboutUs from "./components/AboutUs";
import FeaturedDestination from "./components/featruedDestination/FeaturedDestination";

export default function Home() {
  return (
    <>
      <FeaturedDestination />
      <AboutUs />
      <Testimonials />
      <ContanctUsForm />
    </>
  );
}
