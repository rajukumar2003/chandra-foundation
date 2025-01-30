"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  { name: "What we do?", href: "/about" },
  { name: "Our Work", href: "/programs" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              Chandra Foundation
            </Link>
            <p className="text-green-200 text-sm">
              Together, we can make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-green-200 space-y-2">
              <p>
                74 D 6 Vivekpuri, Maya Market, Barra Baipass, Kanpur Nagar,
                Uttar Pradesh, 208027
              </p>
              <p>Phone: (+91) 9044850387 </p>
              <p>Email: cf.helpinghands@yahoo.com</p>
            </address>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-black placeholder-green-400"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-green-300">
            © {new Date().getFullYear()} Chandra Foundation. All rights
            reserved.
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
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
