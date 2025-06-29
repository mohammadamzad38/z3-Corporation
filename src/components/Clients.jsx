"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const clientsLogo = [
  {
    image: "/image/nobleMarriage.png",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/arman.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/bitopi.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/civil-aviation.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/dbl.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/fakir.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/dynmicitfzllc.png",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/FCI-bd.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/giant-group.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/shanta2.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/sts-group.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/united-group.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/valmatic.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/Image/volumezro.webp",
    alt: "nobleMarriage",
  },
];

export default function Clients() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{ delay: 2000 }}
        direction="horizontal"
        loop={true}
        className="rounded-lg"
      >
        {clientsLogo.map((client, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative my-15 h-[200px] w-[200]">
              <Image
                src={client.image}
                alt={client.alt}
                fill
                className="object-contain border px-2 border-gray-200 rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
