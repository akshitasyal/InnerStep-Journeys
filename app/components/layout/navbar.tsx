import React from "react";
import Desktopnavbar from "./navbar/desktopnavbar";
import Mobilenavbar from "./navbar/mobilenavbar";

function Navbar() {
  return (
    <nav className="sticky navbar-lg:fixed top-0 left-0 w-full flex justify-center navbar-lg:py-5 z-50 pointer-events-none ">
      <div className="pointer-events-auto">
        <Desktopnavbar />
        <Mobilenavbar />
      </div>
    </nav>
  );
}

export default Navbar;
