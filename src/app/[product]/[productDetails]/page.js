import Image from "next/image";
import productsData from "../productsData.json";

const Page = ({ params }) => {
  const { productDetails } = params;

  const categoryDetails = productsData[productDetails];

  if (!categoryDetails) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div>
      <div className="relative flex justify-center h-[200px] w-full">
        <Image
          src="/Image/z3-corporation-cover.png"
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

      <div className="container place-items-center py-15">
        <div className="relative h-[300px] md:h-[500px] w-[300px] md:w-[500px]">
          <Image src={categoryDetails.image} alt={categoryDetails.title} fill />
        </div>
        <div className="px-10 md:px-20 my-10 text-black">{categoryDetails.article}</div>
      </div>

      <div className="flex flex-wrap justify-center gap-15 py-20 container">
        {categoryDetails.catalog.map((product, idx) => (
          <div key={idx}>
            <a href={product.url}>
              <div
                key={idx}
                className="border hover:scale-90 rounded-xl opacity-90 hover:opacity-100 hover:border-[#ED4B41] p-4"
              >
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src={product.image.replace("/public", "")}
                    fill
                    alt={product.name}
                  />
                </div>
                <div className="h-[70px] rounded-lg hover:scale-90 flex justify-center items-center m-2">
                  <h1 className="font-bold text-[#ED4B41] hover:text-[#F26F21] text-lg text-center ">
                    {product.name}
                  </h1>
                </div>
              </div>
            </a>
          </div>
        ))}
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
