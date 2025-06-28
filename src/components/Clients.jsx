"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const clientsLogo = [
  {
    image: "/image/nobleMarriage.png",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
  {
    image: "/public/Image/matro.webp",
    alt: "nobleMarriage",
  },
];

export default function Clients() {
  return (
    <div>
      <Swiper>
        {clientsLogo.map((client, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[500px] w-full">

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
