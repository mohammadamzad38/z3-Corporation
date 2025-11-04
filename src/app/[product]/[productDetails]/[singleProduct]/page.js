"use client";

import productsData from "@/components/data/productsData.json";
import DetailsBox from "@/components/DetailsBox";
import PageCover from "@/components/pageCover";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { backendurl } from "@/utils/constants";
import Loader from "@/components/Loader";

const Page = () => {
  const { singleProduct } = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${backendurl}/categories/${singleProduct}`);
        const data = await res.json();
        const productData = data.data;
        setProduct(productData);
      } catch (error) {
        console.log("Error fetching Products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [singleProduct]);

  console.log("last consol", product);

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="text-center py-20 text-3xl text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div>
      <PageCover text={product?.metaTitle} />
      <div className="container flex flex-col gap-15 px-0 md:px-4 py-20 md:flex-row ">
        <div className="relative h-[500px] w-full md:w-[600px]">
          <Image
            src={product.image}
            alt={product.img_alt}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center px-5 mx-auto  w-full">
          <DetailsBox
            title={product.name}
            name={product.name}
            description={product.content}
            pdfUrl={product.pdfUrl}
          />
        </div>
      </div>

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
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
