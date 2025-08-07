import React from "react";
import { assets } from "./../assets/assets";

const Navbar = () => {
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
        <button className="hidden md:block bg-white py-2 px-8 rounded-full">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-10 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all">
        <div className="flex justify-end p-6 cursor-pointer">
          <img src={assets.cross_icon} alt="" className="md:hidden w-10" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-4 mx-5 text-lg font-medium">
          <a href="#Header" className="px-4 py-3 rounded-full inline-block">
            Home
          </a>
          <a href="#About" className="px-4 py-3 rounded-full inline-block">
            About
          </a>
          <a href="#Projects" className="px-4 py-3 rounded-full inline-block">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-3 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
