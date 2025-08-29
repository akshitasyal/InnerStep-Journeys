import FeaturedDestination from "../components/featruedDestination/FeaturedDestination";
import ContanctUsForm from "../components/contanctUsForm";
import Image from "next/image";
import ImageGallery from "../[service]/imageGallery";

export default function YatraPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/yatraBannerImage.png"
            alt="Yatra Banner"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent from-secondary min-h-[50%] flex flex-col justify-end items-center p-10">
          <h1 className="font-cinzel text-center text-primary font-bold text-3xl md:text-5xl">
            Sacred Yatras
          </h1>
          <p className="font-alice text-center text-xl max-w-3xl mx-auto mt-5">
            Journey to India&apos;s most sacred destinations
          </p>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="font-alice text-base md:text-lg space-y-4">
              <p>
                At InnerStep every Yatra blends devotion with comfort - ensuring
                a safe, women and elder-friendly spiritual journey. With guided
                rituals and moments of reflection, we invite you to walk paths
                where divinity still breathes, stories live on and the soul
                awakens.
              </p>

              <p className="font-cinzel text-primary text-xl font-semibold">
                Where every step becomes a prayer and every journey a step
                closer to the Divine.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Image
            src="/svg/seperator.svg"
            alt="Decorative element"
            width={400}
            height={30}
            className="h-8 w-auto"
          />
        </div>
      </section>

      <div className="text-center mb-6">
        <p className="font-alice text-xl text-primary italic">
          Click on your favourite destination to explore the itinerary.
        </p>
      </div>
      <FeaturedDestination />

      <div className="flex justify-center mb-12">
        <Image
          src="/svg/seperator.svg"
          alt="Decorative element"
          width={400}
          height={30}
          className="h-8 w-auto"
        />
      </div>

      <ImageGallery
        serviceName="yatra"
        heading="Every Yatra is a step toward the self. Let's walk together."
        quote="He who departs on this path of selfless action is not lost. Even a little progress protects one from great fear."
        quoteAuthor="Neha abhikrama-naso 'sti pratyavayo na vidyate"
        section="Bhagavad Gita 2.14"
      />

      <ContanctUsForm />
    </div>
  );
}
