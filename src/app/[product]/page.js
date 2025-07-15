import Image from "next/image";
import categoryData from "./categoriesData.json";

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
      <div className="relative flex justify-center h-[200px] w-full">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-1/2 m-4 md:m-10 lg:mx-[15%] transform -translate-y-1/2">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold border-b-4 border-[#ED4B41] text-white">
            {category.title}
          </h1>
        </div>
      </div>

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
    </div>
  );
};

export default Page;
