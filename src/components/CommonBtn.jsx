export default function CommonBtn({ link, text }) {
  return (
    <div>
      <a
        href={link}
        className="flex justify-end rounded relative overflow-hidden group px-10 py-2 pt-4 border border-[#F26F21] text-[#F26F21] font-bold cursor-pointer"
      >
        <span className="relative z-10 group-hover:text-white transition duration-300">
          {text}
        </span>
        <span
          className="absolute inset-0 bg-[#F26F21] w-0 group-hover:w-full transition-all duration-700"
          style={{
            transitionTimingFunction: "cubic-bezier(0, 1.45, 0.64, 0.61)",
          }}
        />
      </a>
    </div>
  );
}
