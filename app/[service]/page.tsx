import { notFound } from "next/navigation";
import ServiceBanner from "./serviceBanner";
import { darshana } from "../lib/data/darshana";
import { ServiceData } from "../lib/data/type";
import { experience } from "../lib/data/experience";
import { yatra } from "../lib/data/yatra";
import { seva } from "../lib/data/seva";
import ActivitiesSection from "./activitiesSection";
import Image from "next/image";
import ImageGallery from "./imageGallery";
import ContanctUsForm from "../components/contanctUsForm";
import DonationSection from "../components/DonationSection";

type ValidSections = "experience" | "darshana" | "yatra" | "seva";

const allowedSections: ValidSections[] = [
  "experience",
  "darshana",
  "yatra",
  "seva",
];

const contentMap: Record<ValidSections, ServiceData> = {
  darshana,
  experience,
  yatra,
  seva,
};

export default async function SectionPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const actualParams = await params;
  const section = actualParams.service.toLowerCase();

  const isValidSection = allowedSections.includes(section as ValidSections);

  if (!isValidSection) {
    notFound();
  }

  const typedSection = section as ValidSections;
  const content = contentMap[typedSection];

  return (
    <div>
      
      <ServiceBanner
        serviceName={typedSection}
        heading={content.heading}
        subHeading={content.subHeading}
      />

      <ActivitiesSection
        heading={content.activity.heading}
        subHeading={content.activity.subHeading}
        activities={content.activity.activity}
      />

      <div className="flex justify-center mb-12 md:mb-30">
        <Image
          src="/svg/seperator.svg"
          alt="Decorative element"
          width={400}
          height={30}
          className="h-8 w-auto"
        />
      </div>

      {/* Show DonationSection only on the seva page */}
      {typedSection === "seva" && (
        <DonationSection className="mb-12" />
      )}

      <ImageGallery
        serviceName={typedSection}
        heading={content.imageGallery.heading}
        quote={content.imageGallery.quote}
        quoteAuthor={content.imageGallery.quoteAuthor}
        section={content.imageGallery.section}
      />

      <ContanctUsForm className="my-20" />
    </div>
  );
}

export async function generateStaticParams() {
  return allowedSections.map((section) => ({ section }));
}
