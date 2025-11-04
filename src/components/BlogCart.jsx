"use client";

import Image from "next/image";
import CommonBtn from "./CommonBtn";
import { slugify } from "./Slugify";
import Link from "next/link";
import { backendurl } from "@/utils/constants";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function BlogCart() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${backendurl}/blogs`);
        const data = await res?.json();

        setAllBlogs(data?.data?.data);

        setPagination(data?.pagination);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  if (loading) return <Loader />;
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-15 lg:justify-between justify-center mx-5 md:mx-0 items-center">
        {allBlogs?.map((blog, idx) => (
          <div key={idx} className="w-full md:w-[30%] my-0 lg:my-26 shadow">
            <div className="relative h-[250px] w-[250px">
              <Image
                src={blog?.featured_img}
                fill
                alt={blog?.featured_img_alt || "Featured Image"}
              />
            </div>
            <div className="m-4 text-black space-y-4">
              <Link
                href={`/blog/${slugify(blog?.slug)}`}
                className=" visited:text-purple-800 hover:text-blue-500"
              >
                <header className="line-clamp-2 overflow-hidden w-full text-xl mb-2 font-extrabold">
                  {blog?.blog_title}
                </header>
              </Link>
              <div
                className="line-clamp-3"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
              <CommonBtn
                link={`/blog/${slugify(blog?.slug)}`}
                text="Read more"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
