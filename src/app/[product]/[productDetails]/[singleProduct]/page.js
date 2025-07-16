"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import productsData from "../../productsData.json";

const Page = ({ params }) => {
  const { singleProduct } = params;

  const [isOpen, setIsOpen] = useState(false);

  const allCatalogItems = Object.values(productsData).flatMap(
    (category) => category.catalog
  );

  const product = allCatalogItems.find((item) => {
    const slug = item.url.split("/").pop();
    return slug === singleProduct;
  });

  if (!product) {
    return (
      <div className="text-center py-20 text-3xl text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="">
      <div className="relative flex justify-center h-[200px] w-full">
        <Image
          src="/Image/z3-corporation-cover.png"
          alt={product.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-1/2 m-4 md:m-10 lg:mx-[15%] transform -translate-y-1/2">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold border-b-4 border-[#ED4B41] text-white">
            {product.title}
          </h1>
        </div>
      </div>

      <div className="flex justify-center gap-20 mx-auto container py-20">
        <div className="relative h-96 w-1/2 ">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded"
          />
        </div>

        <div className="h-auto w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-black">{product.name}</h1>
          <div className="border border-gray-300 rounded-md">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition text-[#F26F21] font-bold"
            >
              {isOpen ? "Hide Details ▲" : "See More Details ▼"}
            </button>
            {isOpen && (
              <div className="px-4 py-3 text-gray-700 border-t border-gray-300">
                <p>{product.title}</p>
              </div>
            )}
          </div>
          <a href={product.pdfUrl}>
            <button className="relative overflow-hidden group px-6 py-3 border-2 border-[#F26F21] text-[#F26F21] font-bold rounded  cursor-pointer">
              <span className="relative z-10 flex place-items-center gap-4 group-hover:text-white transition duration-300">
                Download Catalogue <FaCloudDownloadAlt />
              </span>
              <span
                className="absolute inset-0 bg-[#F26F21] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.1, 1, 0.3, 1)",
                }}
              />
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#1863AB] h-[300px] md:h-[200px] flex ">
        <div className="flex flex-col justify-between md:gap-0 gap-10 py-5 px-10 lg:py-0 items-center text-center lg:flex-row container border-b-8 border-[#ED4B41]">
          <div className="text-white space-y-4 text-start">
            {" "}
            <h1 className="text-2xl font-bold">
              Looking an Adequate Solution for your Company?
            </h1>
            <h3>Contact us today for free conslutaion or more information.</h3>
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

export default Page;
