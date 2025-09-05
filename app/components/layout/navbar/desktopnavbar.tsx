"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuItems from "./menuItems";
import Link from "next/link";

const LeftSideMenu = ({
  selectedItem,
  onClickHandler,
}: {
  selectedItem: string | null;
  onClickHandler: (item: string) => void;
}) => (
  <ul className="flex flex-1 gap-16 items-center">
    <MenuItems
      name="experience"
      selectedItem={selectedItem}
      onClickHandler={onClickHandler}
    />
    <MenuItems
      name="Darshana"
      selectedItem={selectedItem}
      onClickHandler={onClickHandler}
    />
    <MenuItems
      name="Yatra"
      selectedItem={selectedItem}
      onClickHandler={onClickHandler}
    />
  </ul>
);

const RightSideMenu = ({
  selectedItem,
  onClickHandler,
}: {
  selectedItem: string | null;
  onClickHandler: (item: string) => void;
}) => (
  <ul className="flex flex-1 gap-16 items-center">
    <MenuItems
      name="Seva"
      selectedItem={selectedItem}
      onClickHandler={onClickHandler}
    />

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
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const onClickHandler = (item: string) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setSelectedItem(window.location.pathname.split("/")[1]);
    console.log(window.location.pathname);
  }, []);

  return (
    <div
      className="hidden navbar-lg:flex bg-secondary font-cinzel text-primary/80 text-md font-medium px-5 border-1 border-primary rounded-3xl shadow-primary"
      style={{ boxShadow: "0px 2px 4px" }}
    >
      <LeftSideMenu
        selectedItem={selectedItem}
        onClickHandler={onClickHandler}
      />
      <Link href="/" onClick={() => setSelectedItem(null)}>
        <Image
          src="/images/innerstep_full_logo.png"
          width={279}
          height={49}
          alt="Innerstep logo"
        />
      </Link>
      <RightSideMenu
        selectedItem={selectedItem}
        onClickHandler={onClickHandler}
      />
    </div>
  );
}

export default DesktopNavbar;
