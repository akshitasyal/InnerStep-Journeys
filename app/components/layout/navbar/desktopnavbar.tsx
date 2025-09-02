"use client";
import Image from "next/image";
import React from "react";
import MenuItems from "./menuItems";
import Link from "next/link";

const LeftSideMenu = () => (
  <ul className="flex flex-1 gap-16 items-center">
    <MenuItems name="experience" />
    <MenuItems name="Darshana" />
    <MenuItems name="Yatra" />
  </ul>
);

const RightSideMenu = () => (
  <ul className="flex flex-1 gap-16 items-center">
    <MenuItems name="Seva" />

    <Link
      href="#contact"
      className="uppercase cursor-pointer py-0.5 rounded-2xl px-3 hover:text-primary"
    >
      <span className="text-xl">C</span>
      ontact
    </Link>
  </ul>
);

function DesktopNavbar() {
  return (
    <div
      className="hidden navbar-lg:flex bg-secondary font-cinzel text-primary/80 text-md font-medium px-5 border-1 border-primary rounded-3xl shadow-primary"
      style={{ boxShadow: "0px 2px 4px" }}
    >
      <LeftSideMenu />
      <Link href="/">
        <Image
          src="/images/innerstep_full_logo.png"
          width={279}
          height={49}
          alt="Innerstep logo"
        />
      </Link>
      <RightSideMenu />
    </div>
  );
}

export default DesktopNavbar;
