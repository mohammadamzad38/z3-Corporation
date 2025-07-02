import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <div className="relative flex justify-center h-[200px] w-screen">
        <Image
          src="/Image/z3-corporation-cover.png"
          alt="Z3 cover Image"
          fill
          className="object-fill"
        />
        <div className="absolute container top-30">
          <h1 className="text-3xl border-b-4 border-[#ED4B41] w-[15%] text-white font-bold absulote">
            About Us
          </h1>
        </div>
      </div>

      <section className="container">
        <div className="flex flex-row gap-20 py-20">
          <div className="relative h-150 w-[50%]">
            <Image
              src="/Image/Z3-it-location-symble.jpg"
              fill
              alt="Z3-it-location-symble"
              className="object-cover p-2 border rounded-3xl"
            />
          </div>
          <div className="w-[50%]">
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
        <div className="relative w-full h-[400px]">
          <Image
            src="/Image/Bottom-banner-about.png"
            alt="Bottom Banner"
            fill
            className=""
          />
          <div className="container flex justify-center items-center">
            <div className="absolute flex flex-row items-center justify-center gap-20 top-[40%] bg-black opacity-75 p-10 rounded-2xl">
              <div className="space-y-2 flex flex-col text-center items-center">
                <FaPeopleGroup className="text-amber-300 text-7xl" />
                <p className="text-3xl font-bold text-white">200</p>
                <p className="text-lg text-white">Team Members</p>
              </div>
              <div className="space-y-2">
                <FaPeopleGroup className="text-amber-300 text-7xl" />
                <p className="text-3xl font-bold text-white">200</p>
                <p className="text-lg text-white">Team Members</p>
              </div>
              <div className="space-y-2">
                <FaPeopleGroup className="text-amber-300 text-7xl" />
                <p className="text-3xl font-bold text-white">200</p>
                <p className="text-lg text-white">Team Members</p>
              </div>
              <div className="space-y-2">
                <FaPeopleGroup className="text-amber-300 text-7xl" />
                <p className="text-3xl font-bold text-white">200</p>
                <p className="text-lg text-white">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
