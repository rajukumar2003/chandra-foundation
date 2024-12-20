"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      {/* <div className="bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <a
                href="mailto:info@chandrafoundation.org"
                className="flex items-center hover:text-green-200"
              >
                <Mail className="h-4 w-4 mr-1" />
                info@chandrafoundation.org
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center hover:text-green-200"
              >
                <Phone className="h-4 w-4 mr-1" />
                +123 456 7890
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-green-700">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-green-700">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-green-700">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-green-700">
                <Youtube className="h-4 w-4" />
              </a>
              <div className="border-l border-green-700 pl-4">
                <select className="bg-transparent text-black focus:outline-none">
                  <option value="en" className="text-black">
                    English
                  </option>
                  <option value="hi" className="text-black">
                    हिंदी
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
                  width={80}
                  height={80}
                />
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-green-700">Chandra Foundation</h1>
                  <p className="text-lg text-green-700">
                    Nurturing Dreams, Transforming Lives
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-green-900 hover:text-green-700">
                Home
              </Link>
              <Link
                href="/what-we-do"
                className="text-green-900 hover:text-green-700"
              >
                About Us
              </Link>
              <Link
                href="/our-work"
                className="text-green-900 hover:text-green-700"
              >
                Our Work
              </Link>
              <Link
                href="/take-action"
                className="text-green-900 hover:text-green-700"
              >
                Get Involved
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Donate Now
              </Button>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Join Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
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
                  href="/what-we-do"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  What we do?
                </Link>
                <Link
                  href="/why-care"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  Why Care?
                </Link>
                <Link
                  href="/our-work"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  Our Work
                </Link>
                <Link
                  href="/take-action"
                  className="text-green-900 hover:text-green-700 px-4 py-2"
                >
                  Take Action
                </Link>
                <div className="space-y-2 px-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
