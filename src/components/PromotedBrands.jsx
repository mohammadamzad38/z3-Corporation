"use client"

import Image from "next/image";

const allBrands = [
  {
    image: "/Image/naffco.gif",
    alt: "naffco",
  },
  {
    image: "/Image/tyco.webp",
    alt: "tyco",
  },
  {
    image: "/Image/honeywell.jpg",
    alt: "honeywell",
  },
  {
    image: "/Image/triga-logo-black.png",
    alt: "triga",
  },
  {
    image: "/Image/Fike-logo.webp",
    alt: "Fike",
  },
  {
    image: "/Image/cooper-logo.png",
    alt: "cooper",
  },
  {
    image: "/Image/tornatech-logo.jpg",
    alt: "tornatech",
  },
  {
    image: "/Image/peerless_pump.jpeg",
    alt: "tornatech",
  },
  {
    image: "/Image/xtrails_logo.png",
    alt: "tornatech",
  },
  {
    image: "/Image/sauter-ag-logo-.png",
    alt: "tornatech",
  },
  {
    image: "/Image/Cla-Val-web.jpg",
    alt: "tornatech",
  },
  {
    image: "/Image/clarke_logo.jpeg",
    alt: "tornatech",
  },
  {
    image: "/Image/shield_logo.jpeg",
    alt: "tornatech",
  },
  {
    image: "/Image/valmatic.webp",
    alt: "tornatech",
  },
];

export default function PromotedBrands() {
  return (
    <div className="md:my-10 lg:my-20 space-y lg:space-y-10">
      <p className="text:sm text-xl lg:text-3xl font-bold text-center text-[#ED4B41] pt-10 md:pt-0">
        BRANDS WE SELL / PROMOTE
      </p>
      <div className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 md:p-10 justify-items-center">
        {allBrands.map((brand, idx) => (
          <div key={idx} className="relative h-[200px] w-[200px] hover:rounded-xl hover:border-2 hover:opacity-70 hover:border-[#ED4B41] hover:shadow-xl">
            <Image
              className="object-contain p-2"
              src={brand.image}
              fill
              alt={brand.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
