import PageCover from "@/components/pageCover";
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";

export const metadta = {
  title: "",
  description: "",
};

const page = () => {
  return (
    <div>
      <PageCover text={"About Us"} />
      <section className="container">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 py-20">
          <div className="relative h-[400px] lg:h-150 w-[80%] lg::w-[50%]">
            <Image
              src="/Image/Z3-it-location-symble.jpg"
              fill
              alt="Z3-it-location-symble"
              className="object-cover p-2 border rounded-3xl"
            />
          </div>
          <div className="p-10 md:p-20 lg:p-0 w-full lg:w-[50%]">
            <p className="text-black">
              <a href="" className="font-bold text-lg text-[#ED4B41]">
                MRZ Group{" "}
              </a>
              is a leading business group in Bangladesh diversified in
              engineering, construction, large government & military contract,
              ship building, dredging, IT and large scale agricultural farming.{" "}
              <br />
              <br />
              <a href="" className="font-bold text-lg text-[#ED4B41]">
                Z3 Corporation
              </a>{" "}
              is a concern of{" "}
              <a href="" className="text-lg text-[#ED4B41]">
                MRZ Group
              </a>
              . It is ISO certified, one of the most innovative IT Solutions
              providers in the country and one of the largest Fire Fighting EPC
              Contractor. (Design, Supply, Installation, Commissioning and
              After-sales) firms in Bangladesh, providing all kinds of Fire
              Fighting, Fire Protection, Suppression, Fire Detection & Alarm
              System, PA System and Passive Fire Protection System, e.g. Fire
              Doors, Fire Paints, etc. <br />
              <br /> We have huge expertises of highly qualified in house
              software developer, engineers and technicians with overseas
              working experience <span className="text-lg">(EU & MENA)</span>.
              We supply <span className="text-lg">UL, FM, LPCB,</span> Kitemark
              approved products. We are the authorized distributor of{" "}
              <span className="font-bold text-lg">
                NAFFCO (UAE), TRIGA by Honeywell (USA) and SHIELD (UK)
              </span>
              . Amongst our other product ranges, we supply Tyco (USA) & SHIELD
              (UK) Sprinklers, SHIELD (UK) <br />
              <br /> Addressable Fire Alarm System, Honeywell (USA) Air Sampling
              System, SHIELD (UK) Valves & Fittings, NAFFCO (UAE) Pumps &
              Hydrant System. <br />
              <br />{" "}
              <span className="text-lg font-bold">
                Z3 Corporation, we do not compromise on products & services
                quality as our motto states-
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="w-full">
        <div className="relative w-full h-[500px] md:h-[300px] lg:h-[500px]">
          <Image
            src="/Image/Bottom-banner-about.png"
            alt="Bottom Banner"
            fill
            className="hidden md:block"
          />
          <Image
            src="/Image/Fire-brigrade.png"
            alt="Bottom Banner"
            fill
            className="block md:hidden"
          />

          <div className="container flex justify-center items-center">
            <div className="absolute top-10 lg:top-20">
              <p className="text-white font-bold md:text-2xl lg:text-3xl ">
                “Your Safety, Our Priority”
              </p>
            </div>
            <div className="absolute flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-20 top-25 md:top-[40%] bg-black opacity-75 p-2 md:p-5 rounded-2xl">
              <div className="space-y-1 md:space-y-2 flex flex-col text-center items-center">
                <FaPeopleGroup className="text-amber-300 text-3xl md:text-5xl lg:text-7xl" />
                <p className="text-lg md:text-xl lg:text-3xl font-bold text-white">
                  200
                </p>
                <p className="text-xs lg:text-lg text-white">Team Members</p>
              </div>
              <div className="space-y-1 md:space-y-2 flex flex-col text-center items-center">
                <FcManager className="text-amber-300 text-3xl md:text-5xl lg:text-7xl" />
                <p className="text-lg md:text-xl lg:text-3xl font-bold text-white">
                  20
                </p>
                <p className="text-xs lg:text-lg text-white">
                  Qualified Engineers
                </p>
              </div>
              <div className="space-y-1 md:space-y-2 flex flex-col text-center items-center">
                <FaPeopleGroup className="text-amber-300 text-3xl md:text-5xl lg:text-7xl" />
                <p className="text-lg md:text-xl lg:text-3xl font-bold text-white">
                  500
                </p>
                <p className="text-xs lg:text-lg text-white">
                  Successful Projects
                </p>
              </div>
              <div className="space-y-1 md:space-y-2 flex flex-col text-center items-center">
                <FaPeopleGroup className="text-amber-300 text-3xl md:text-5xl lg:text-7xl" />
                <p className="text-lg md:text-xl lg:text-3xl font-bold text-white">
                  1000
                </p>
                <p className="text-xs lg:text-lg text-white">
                  Care for Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1863AB] h-[300px] md:h-[200px] flex ">
        <div className="flex flex-col justify-between md:gap-0 gap-10 py-5 px-10 lg:py-0 items-center text-center lg:flex-row container border-b-8 border-[#ED4B41]">
          <div className="text-white space-y-4 text-start">
            {" "}
            <h1 className="text-2xl font-bold">
              Looking an Adequate Solution for your Company?
            </h1>
            <h3>Contact us today for free consultation or more information.</h3>
          </div>

          <div className="mr-32">
            <button className="px-5 py-2 border-2 font-bold border-white hover:text-[#ED4B41]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
