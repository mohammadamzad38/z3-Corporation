const PageCover = ({ text, coverBanner }) => {
  return (
    <div className="relative flex shadow-2xl justify-center w-full">
      <img
        src={coverBanner}
        alt={"z3 cover image"}
        fill
        className="w-full h-[300px]"
      />
      <div className="absolute top-10 md:top-30 left-[10%]">
        <p className="text-lg md:text-2xl border-b-4 border-[#ED4B41] text-white bg-[rgba(0,0,0,0.62)] px-3 md:px-20  md:py-10 font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PageCover;
