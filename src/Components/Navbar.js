import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[67px]">
      <ul className="flex h-full w-full items-center">
        <li className="w-[18%] text-center">Upride</li>
        <li className="w-[35%] text-center">
          Cotactus:<strong className="text-sm">+912233986</strong>
        </li>
        <li className="w-[26%] text-center">
          <span>Download App</span>
          <span>Are You a driving School?</span>
        </li>
        <li className="w-[21%] text-center flex items-center justify-center gap-5 ">
          <span>N</span>
          <span className="text-sm h-1/3 shadow-md rounded-xl p-2">
            Hello bro
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
