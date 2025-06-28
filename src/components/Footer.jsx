import Image from "next/image";
import Link from "next/link";

import {
  FaLinkedinIn,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#383838] ">
      <div className="max-w-[1200px] px-10 mx-auto pt-20 pb-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-10">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/Image/logo-z3-corporation.png"
                alt="Logo"
                width={250}
                height={250}
              ></Image>
            </Link>
            <p className="text-wrap mt-4 text-start">
              Z3 Corporation is the leading Fire Safety, Electrical Safety,
              Building Safety & Structural Safety consultancy & contractor
              (supply, installation, commissioning & after-sales) organization
              in Bangladesh.
            </p>
            <div className="flex gap-5">
              <Link
                className="bg-[#0866FF] hover:-translate-y-1 transform transition duration-200 ease-in-out p-1 border border-[#0866FF] rounded-2xl"
                href="#"
              >
                <FaSquareFacebook />
              </Link>

              <Link
                className="bg-black hover:-translate-y-1 transform transition duration-200 ease-in-out p-1 border border-black rounded-2xl"
                href="#"
              >
                <FaSquareXTwitter />
              </Link>

              <Link
                className="bg-[#0A66C2] hover:-translate-y-1 transform transition duration-200 ease-in-out p-1 border border-[#0A66C2] rounded-2xl"
                href="#"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold">FOREIGN PARTNERS</h1>
            <div className="text-sm space-y-2 lg:mt-14 mt-7">
              <p>Naffco</p>
              <p>Fike</p>
              <p>Shield</p>
              <p>Honeywell</p>
              <p>Tyco</p>
              <p>Peerless Pump</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold">QUICK LINKS</h1>
            <div className="text-sm flex flex-col space-y-2 lg:mt-14 mt-7">
              <span>
                <Link className="hover:text-[#F26F21]" href="/about-us">
                  About Us
                </Link>
              </span>
              <span>
                {" "}
                <Link className="hover:text-[#F26F21]" href="/blog">
                  Blog
                </Link>
              </span>
              <span>
                <Link className="hover:text-[#F26F21]" href="/contact-us">
                  Contact Us
                </Link>
              </span>
            </div>
          </div>

          <div>
            <h1 className="font-bold">CONTACT US</h1>
            <div className="text-sm flex flex-col gap-2 lg:mt-14 mt-7">
              <a className="hover:text-[#F26F21]" href="tel:8801991198322">
                <span className="text-white ">Phone:</span> +880 1991-198 322
              </a>
              <a
                className="hover:text-[#F26F21]"
                href="mailto:info@z3corporation.com"
              >
                <span className="text-white">Email:</span>{" "}
                info@z3corporation.com
              </a>
              <h4>
                Address: Level: 1&2, House: 11/A2, Road-41, Gulshan-2,
                Dhaka-1212, Bangladesh
              </h4>
            </div>
          </div>
        </div>
        <div className="border rounded-2xl border-gray-600 w-full my-10"></div>

        <div className="flex flex-wrap text-sm justify-center lg:gap-10 gap-6">
          <Link className="hover:text-[#F26F21]" href="/privacy-policy">
            PRIVACY POLICY
          </Link>
          <Link className="hover:text-[#F26F21]" href="/terms-and-conditions">
            TERMS AND CONDITIONS
          </Link>
          <Link className="hover:text-[#F26F21]" href="/contact-us">
            CONTACT US
          </Link>
        </div>
        <div className="text-center text-sm lg:mt-4 mt-7">
          <h1>© 2019-2025 Z3 Corporation | All Rights Reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
