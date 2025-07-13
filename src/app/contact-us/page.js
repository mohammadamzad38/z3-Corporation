import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative flex justify-center h-[100px] md:h-[200px] w-screen">
        <Image
          src="/Image/z3-corporation-cover.png"
          alt="Z3 cover Image"
          fill
          className="object-fill"
        />
        <div className="absolute top-10 md:top-30 left-[20%]">
          <h1 className="text-xl md:text-3xl  border-b-4 border-[#ED4B41] text-white font-bold ">
            Certifications and Awards
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
