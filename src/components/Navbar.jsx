import React, { useEffect, useState } from "react";
import { assets } from "./../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" className="w-15" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <a href="#Footer">
          <button className="hidden md:block bg-white py-2 px-8 rounded-full cursor-pointer">
            Sign Up
          </button>
        </a>
        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-10 cursor-pointer"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            alt=""
            className="md:hidden w-10"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-0 mt-4 mx-5 text-lg font-medium">
          <a
            href="#Header"
            className="px-4 py-3 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-3 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-3 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-3 rounded-full inline-block"
            onClick={() => setShowMobileMenu(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
