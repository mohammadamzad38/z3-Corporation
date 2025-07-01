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
    alt: "matro",
  },
  {
    image: "/Image/arman.webp",
    alt: "arman",
  },
  {
    image: "/Image/bitopi.webp",
    alt: "bitopi",
  },
  {
    image: "/Image/civil-aviation.webp",
    alt: "aviation",
  },
  {
    image: "/Image/dbl.webp",
    alt: "dbl",
  },
  {
    image: "/Image/fakir.webp",
    alt: "fakir",
  },
  {
    image: "/Image/dynmicitfzllc.png",
    alt: "dynmicitfzllc",
  },
  {
    image: "/Image/FCI-bd.webp",
    alt: "FCI",
  },
  {
    image: "/Image/giant-group.webp",
    alt: "giant",
  },
  {
    image: "/Image/shanta2.webp",
    alt: "shanta2",
  },
  {
    image: "/Image/sts-group.webp",
    alt: "sts",
  },
  {
    image: "/Image/united-group.webp",
    alt: "united",
  },
  {
    image: "/Image/valmatic.webp",
    alt: "valmatic",
  },
  {
    image: "/Image/volumezro.webp",
    alt: "volumezro",
  },
];

export default function Clients() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Pagination, Mousewheel, Autoplay]}
        centeredSlides={false}
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{ delay: 2000 }}
        direction="horizontal"
        loop={true}
        className="rounded-lg"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {clientsLogo.map((client, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center items-center mx-auto relative mb-15 h-[150px] md:h-[200px] w-[150px] md:w-[200px]">
              <Image
                src={client.image}
                alt={client.alt}
                fill
                className="hover:scale-90 object-contain border px-2 border-gray-200 shadow rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
