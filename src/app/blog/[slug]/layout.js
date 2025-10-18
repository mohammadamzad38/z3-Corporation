import Loader from "@/components/Loader";
import { Suspense } from "react";
import { Blogs } from "../../../components/BlogCart";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const postData = Blogs?.find((b) => b?.slug === slug);

  const title = postData?.metaTitle;
  const description = `${postData?.metaDescription}`;
  const url = `https://z3corporation.com/${postData?.slug}`;
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
          url: "/favicon.png",
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
          url: "/favicon.png",
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
