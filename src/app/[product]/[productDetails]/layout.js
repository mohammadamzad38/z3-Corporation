import Loader from "@/components/Loader";
import { Suspense } from "react";
import productsData from "@/components/data/productsData.json";

export async function generateMetadata({ params }) {
  const { productDetails } = await params;
  const allProducts = productsData[productDetails];

  const title = allProducts?.metaTitle;
  const description = allProducts?.metaDescription;

  const url = `https://z3corporation.com/${allProducts?.url}`;
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
