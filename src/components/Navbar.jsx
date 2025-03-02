import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo/yellowlogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="w-screen">
      <div className="flex justify-between w-screen items-center align-center p-2 md:justify-around">
        <div className="align-center justify-center text-5xl fill-yellow-500 cursor-pointer">
          <img style={{ height: "60px" }} src={Logo} alt="logo" />
        </div>
        {/* <Logo className="align-center justify-center text-5xl fill-yellow-500 cursor-pointer" /> */}
        <ul className=" wrap justify-center align-center space-x-6 md:space-x-3 hidden md:inline-flex">
          <li className="px-2 py-1 rounded-md hover:text-yellow-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 py-1 rounded-md hover:text-yellow-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2 py-1 rounded-md hover:text-yellow-400 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
          <li className="px-2 py-1 rounded-md hover:text-yellow-400 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <GiHamburgerMenu
          className={`${
            isActive ? "hidden" : "block"
          } text-3xl md:hidden fill-yellow-500`}
          onClick={() => setIsActive(true)}
        />
        <ImCross
          className={`${
            isActive ? "block" : "hidden"
          } text-3xl md:hidden fill-yellow-500`}
          onClick={() => setIsActive(false)}
        />
      </div>

      {isActive && (
        <ul className="flex flex-col justify-center text-center py-4">
          <li
            className="px-2 py-4 rounded-md hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsActive(false)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="px-2 py-4 rounded-md hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsActive(false)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="px-2 py-4 rounded-md hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsActive(false)}
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className="px-2 py-4 rounded-md hover:text-yellow-400 cursor-pointer"
            onClick={() => setIsActive(false)}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
