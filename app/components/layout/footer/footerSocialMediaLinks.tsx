import Link from "next/link";
import React from "react";

function FooterSocialMediaLinks({
  links,
}: {
  links: { icon: React.ElementType; link: string }[];
}) {
  return (
    <div className="flex justify-center py-10 lg:py-0 ">
      <div className="flex items-center gap-5">
        {links.map((link, index) => (
          <Link href={link.link} key={index}>
            <link.icon fontSize={30} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterSocialMediaLinks;
