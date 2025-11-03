"use client";

import PageCover from "@/components/pageCover";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import { backendurl } from "@/utils/constants";
import Loader from "@/components/Loader";

const Page = ({ params }) => {
  const { product } = React.use(params);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const res = await fetch(`${backendurl}/categories/${product}`);
        const data = await res?.json();
        const categoryData = data?.data;
        setCategory(categoryData);

        // console
        // console.log("Parent categories here", data);
      } catch (error) {
        console.log("Error fetching parent category", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesData();
  }, [product]);

  if (loading) return <Loader />;

  const isSingleProduct = category?.children?.length === 0;
  const singleProduct = isSingleProduct ? category?.children[0] : null;

  return (
    <div>
      <PageCover src={category?.image} text={category?.description} />

      <div className="pt-20">
        {/* Card Section */}
        <div className="container flex flex-wrap gap-10 justify-center">
          {category?.children?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg p-4 shadow hover:shadow-lg w-[300px] opacity-90 hover:opacity-100 hover:border-[#ED4B41]"
            >
              <Link href={`/product/${item?.slug}`}>
                <div className="relative h-[300px] w-full mb-4">
                  <Image
                    src={item?.image}
                    alt={item?.img_alt}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h2 className="text-lg text-center h-[50px] text-black font-bold">
                  {item?.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>

        {/* Article Section — show once at the bottom */}
        {category?.content ? (
          <div className="bg-black mt-16 leading-relaxed">
            <div
              className="container"
              dangerouslySetInnerHTML={{ __html: category?.content }}
            ></div>
          </div>
        ) : (
          <p className="mt-16 text-center text-gray-500 italic">
            Article not found
          </p>
        )}
        <Contact
          heading={"Looking an Adequate Solution for your Company?"}
          subHeading={
            "Contact us today for free consultation or more information."
          }
          contact={"Get In Touch"}
        />
      </div>

      {isSingleProduct && singleProduct && (
        <div className="h-auto w-full md:w-1/2 space-y-6 mx-auto my-10">
          <h1 className="text-3xl font-bold text-black">
            {singleProduct?.name}
          </h1>
          <div className="border border-gray-300 rounded-md">
            <button className="w-full text-left px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition text-[#F26F21] font-bold">
              See More Details ▼
            </button>
            <div className="px-4 py-3 text-gray-700 border-t border-gray-300">
              <p>{singleProduct?.title || singleProduct?.name}</p>
            </div>
          </div>
          <Link href={singleProduct?.pdfUrl || "#"}>
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
