"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="bg-[#EEEEEE] sticky p-5 px-35">
      <div className="flex justify-between items-center text-center max-w-[1200px] m-auto">
        <div>
          <a href="/">
            {" "}
            <Image
              src="/Image/logo-z3-corporation.png"
              alt="logo"
              width={250}
              height={250}
            ></Image>
          </a>
        </div>
        <div>
          {NavLinks.map((nav) => {
            const isActive = currentPath === nav.href;
            return (
              <Link
                className={`mx-2 text-[#0A2C7D] text-sm font-bold ${
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
      </div>
    </header>
  );
};

export default Header;
