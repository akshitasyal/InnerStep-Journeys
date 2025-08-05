import React, { JSX } from "react";
import Link from "next/link";

type MenuItemsProps = {
  name: string;
  link?: string;
  currentSelectedMenu: string | null;
  setCurrentSelectedMenu: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function MenuItems({
  name,
  link,
  currentSelectedMenu,
  setCurrentSelectedMenu,
}: MenuItemsProps): JSX.Element {
  const isSelected = currentSelectedMenu?.toLowerCase() === name.toLowerCase();

  return (
    <Link
      href={link || `/${name.toLowerCase()}`}
      className={`uppercase cursor-pointer py-0.1 rounded-2xl px-3 hover:text-primary ${
        isSelected ? "border-1  border-primary" : ""
      }`}
      onClick={() => setCurrentSelectedMenu(name.toLowerCase())}
    >
      <span className="text-xl">{name.charAt(0)}</span>
      {name.slice(1)}
    </Link>
  );
}
