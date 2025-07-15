"use client";

import Image from "next/image";
import { useState } from "react";
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
        <div className="h-auto w-1/2 py-5 space-y-6">
          <h1 className="text-3xl font-bold text-black">{product.name}</h1>
          <div className="border border-gray-300 rounded-md">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left px-4 py-3  bg-gray-100 hover:bg-gray-200 transition text-[#ED4B41] font-bold"
            >
              {isOpen ? "Hide Details ▲" : "Show More Details ▼"}
            </button>
            {isOpen && (
              <div className="px-4 py-3 text-gray-700 border-t border-gray-300">
                <p>{product.title}</p>
                <p className="text-sm mt-2">
                  This product is designed for effective fire safety and
                  suitable for various applications. Contact us for more details
                  or installation support.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
