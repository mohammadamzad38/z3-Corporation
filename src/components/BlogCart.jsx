"use client";

import Image from "next/image";
import CommonBtn from "./CommonBtn";
import { slugify } from "./Slugify";
import Link from "next/link";
import { useContext } from "react";
import { Pagination } from "antd";
import { BlogContext } from "@/app/context";

export default function BlogCart({ limits }) {
  const { allBlogs, pagination } = useContext(BlogContext);
  const blogToShow = limits ? allBlogs?.slice(0, limits) : allBlogs;

  return (
    <div>
      <div className="grid gap-10 mx-5  md:mx-0 my-0 lg:my-26 items-center justify-center grid-cols-1 md:grid-cols-3">
        {blogToShow?.map((blog, idx) => (
          <div key={idx} className="w-full shadow">
            <div className="relative h-[250px] w-full">
              <Image
                src={blog?.featured_img}
                fill
                alt={blog?.featured_img_alt || "Featured Image"}
                className="object-cover"
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
      {limits ? (
        ""
      ) : (
        <Pagination
          align="center"
          className="mb-5"
          defaultCurrent={pagination.page}
          total={pagination.total}
          pageSize={pagination.limit}
        />
      )}
    </div>
  );
}
