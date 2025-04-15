"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/chandraafoundation",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/chandraafoundation",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/chandraa-foundation/",
    label: "LinkedIn",
  },
];

const quickLinks = [
  { name: "What we do?", href: "/aboutUs" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contactUs" },
];

export default function Footer() {
  const {translations} = useLanguage();
  const quickLinks = [
    { name: translations.footer.whatWeDo, href: "/aboutUs" },
    { name: translations.footer.getInvolved, href: "/contactUs" },
    { name: translations.footer.CO, href: "/contactUs" },
  ];
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              {translations.footer.foundationName}
            </Link>
            <p className="text-green-200 text-sm">
              {translations.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.footer.contactUs}</h3>
            <address className="not-italic text-green-200 space-y-2">
              <p>
                {translations.footer.address}
              </p>
              <p>{translations.footer.phone} </p>
              <p>{translations.footer.email}</p>
            </address>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{translations.footer.stayUpdated}</h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-black placeholder-green-400"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                {translations.footer.stayUpdated}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-green-300">
            © {new Date().getFullYear()} {translations.footer.rightsReserved}
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Prevent security vulnerabilities
                className="text-green-300 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
