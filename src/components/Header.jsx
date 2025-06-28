"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { IoCloseSharp, IoMenu } from "react-icons/io5";

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "ABOUT US",
    href: "/about-us",
  },
  {
    name: "PRODUCTS AND SERVICES",
    href: "/products-and-services",
  },
  {
    name: "IT SERVICES",
    href: "/it-services",
  },
  {
    name: "CLIENTS",
    href: "/clients",
  },
  {
    name: "OUR TEAM",
    href: "/our-team",
  },
  {
    name: "AWARDS",
    href: "/awards",
  },
  {
    name: "CONTACT US",
    href: "/contact-us",
  },
];

const Header = () => {
  const currentPath = usePathname();

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <header className="bg-[#EEEEEE] flex sticky top-0 z-50 flex-col">
      <div className="flex justify-between lg:gap-32 items-center max-w-[1200px] py-6 mx-auto">
        <Link href="/">
          <Image
            src="/Image/logo-z3-corporation.png"
            alt="logo"
            width={250}
            height={250}
          ></Image>
        </Link>

        <div className="hidden md:flex items-center">
          {NavLinks.map((nav) => {
            const isActive = currentPath === nav.href;
            return (
              <Link
                className={`mx-2 text-[#0A2C7D] hidden lg:block text-xs font-bold ${
                  isActive
                    ? "bg-[#F26F21] rounded-md px-2 py-2 text-white"
                    : "hover:text-[#F26F21]"
                }`}
                href={nav.href}
                key={nav.name}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Designe */}

        <div
          className="lg:hidden cursor-pointer ml-20 md:ml-80 text-4xl"
          onClick={handleOpen}
        >
          <span className="text-gray-400 text-sm font-bold">MENU</span>
          {open ? (
            <IoCloseSharp className="text-black" />
          ) : (
            <IoMenu className="text-black" />
          )}
        </div>
      </div>

      {open && (
        <div className="flex flex-col border border-gray-950 lg:hidden  py-4 px-10 space-y-2">
          {NavLinks.map((nav) => {
            const isActive = currentPath === nav.href;
            return (
              <Link
                key={nav.name}
                href={nav.href}
                onClick={() => setOpen(false)}
                className={`text-[#0A2C7D] text-sm w-full font-bold ${
                  isActive
                    ? "bg-[#F26F21] text-white max-w-[50%] px-2 py-1 rounded-md"
                    : "hover:text-[#F26F21]"
                }`}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
