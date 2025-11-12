"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { backendurl } from "@/utils/constants";
import Loader from "@/components/Loader";
import "@/components/styles/blog.css";
import CommentForm from "@/components/Comment";
import { BlogContext } from "@/app/context";
import Link from "next/link";

const Page = ({ params }) => {
  const { slug } = params;
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterdSearch, setFilterdSearch] = useState([]);

  const { categories, allBlogs } = useContext(BlogContext);

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

  // Search here

  const handleSearch = () => {};

  useEffect(() => {
    if (search?.trim() == "") {
      setFilterdSearch([]);
      return;
    }
    const searchResult = allBlogs?.filter((b) =>
      b?.blog_title?.toLowerCase()?.includes(search.toLowerCase())
    );
    setFilterdSearch(searchResult);
  }, [search, allBlogs]);

  if (loading) return <Loader />;
  if (!blog) return <div className="text-red-600 text-3xl">Blog not found</div>;

  return (
    <div className="container flex flex-col md:flex-row gap-15 px-4 py-10">
      <div className="max-w-4xl">
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
        <CommentForm />
      </div>
      <div className="w-full ">
        <div className="flex mt-30">
          <input
            className="border border-gray-300 w-4/5 py-2 px-4 text-black placeholder:text-gray-400 focus:outline-none"
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            ontype={handleSearch}
            className="w-1/5 hover:cursor-pointer bg-[#ED4B41] text-sm p-2 text-white font-semibold"
          >
            Search
          </button>
        </div>
        <div className="pt-5">
          {filterdSearch.map((blogs) => (
            <p key={blogs?._id} className="mb-4 border-gray-300 border-b-1">
              <Link
                className="hover:text-black text-[#ED4B41] font-bold"
                href={`/blog/${blogs?.slug}`}
              >
                {blogs.blog_title}
              </Link>
            </p>
          ))}
        </div>
        <div>
          <p className="text-xl font-bold mt-15 mb-10 text-black">
            RECENT POSTS
          </p>
          <div className="flex flex-col gap-4">
            {allBlogs?.map((blog, idx) => (
              <ul
                key={idx}
                className="flex list-disc ml-5 text-[#ED4B41] gap-4 border-gray-300 border-b-1 mb-2"
              >
                <li>
                  <Link
                    className="text-black text-lg hover:text-[#ED4B41]"
                    href={`/blog/${blog?.slug}`}
                  >
                    {blog?.blog_title}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <p className="text-xl font-bold mt-15 mb-10 text-black">CATEGORIES</p>
          <div className="flex flex-col gap-4">
            {categories?.map((category, idx) => (
              <ul
                key={idx}
                className="flex list-disc ml-5 text-[#ED4B41] gap-4 border-gray-300 border-b-1 mb-2"
              >
                <Link
                  className="text-black text-lg font-thin hover:text-[#ED4B41]"
                  href={`/${category?.slug}`}
                >
                  {category?.name}
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
