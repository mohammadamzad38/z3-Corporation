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
    children: [
      { name: "Fire Detection and Alarm System" },
      { name: "Fire Doors" },
      { name: "Fire Fighting Equipments" },
      { name: "Fire Pump Products" },
      {name: "Fire Supression Systems"},
      { name: "Sprinkler Systems" },
      { name: "Valves Devices and Components" },
    ],
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

const formatHref = (name) =>
  "/" +
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const toggleMobileDropdown = () => setMobileDropdown((prev) => !prev);

  return (
    <header className="bg-[#EEEEEE] sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-[1200px] py-3 md:py-6 px-4 mx-auto">
        <Link href="/">
          <Image
            src="/Image/logo-z3-corporation.png"
            alt="Logo"
            width={250}
            height={250}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-2">
          {NavLinks.map((nav) => {
            const isActive = pathname === nav.href;

            if (nav.children) {
              return (
                <div
                  key={nav.name}
                  className="relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span
                    className={`text-sm font-bold px-2 py-2 cursor-pointer ${
                      showDropdown || isActive
                        ? "bg-[#F26F21] text-white rounded-md"
                        : "text-[#0A2C7D] hover:text-[#F26F21]"
                    }`}
                  >
                    {nav.name.toUpperCase()}
                  </span>
                  {showDropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md z-50 py-2 w-64">
                      {nav.children.map((child) => (
                        <Link
                          key={child.name}
                          href={formatHref(child.name)}
                          className="block px-4 py-2 text-[#0A2C7D] hover:bg-[#F26F21] text-xs font-bold hover:text-white"
                        >
                          {child.name.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={nav.name}
                href={nav.href}
                className={`text-sm font-bold px-2 py-2 ${
                  isActive
                    ? "bg-[#F26F21] text-white rounded-md"
                    : "text-[#0A2C7D] hover:text-[#F26F21]"
                }`}
              >
                {nav.name.toUpperCase()}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden cursor-pointer px-3 text-4xl"
          onClick={toggleMenu}
        >
          <span className="text-gray-400 text-sm font-bold">MENU</span>
          {open ? (
            <IoCloseSharp className="text-black" />
          ) : (
            <IoMenu className="text-black" />
          )}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {open && (
        <div className="flex flex-col lg:hidden border-t py-4 px-6 space-y-2 bg-white">
          {NavLinks.map((nav) => {
            if (nav.children) {
              return (
                <div key={nav.name}>
                  <div
                    onClick={toggleMobileDropdown}
                    className="font-bold text-[#0A2C7D] text-sm cursor-pointer hover:text-[#F26F21]"
                  >
                    {nav.name.toUpperCase()}
                  </div>
                  {mobileDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {nav.children.map((child) => (
                        <Link
                          key={child.name}
                          href={formatHref(child.name)}
                          className="block text-xs text-[#0A2C7D] hover:font-bold hover:text-[#F26F21]"
                          onClick={() => setOpen(false)}
                        >
                          {child.name.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={nav.name}
                href={nav.href}
                onClick={() => setOpen(false)}
                className="text-[#0A2C7D] text-sm font-bold hover:text-[#F26F21]"
              >
                {nav.name.toUpperCase()}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
