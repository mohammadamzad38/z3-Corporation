import Loader from "@/components/Loader";
import { Suspense } from "react";

export async function generateMetadata() {
  const title = "OUR TEAM - Z3 Corporation";
  const description =
    "Mr Md Iftekhar Zobaed is the Chairman of MRZ Group. After completion of his studies in Physics from Dhaka University, he spearheaded many successful ventures";
  const url = `https://z3corporation.com/our-team`;
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
