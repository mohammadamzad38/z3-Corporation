import Loader from "@/components/Loader";
import { Suspense } from "react";
import productsData from "@/components/data/productsData.json";

export async function generateMetadata({ params }) {
  const { singleProduct } = await params;

  const allProducts = productsData[singleProduct];

  const product = allProducts?.catalog?.find((p) => p?.slug === singleProduct);

  const title = product?.metaTitle;
  const description =
    product?.metaDescription ||
    "Z3 Corporation is a concern of MRZ Group, ISO certified and one of Bangladesh’s largest fire safety equipment suppliers.";

  const url = `https://z3corporation.com/product/${product?.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
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
    robots: { index: true, follow: true },
  };
}

export default function Layout({ children }) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
