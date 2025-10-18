import Loader from "@/components/Loader";
import { Suspense } from "react";
import categoryData from "@/components/data/categoriesData.json";

export async function generateMetadata({ params }) {
  const { product } = await params;
  const category = categoryData[product];

  const title = category?.title;
  const description = category?.metaDescription;
  const url = `https://z3corporation.com/${category?.url}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Z3 Corporation",
      url,
      images: [
        {
          url: "/favicon.png",
          width: 100,
          height: 100,
          alt: "Z3 Corporation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/favicon.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Layout component — wraps product pages
export default function Layout({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
