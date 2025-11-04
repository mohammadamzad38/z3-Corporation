"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { backendurl } from "@/utils/constants";
import Loader from "@/components/Loader";
import "@/components/styles/blog.css";

const Page = ({ params }) => {
  const { slug } = React.use(params);

  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${backendurl}/blogs/${slug}`);
        const data = await res?.json();
        setBlog(data.data);
      } catch (error) {
        console?.log("Error fetching blog content:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) return <Loader />;
  if (!blog) return <div className="text-red-600 text-3xl">Blog not found</div>;
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-4xl text-black font-bold mb-4">
        {blog?.blog_title}
      </h1>
      <div className="relative my-10 max-w-[400px] md:max-w-[800px] h-[300px]">
        <Image
          src={blog?.featured_img}
          alt={blog?.featured_img_alt}
          fill
          className="object-cover mb-6"
        />
      </div>
      <div
        className="text-black blog-content"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      ></div>
    </div>
  );
};

export default Page;
