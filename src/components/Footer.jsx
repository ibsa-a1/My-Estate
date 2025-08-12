import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div
        className="
     container mx-auto flex flex-col md:flex-row justify-between items-start"
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo} alt="" className="w-20" />
          <p className="text-gray-400 mt-4">
            Discover exceptional properties with My Estate. Whether buying,
            selling, or investing, we make every step smooth, transparent, and
            tailored to your needs.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="" className="hover:text-white">
              Privacy & Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="mb-4 text-gray-400 max-w-80">
            The Latest news, articles and resources sent tomyour inbox weekly.
          </p>
          <div className="flex gap-2 md:gap-0 lg:gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none max-w-80 md:max-w-45 lg:max-w-80"
            />
            <button className="px-4 py-2 md:px-2 lg:px-4 lg:py-2 md:py-0 ml-2 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright &copy; 2025{" "}
        <a
          href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ibsa A.
        </a>{" "}
        All rights reserved
      </div>
    </div>
  );
};

export default Footer;
