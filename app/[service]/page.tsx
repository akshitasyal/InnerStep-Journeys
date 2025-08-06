import { notFound } from "next/navigation";
import ServiceBanner from "./serviceBanner";
import { darshana } from "../lib/data/darshana";
import { ServiceData } from "../lib/data/type";
import { experience } from "../lib/data/experience";
import { yatra } from "../lib/data/yatra";
import { seva } from "../lib/data/seva";
import { dana } from "../lib/data/dana";
import ActivitiesSection from "./activitiesSection";

type ValidSections = "experience" | "darshana" | "yatra" | "seva" | "dana";

const allowedSections: ValidSections[] = [
  "experience",
  "darshana",
  "yatra",
  "seva",
  "dana",
];

const contentMap: Record<ValidSections, ServiceData> = {
  darshana,
  experience,
  yatra,
  seva,
  dana,
};

export default function SectionPage({
  params,
}: {
  params: { service: string };
}) {
  const section = params.service.toLowerCase();

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
    </div>
  );
}

export async function generateStaticParams() {
  return allowedSections.map((section) => ({ section }));
}
