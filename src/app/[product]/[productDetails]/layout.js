import Loader from "@/components/Loader";
import { backendurl } from "@/utils/constants";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { productDetails } = await params;
  const res = await fetch(`${backendurl}/categories/${productDetails}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const subCategory = data?.data;

  const title = subCategory?.metaTitle;
  const description = subCategory?.metaDescription;

  const url = `https://z3corporation.com/${subCategory?.slug}`;
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
