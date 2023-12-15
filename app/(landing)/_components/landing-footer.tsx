import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const links = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Privacy Policy",
    href: "/",
  },
  {
    label: "Licensing",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export const LandingFooter = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            BentAI
          </h1>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
          <li>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-secondary me-4 md:me-6 transition"
              >
                {link.label}
              </Link>
            ))}
          </li>
        </ul>
      </div>
      <hr className="my-6 border border-[#1f1f28] sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center">
        © 2023{" "}
        <Link href="/" className="hover:text-secondary">
          BentAI
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};
