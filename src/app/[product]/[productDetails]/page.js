"use client";

import Contact from "@/components/Contact";
import DetailsBox from "@/components/DetailsBox";
import PageCover from "@/components/pageCover";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { backendurl } from "@/utils/constants";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const Page = () => {
  const { product, productDetails } = useParams();
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);

  // const categoryDetails = backendurl[productDetails];

  useEffect(() => {
    const fetchSubCatagories = async () => {
      try {
        const res = await fetch(`${backendurl}/categories/${productDetails}`);
        const responsesData = await res.json();
        const subCategoriesData = responsesData?.data;

        setSubCategories(subCategoriesData);
        console.log("Before sest Data or fetch data ", subCategoriesData);
      } catch (error) {
        console.log("Error fetching sub category", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubCatagories();
  }, [productDetails]);

  if (loading) return <Loader />;

  const hasProducts =
    subCategories?.children && subCategories?.children?.length > 0;

  return (
    <div>
      <PageCover text={subCategories?.description} />

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
            src={subCategories?.image}
            alt={subCategories?.name}
            fill
            className="object-contain rounded"
          />
        </div>

        {/* If products exist, show product cards */}
        {hasProducts ? (
          <div className="flex flex-wrap justify-center gap-10 ">
            {subCategories?.children?.map((productItem, idx) => (
              <div
                key={idx}
                className="w-[300px] border border-gray-100 hover:scale-90 rounded-xl opacity-90 hover:opacity-100 hover:border-[#ED4B41] p-4"
              >
                <Link
                  href={`/${product}/${productDetails}/${productItem?.slug}`}
                >
                  <div className="relative h-[300px] w-full">
                    <Image
                      src={productItem?.image}
                      fill
                      alt={productItem?.img_alt}
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="h-[70px] flex justify-center items-center mt-2">
                    <h1 className="font-bold text-[#ED4B41] hover:text-[#F26F21] text-lg text-center">
                      {productItem?.name}
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
              title={subCategories.name}
              name={subCategories.name}
              description={subCategories.content}
              pdfUrl={subCategories.pdfUrl}
            />
          </div>
        )}
      </div>

      <Contact
        heading={"Looking an Adequate Solution for your Company?"}
        subHeading={
          "Contact us today for free consultation or more information."
        }
        contact={"Get In Touch"}
      />
    </div>
  );
};

export default Page;
