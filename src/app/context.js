"use client";

import { backendurl } from "@/utils/constants";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export default function Context({ children }) {
  const [allBlogs, setAllBlos] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(`${backendurl}/blogs`);
        const data = await res?.json();
        const blogDatas = data?.data?.data;
        setAllBlos(blogDatas);
        setPagination(data?.data?.pagination);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, []);
    

  return (
    <BlogContext.Provider value={{ allBlogs, pagination, loading }}>
      {children}
    </BlogContext.Provider>
  );
}
