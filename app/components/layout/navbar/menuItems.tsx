import React from "react";
import Link from "next/link";

type MenuItemsProps = {
  name: string;
  link?: string;
  selectedItem: string | null;
  onClickHandler: (item: string) => void;
};

export default function MenuItems({
  name,
  link,
  selectedItem,
  onClickHandler,
}: MenuItemsProps) {
  return (
    <Link
      href={link || `/${name.toLowerCase()}`}
      onClick={() => onClickHandler(name.toLowerCase())}
      className={`uppercase cursor-pointer py-0.1 px-3 rounded-2xl hover:text-primary ${
        name.toLocaleLowerCase() == selectedItem
          ? "border-1 border-primary"
          : ""
      }`}
    >
      <span className="text-xl">{name.charAt(0)}</span>
      {name.slice(1)}
    </Link>
  );
}
