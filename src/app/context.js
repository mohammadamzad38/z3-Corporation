"use client";

import { backendurl } from "@/utils/constants";
import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export default function Context({ children }) {
  const [allBlogs, setAllBlos] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await fetch(`${backendurl}/categories`);
        const categoriesData = await res.json();

        const formated = categoriesData?.data?.map((item) => ({
          name: item.name,
          slug: item.slug,
        }));
        setCategories(formated);
      } catch (error) {
        console.log("Error fetching Categories data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCategories();
  }, []);

  return (
    <BlogContext.Provider value={{ allBlogs, pagination, categories, loading }}>
      {children}
    </BlogContext.Provider>
  );
}
