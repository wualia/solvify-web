import React from "react";
import Link from "next/link";
import ModeToggle from "@/components/ui/toogleTheme";
import { FooterLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="py-4 bg-black text-white">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-between items-center">
        <div className="text-sm">
          <p>© 2025 LJP Legaltech SLU</p>
        </div>
        <div className="text-sm text-gray-200 dark:text-gray-300 space-x-4">
          {FooterLinks.map((link) => (
            <Link key={link.id} href={link.path} className="hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
};

export default Footer;
