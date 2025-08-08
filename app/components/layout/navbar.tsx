import React from "react";
import Desktopnavbar from "./navbar/desktopnavbar";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-5 z-50 pointer-events-none ">
      <div className="pointer-events-auto">
        <Desktopnavbar />
      </div>
    </nav>
  );
}

export default Navbar;
