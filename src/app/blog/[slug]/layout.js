import Loader from "@/components/Loader";
import { Suspense } from "react";
import { backendurl } from "@/utils/constants";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`${backendurl}/blogs/${slug}`, { cache: "no-store" });
  const data = await res.json();
  const blogsData = data?.data;
  const title = blogsData?.meta_title;
  const description = blogsData?.meta_description;
  const url = `https://z3corporation.com/${blogsData?.slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      type: "website",
      siteName: "Z3 Corporation",
      description,
      url,
      images: [
        {
          url: "/favicon.ico",
          width: 100,
          height: 100,
          alt: "Z3 Corporation",
        },
      ],
    },
    twitter: {
      title,
      url,
      description,
      site: "Z3 Corporation",
      images: [
        {
          url: "/favicon.ico",
          width: 100,
          height: 100,
          alt: "Z3 Corporation",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const Layout = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default Layout;
