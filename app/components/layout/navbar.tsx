import React from "react";
import Desktopnavbar from "./navbar/desktopnavbar";

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full flex justify-center py-5 z-50">
      <Desktopnavbar />
    </nav>
  );
}

export default Navbar;
