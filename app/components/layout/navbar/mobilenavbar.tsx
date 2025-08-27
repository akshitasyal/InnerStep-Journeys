"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Mobilenavbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuClose = () => setMenuOpened(false);
  const handleMenuOpen = () => setMenuOpened(true);

  useEffect(() => {
    document.body.style.overflow = menuOpened ? "hidden" : "auto";
  }, [menuOpened]);

  return (
    <div className="navbar-lg:hidden w-screen items-center bg-secondary font-cinzel text-primary/80 text-md font-medium p-5 border-b border-primary shadow-md z-50">
      <div className="flex w-full items-center">
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={handleMenuOpen}
        />
        <Link href="/" className="mx-auto">
          <Image
            src="/images/innerstep_full_logo.png"
            width={279}
            height={49}
            alt="Innerstep logo"
          />
        </Link>
      </div>

      {/* Overlay */}
      {menuOpened && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={handleMenuClose}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] max-w-sm h-full bg-secondary p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpened ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg">
          <Link href="/experience" onClick={handleMenuClose}>
            Experiences
          </Link>
          <Link href="/darshana" onClick={handleMenuClose}>
            Darshana
          </Link>
          <Link href="/yatra" onClick={handleMenuClose}>
            Yatra
          </Link>
          <Link href="/seva" onClick={handleMenuClose}>
            Seva
          </Link>
         
          <a href="#contact" onClick={handleMenuClose}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Mobilenavbar;
