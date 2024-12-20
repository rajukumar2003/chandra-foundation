"use client";

import Link from "next/link";
<<<<<<< HEAD
=======
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
// } from "lucide-react";
>>>>>>> 6ece36a1e3124963873322c44cda15fd80005491
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Tagline */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Chandra Foundation"
                  width={100}
                  height={100}
                />
                <div className="ml-3">
                  <h1 className="text-2xl font-bold text-green-900">
                    Chandra Foundation
                  </h1>
                  <p className="text-sm text-green-700">
                    Nurturing Dreams, Transforming Lives
                  </p>
                </div>
              </Link>
            </div>

            <div>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-green-900 hover:text-green-700">
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  className="text-green-900 hover:text-green-700"
                >
                  About Us
                </Link>
                <Link
                  href="/ourwork"
                  className="text-green-900 hover:text-green-700"
                >
                  Our Work
                </Link>
                <Link
                  href="/contact-us"
                  className="text-green-900 hover:text-green-700"
                >
                  Contact Us
                </Link>
                {/* <Link href="/take-action" className="text-green-900 hover:text-green-700">Take Action</Link> */}

                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Donate Now
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Get Invloved
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-green-900 hover:text-green-700">
                    <span className="text-sm">Language</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>हिंदी</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              title="Toggle Menu"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-green-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/aboutUs"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  About Us
                </Link>
                <Link
                  href="/ourwork"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  Our Work
                </Link>
                <Link
                  href="/contactUs"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  Contact Us
                </Link>

                <div className="space-y-2 px-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Get Involved
                  </Button>
                </div>

                {/* Language Selection for Mobile */}
                <div className="px-4 py-2">
                  <select className="w-full p-2 border border-green-600 rounded text-green-900">
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
