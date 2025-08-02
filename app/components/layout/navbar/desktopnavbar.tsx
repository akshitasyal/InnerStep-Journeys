import Image from "next/image";
import React, { ReactNode } from "react";

function MenuItems({ name }: { name: string }): ReactNode {
  return (
    <li className="uppercase cursor-pointer hover:text-primary">
      <span className="text-xl">{name.charAt(0)}</span>
      {name.slice(1)}
    </li>
  );
}

function Desktopnavbar() {
  return (
    <div className="hidden navbar-lg:flex bg-secondary font-cinzel text-primary/80 text-md font-medium px-5 rounded-3xl">
      <ul className="flex flex-1 gap-16 items-center">
        <MenuItems name={"experience"} />
        <MenuItems name={"Darshana"} />
        <MenuItems name={"Yatra"} />
      </ul>
      <Image
        src={"/images/innerstep_full_logo.png"}
        width={279}
        height={49}
        alt="Innerstep logo"
      />
      <ul className="flex flex-1 gap-16 items-center">
        <MenuItems name={"Seva"} />
        <MenuItems name={"Dana"} />
        <MenuItems name={"Contact Us"} />
      </ul>
    </div>
  );
}

export default Desktopnavbar;
