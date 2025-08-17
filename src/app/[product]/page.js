import Image from "next/image";
import categoryData from "./categoriesData.json";
import PageCover from "@/components/pageCover";

const Page = ({ params }) => {
  const { product } = params;

  const category = categoryData[product];

  if (!category) {
    return (
      <div className="container text-5xl text-center py-20 text-red-500">
        Category not found
      </div>
    );
  }

  return (
    <div>
     <PageCover text={category.title}/>

      <div className="container py-20 flex flex-wrap gap-10 justify-center">
        {category.catalog.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg"
          >
            <a href={item.url}>
              {" "}
              <div className="relative h-[300px] w-[300px] mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h2 className="text-lg text-center h-[50px] w-[300px] text-black font-bold">
                {item.name}
              </h2>
            </a>
          </div>
        ))}
      </div>

      <div className="bg-[#0A0A0A] py-12">
        <div className="container px-8">
          {category.article} <span className="text-3xl">This is demo</span>
        </div>
      </div>

      <div className="bg-[#1863AB] h-[300px] md:h-[200px] flex ">
        <div className="flex flex-col justify-between md:gap-0 gap-10 py-5 px-10 lg:py-0 items-center text-center lg:flex-row container border-b-8 border-[#ED4B41]">
          <div className="text-white space-y-4 text-start">
            {" "}
            <h1 className="text-2xl font-bold">
              Looking an Adequate Solution for your Company?
            </h1>
            <h3>Contact us today for free conslutaion or more information.</h3>
          </div>

          <div className="mr-32">
            <button className="px-5 py-2 border-2 font-bold border-white hover:text-[#ED4B41]">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
