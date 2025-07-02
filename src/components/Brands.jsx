"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
];

export default function Brands() {
  return (
    <div className="w-full mx-w-[1200px] mx-auto">
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
        {allBrands.map((brand, idx) => (
          <SwiperSlide >
            <div  className="flex justify-center items-center mx-auto relative mb-15 h-[150px] md:h-[200px] w-[150px] md:w-[200px]">
              <Image
                src={brand.image}
                alt={brand.alt}
                fill
                className="object-contain border px-2 border-gray-200 shadow rounded-lg hover:scale-90"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
