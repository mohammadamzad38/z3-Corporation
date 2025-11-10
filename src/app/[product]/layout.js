import Loader from "@/components/Loader";
import { Suspense } from "react";
import { backendurl } from "@/utils/constants";

export async function generateMetadata({ params }) {
  const { product } = await params;
  const res = await fetch(`${backendurl}/categories/${product}`, {
    cache: "no-store",
  });
  const data = await res.json();
  const category = data?.data;

  const title = category?.metaTitle;
  const description = category?.description;
  const url = `https://z3corporation.com/${category?.slug}`;

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
          url: "/favicon.ico",
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
      images: ["/favicon.ico"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Layout({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
