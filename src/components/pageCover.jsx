import Image from "next/image";
import coverImage from "../../public/Image/z3-corporation-cover.png";
const PageCover = ({ text }) => {
  return (
    <div className="relative flex shadow-2xl justify-center w-full">
      <img
        src="/Image/z3-corporation-cover.png"
        alt={"z3 cover image"}
        fill
        className="object-cover w-full h-[250px]"
      />
      <div className="absolute top-10 md:top-30 left-[20%]">
        <p className="text-lg md:text-3xl border-b-4 border-[#ED4B41] text-white bg-[rgba(0,0,0,0.62)] px-3 md:px-20  md:py-10 font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PageCover;
