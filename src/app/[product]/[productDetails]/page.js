"use client";

import productsData from "@/components/Data/productsData.json";
import DetailsBox from "@/components/DetailsBox";
import PageCover from "@/components/pageCover";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const { product, productDetails } = useParams(); // ✅ useParams instead of params prop

  const categoryDetails = productsData[productDetails];

  if (!categoryDetails) {
    return (
      <div className="text-center py-20 text-3xl text-red-500">
        Product not found
      </div>
    );
  }

  const hasProducts =
    categoryDetails?.catalog && categoryDetails?.catalog?.length > 0;

  return (
    <div>
      <PageCover text={categoryDetails?.title} />

      {/* Category image and article */}
      <div
        className={`container ${
          hasProducts
            ? "flex flex-col justify-center gap-15 py-15 items-center"
            : "flex flex-col md:flex-row px-0 md:px-4 gap-15 py-15"
        }`}
      >
        <div className="relative h-[500px] w-full md:w-[600px]">
          <Image
            src={categoryDetails?.image}
            alt={categoryDetails?.title}
            fill
            className="object-contain rounded"
          />
        </div>

        {/* If products exist, show product cards */}
        {hasProducts ? (
          <div className="flex flex-wrap justify-center gap-10 ">
            {categoryDetails?.catalog?.map((productItem, idx) => (
              <div
                key={idx}
                className="w-[300px] border hover:scale-90 rounded-xl opacity-90 hover:opacity-100 hover:border-[#ED4B41] p-4"
              >
                <Link
                  href={`/${product}/${productDetails}/${productItem?.url}`}
                >
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={productItem?.image}
                      fill
                      alt={productItem?.name}
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="h-[70px] flex justify-center items-center mt-2">
                    <h1 className="font-bold text-[#ED4B41] hover:text-[#F26F21] text-lg text-center">
                      {productItem?.title}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          // If no products, show Details/Download box
          <div className="flex flex-col md:flex-row mx-auto px-5 md:px-0 w-full">
            <DetailsBox
              title={categoryDetails.title}
              name={categoryDetails.name}
              description={categoryDetails.description}
              pdfUrl={categoryDetails.pdfUrl}
            />
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-[#1863AB] h-[300px] md:h-[200px] flex">
        <div className="flex flex-col justify-between md:gap-0 gap-10 py-5 px-10 lg:py-0 items-center text-center lg:flex-row container border-b-8 border-[#ED4B41]">
          <div className="text-white space-y-4 text-start">
            <h1 className="text-2xl font-bold">
              Looking an Adequate Solution for your Company?
            </h1>
            <h3>Contact us today for free consultation or more information.</h3>
          </div>

          <div className="mr-32">
            <button className="px-5 py-2 border-2 font-bold border-white hover:text-[#ED4B41]">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
