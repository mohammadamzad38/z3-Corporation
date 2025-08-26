import Contact from "@/components/Contact";
import categoryData from "@/components/data/categoriesData.json";
import PageCover from "@/components/pageCover";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = ({ params }) => {
  const { product } = React.use(params);

  const category = categoryData[product];

  if (!category) {
    return (
      <div className="container text-5xl text-center py-20 text-red-500">
        Category not found
      </div>
    );
  }

  const isSingleProduct = category.catalog.length === 0;
  const singleProduct = isSingleProduct ? category.catalog[0] : null;

  return (
    <div>
      <PageCover text={category.title} />

      <div className="container py-20 flex flex-wrap gap-10 justify-center">
        {category.catalog.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg w-[300px] opacity-90 hover:opacity-100 hover:border-[#ED4B41]"
          >
            <Link href={`/product/${item.url}`}>
              <div className="relative h-[300px] w-full mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h2 className="text-lg text-center h-[50px] text-black font-bold">
                {item.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>

      {isSingleProduct && singleProduct && (
        <div className="h-auto w-full md:w-1/2 space-y-6 mx-auto my-10">
          <h1 className="text-3xl font-bold text-black">
            {singleProduct.name}
          </h1>
          <div className="border border-gray-300 rounded-md">
            <button className="w-full text-left px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition text-[#F26F21] font-bold">
              See More Details ▼
            </button>
            <div className="px-4 py-3 text-gray-700 border-t border-gray-300">
              <p>{singleProduct.title || singleProduct.name}</p>
            </div>
          </div>
          <Link href={singleProduct.pdfUrl || "#"}>
            <button className="relative overflow-hidden group px-6 py-3 border-2 border-[#F26F21] text-[#F26F21] font-bold rounded cursor-pointer">
              <span className="relative z-10 flex items-center gap-4 group-hover:text-white transition duration-300">
                Download Catalogue
              </span>
              <span
                className="absolute inset-0 bg-[#F26F21] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.1, 1, 0.3, 1)",
                }}
              />
            </button>
          </Link>
        </div>
      )}

      
    </div>
  );
};

export default Page;
