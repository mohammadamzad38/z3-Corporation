import { Blogs } from "@/components/BlogCart";
import { slugify } from "@/components/Slugify";
import Image from "next/image";

const Page = ({ params }) => {
  const { slug } = params;

  const blogArticle = Blogs.find((item) => slugify(item.slug) === slug);

  if (!blogArticle)
    return <div className="text-red-600 text-3xl">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="relative w-[500px] h-[300px]">
        <Image
          src={blogArticle.image}
          alt={blogArticle.title}
          fill
          className="object-cover mb-6"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{blogArticle.title}</h1>
      <p className="text-lg text-gray-700">{blogArticle.article}</p>
    </div>
  );
};

export async function generateStaticParams() {
  return Blogs.map((item) => ({
    slug: slugify(item.slug),
  }));
}

export default Page;
