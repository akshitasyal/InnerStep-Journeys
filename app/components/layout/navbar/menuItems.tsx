"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type MenuItemsProps = {
  name: string;
  link?: string;
};

export default function MenuItems({ name, link }: MenuItemsProps) {
  const [pathname, setPathname] = useState<string>("/");
  const href = link || `/${name.toLowerCase()}`;

  useEffect(() => {
    setPathname(window.location.pathname.split("/")[1]);
    console.log(window.location.pathname, name);
  }, []);

  const isSelected = pathname.toLowerCase() === name.toLowerCase();

  return (
    <Link
      href={href}
      className={`uppercase cursor-pointer py-0.1 px-3 rounded-2xl hover:text-primary ${
        isSelected ? "border-1 border-primary" : ""
      }`}
    >
      <span className="text-xl">{name.charAt(0)}</span>
      {name.slice(1)}
    </Link>
  );
}
