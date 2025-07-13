import Image from "next/image";

export default function Team({ name, title, image }) {
  return (
    <div>
      <div className="border rounded-xl h-[400px] w-[300px] md:w-[350px] place-items-center space-y-5 m-10 lg:m-0 shadow-lg ">
        <div className="relative border h-[200px] w-[200px]">
          <Image
            src={image}
            fill
            alt="MD sir Image"
            className="object-contain"
          />
        </div>
        <h1 className="w-[100%] max-h-[70px] font-bold text-lg text-center text-black mx-2">
          {name}
        </h1>
        <div className="border border-[#ED4B41] w-[50%] border-b-2 "></div>
        <h2 className="text-black pb-4 mx-2 text-center">{title}</h2>
      </div>
    </div>
  );
}
