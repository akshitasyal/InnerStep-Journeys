"use client";
import React, { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemsProps = {
  name: string;
  link?: string;
};

export default function MenuItems({ name, link }: MenuItemsProps): JSX.Element {
  const pathname = usePathname();
  const href = link || `/${name.toLowerCase()}`;
  const isSelected = pathname === href;

  return (
    <Link
      href={href}
      className={`uppercase cursor-pointer py-0.1 px-3 rounded-2xl hover:text-primary ${
        isSelected ? "border-1  border-primary" : ""
      }`}
    >
      <span className="text-xl">{name.charAt(0)}</span>
      {name.slice(1)}
    </Link>
  );
}
