import Link from "next/link";
import React from "react";

function FooterNavigationLinks({ links }: { links: string[] }) {
  return (
    <div className="flex justify-center font-poppins mt-5 lg:mt-0">
      <ul className="flex flex-col text-center text-lg lg:flex-row  lg:gap-25  lg:text-xl lg:py-18">
        {links.map((link, index) => (
          <Link
            href={`/${link.toLocaleLowerCase()}`}
            className="py-2 cursor-pointer"
            key={index}
          >
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default FooterNavigationLinks;
