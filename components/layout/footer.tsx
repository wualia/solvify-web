import React from "react";
import Link from "next/link";
import ModeToggle from "@/components/ui/toogleTheme";
import { FooterLinks } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-50 text-white dark:bg-background dark:text-white">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center">
        <div className="text-sm text-gray-700 dark:text-white">
          <p>© 2025 LJP Legaltech SLU</p>
        </div>
        <div className="text-sm text-gray-700 dark:text-white space-x-4">
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
