import Image from "next/image";

import fighterImage from "../../../public/Image/Fire_fighter.jpg";

import { FaPhone } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdMarkEmailUnread } from "react-icons/md";
import PageCover from "@/components/pageCover";

const page = () => {
  return (
    <div>
     <PageCover text={"Contact Us"}/>
      <section className="container py-20 shadow-2xl">
        <h1 className="text-3xl text-center pb-10 font-bold text-black">
          Get In Touch
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center place-items-center md:relative">
          <div className="md:relative hover:scale-95 z-10 left-20 bg-[#F26F21] space-y-4 p-6 max-h-[310px] w-[70%] md:w-[30%] lg::w-[25%] shadow-2xl rounded-xl">
            <div className="space-y-2">
              <div className="flex place-items-center gap-3 font-bold text-2xl">
                <FaPhone className="text-black" />
                <h4 className="text-black">Phone</h4>
              </div>
              <a
                href="tel:01991198322"
                className="text-lg ml-10 hover:text-gray-500"
              >
                +880 1991-198 322
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex place-items-center gap-3 font-bold text-2xl">
                <MdMarkEmailUnread className="text-black" />
                <h4 className="text-black">e-mail</h4>
              </div>
              <a
                href="mailto:info@z3corporation.com"
                className="text-lg ml-10 hover:text-gray-500"
              >
                info@z3corporation.com
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex place-items-center gap-3 font-bold text-2xl">
                <GrLocation className="text-black" />
                <h4 className="text-black">Location</h4>
              </div>
              <p className="text-sm ml-10">
                HOUSE: 11/A2, ROAD-41, <br /> GULSHAN-2, DHAKA-1212, BANGLADESH
              </p>
            </div>
          </div>

          <div className="flex place-items-center">
            <div className="relative h-[450px] hidden md:block w-[300px] z-0">
              <Image
                src={fighterImage}
                fill
                alt="Fire Fighter"
                className="rounded-bl-3xl rounded-tl-3xl"
              />
            </div>
            <div className="p-5 pl-15 space-y-10">
              <form
                action="submit"
                className="flex flex-col text-black space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-bold">Full Name</h3>
                  <input
                    type="text"
                    className="border border-black rounded-sm px-4 py-1"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold">Email</h3>
                  <input
                    type="email"
                    name="email"
                    className="border border-black rounded-sm px-4 py-1"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold">Phone</h3>
                  <input
                    type="number"
                    name="phone"
                    className="border border-black rounded-sm px-4 py-1"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold">Type Your message</h3>
                  <textarea
                    name="message"
                    id=""
                    className="border border-black rounded-sm w-full h-36 p-2"
                  ></textarea>
                </div>
                <button className=" place-items-center hover:scale-90 cursor-pointer py-2  text-white rounded-xl font-bold bg-[#F26F21]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
