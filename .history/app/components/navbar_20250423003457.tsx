"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const { translations } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close QR popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowQR(false);
      }
    }

    if (showQR) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showQR]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Chandra Foundation"
                    width={120}
                    height={120}
                  />
                  <div className="ml-3">
                    <h1 className="text-2xl font-bold text-green-900">
                      {translations.footer.foundationName}
                    </h1>
                    <p className="text-sm text-green-700">
                      {translations.footer.tagline}
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <div className="hidden lg:flex items-center space-x-8">
                  <Link href="/" className="text-green-900 hover:text-green-700">
                    {translations.nav.home}
                  </Link>
                  <Link
                    href="/aboutUs"
                    className="text-green-900 hover:text-green-700"
                  >
                    {translations.nav.about}
                  </Link>
                  <Link
                    href="/contactUs"
                    className="text-green-900 hover:text-green-700"
                  >
                    {translations.nav.contact}
                  </Link>

                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => setShowQR(true)}
                  >
                    {translations.nav.donate}
                  </Button>

                  <Link href="/contactUs">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      {translations.nav.getInvolved}
                    </Button>
                  </Link>

                  <LanguageSelector />
                </div>
              </div>

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
                  <Link href="/" className="text-green-900 hover:text-green-700 px-4 py-2">
                    {translations.nav.home}
                  </Link>
                  <Link href="/aboutUs" className="text-green-900 hover:text-green-700 px-4 py-2">
                    {translations.nav.about}
                  </Link>
                  <Link href="/contactUs" className="text-green-900 hover:text-green-700 px-4 py-2">
                    {translations.nav.contact}
                  </Link>

                  <div className="space-y-2 px-4">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white mb-2"
                      onClick={() => setShowQR(true)}
                    >
                      {translations.nav.donate}
                    </Button>
                    <Link href="/contactUs">
                      <Button
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      >
                        {translations.nav.getInvolved}
                      </Button>
                    </Link>
                  </div>

                  <div className="px-4 py-2">
                    <LanguageSelector />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* QR Code Popup Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-800">Scan to Donate</h2>
            <Image
              src="/images/demo-qr.png"
              alt="QR Code"
              width={250}
              height={250}
              className="mx-auto"
            />
            <Button
              onClick={() => setShowQR(false)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
