import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-green-700 text-white py-4 px-6 shadow-md z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            Chandra Foundation
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/services" className="hover:text-green-300 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-300 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Donate Button */}
        <div>
          <Link
            href="/donate"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Add Mobile Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
