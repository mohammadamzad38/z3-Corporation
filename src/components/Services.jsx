"use client"

import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const allServices = [
  {
    title: "Software Solutions for Digital Future",
    description:
      "We develop cutting-edge software tailored to meet the evolving needs of businesses and individuals. Our expertise spans web and mobile applications, enterprise solutions, and AI-driven technologies, ensuring efficiency, scalability, and a seamless user experience. Let’s build the future together!",
    image: "/Image/SoftwareServ.jpg",
  },
  {
    title: "Fire Fighting Equipment",
    description:
      "We are committed to provide quality Firefighting equipment which are designed to extinguish and control fires. These essential tools include fire extinguishers, hoses, hydrants, and protective gear.",
    image: "/Image/fightingEquipments.png",
  },
  {
    title: "Fire Detection & Alarm System",
    description:
      "Z3 corporation is the industry leading supplier for Fire Detection and Alarm System which plays a vital role in early fire detection, allowing for rapid response and potentially saving lives and property.",
    image: "/Image/fire-alarm.webp",
  },
  {
    title: "Sprinkler System",
    description:
      "Having experience over a decade in fire fighting solution, we're the front-runner to provide sprinkler systems for buildings and industrial facilities which are non-negotiable in quality.",
    image: "/Image/fireSprinkler.webp",
  },
  {
    title: "Extinguishing & Suppression System",
    description:
      "We don’t compromise with quality and Extinguishing and suppression systems are among one of our products. They come with various technologies and agents, such as foam, gas, or chemical substances which are capable of suppressing or extinguishing fires swiftly and efficiently.",
    image: "/Image/Extinguishing-_-Suppression.webp",
  },
  {
    title: "Fire Doors",
    description:
      "We ensure the best fire fighting doors which can withstand in a rigorous fire and slow the spread of it. They play a crucial role in enhancing fire safety by providing a barrier that helps protect occupants and property during emergencies.",
    image: "/Image/Internal-Fire-Doors.png",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {allServices.map((service, idx) => (
          <div key={idx} data-aos="zoom-in"  className="border rounded-xl m-10 shadow-xs">
            <div className="w-full h-[250px] relative overflow-hidden">
              <Image
                className="object-center hover:scale-115 duration-300 border rounded-t-xl"
                fill
                src={service.image}
                alt={service.title}
              />
            </div>
            <div className="">
              <h1 className="text-xl h-[80px] py-4 px-3 font-bold text-[#F26F21] text-wrap">
                {service.title}
              </h1>
              <p className="text-start text-sm overflow-hidden h-[150px] px-4 text-gray-600">
                {service.description}
              </p>
            </div>
            <button className="border bg-[#F26F21] font-bold  hover:bg-[#f26e21b7] w-full h-10 rounded-b-xl">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
