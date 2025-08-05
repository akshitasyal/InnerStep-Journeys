"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuItems from "./menuItems";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Desktopnavbar() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState<null | string>(
    firstSegment || null
  );

  return (
    <div className="hidden navbar-lg:flex bg-secondary font-cinzel text-primary/80 text-md font-medium px-5 rounded-3xl">
      <ul className="flex flex-1 gap-16 items-center">
        <MenuItems
          name={"experience"}
          currentSelectedMenu={currentSelectedMenu}
          setCurrentSelectedMenu={setCurrentSelectedMenu}
        />
        <MenuItems
          name={"Darshana"}
          currentSelectedMenu={currentSelectedMenu}
          setCurrentSelectedMenu={setCurrentSelectedMenu}
        />
        <MenuItems
          name={"Yatra"}
          currentSelectedMenu={currentSelectedMenu}
          setCurrentSelectedMenu={setCurrentSelectedMenu}
        />
      </ul>
      <Link href={"/"}>
        <Image
          src={"/images/innerstep_full_logo.png"}
          width={279}
          height={49}
          alt="Innerstep logo"
        />
      </Link>
      <ul className="flex flex-1 gap-16 items-center">
        <MenuItems
          name={"Seva"}
          currentSelectedMenu={currentSelectedMenu}
          setCurrentSelectedMenu={setCurrentSelectedMenu}
        />
        <MenuItems
          name={"Dana"}
          currentSelectedMenu={currentSelectedMenu}
          setCurrentSelectedMenu={setCurrentSelectedMenu}
        />
        <a
          href={"#contact"}
          className={`uppercase cursor-pointer py-0.1 rounded-2xl px-3 hover:text-primary`}
        >
          <span className="text-xl">C</span>
          ontact
        </a>
      </ul>
    </div>
  );
}

export default Desktopnavbar;
