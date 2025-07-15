import Image from "next/image";
import productsData from "../productsData.json";

const Page = ({ params }) => {
  const { productDetails } = params;

  const categoryDetails = productsData[productDetails];

  console

  if (!categoryDetails) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div>
      <div className="relative flex justify-center h-[200px] w-full">
        <Image
          src={categoryDetails.image.replace("/public", "")}
          alt={categoryDetails.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-1/2 m-4 md:m-10 lg:mx-[15%] transform -translate-y-1/2">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold border-b-4 border-[#ED4B41] text-white">
            {categoryDetails.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {categoryDetails.catalog.map((product, idx) => (
          <div key={idx}>
            <div className="relative h-[300px] w-[300px]">
              <Image
                src={product.image.replace("/public", "")}
                fill
                alt={product.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
