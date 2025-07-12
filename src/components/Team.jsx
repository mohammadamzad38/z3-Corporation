import Image from "next/image";



export default function Team({ name, title, image }) {
  return (
    <div>
      <div className="border rounded-2xl  lg:h-[400px] lg:w-[350px] place-items-center space-y-5 m-10 lg:m-0 shadow-lg ">
        <div className="relative border h-[200px] w-[200px]">
          <Image
            src={image}
            fill
            alt="MD sir Image"
            className="object-contain"
          />
        </div>
        <h1 className="w-full max-h-[70px] font-bold text-lg text-center text-black">{name}</h1>
        <div className="border w-[50%] border-b-2 border-[#F26F21]"></div>
        <h2 className="text-black">{title}</h2>
      </div>
    </div>
  );
}
