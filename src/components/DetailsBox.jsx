"use client";

import { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

const DetailsBox = ({ title, name, pdfUrl, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-auto w-full space-y-6">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="border border-gray-300 rounded-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition text-[#F26F21] font-bold"
        >
          {isOpen ? "Hide Details ▲" : "See More Details ▼"}
        </button>
        {isOpen && (
          <div className="px-4 py-3 text-gray-700 border-t border-gray-300">
            <h3 className="font-bold text-xl my-3">{name}</h3>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}
      </div>
      {pdfUrl && (
        <a href={pdfUrl} download>
          <button className="relative overflow-hidden group px-6 py-3 border-2 border-[#F26F21] text-[#F26F21] font-bold rounded cursor-pointer">
            <span className="relative z-10 flex place-items-center gap-4 group-hover:text-white transition duration-300">
              Download Catalogue <FaCloudDownloadAlt />
            </span>
            <span
              className="absolute inset-0 bg-[#F26F21] w-0 group-hover:w-full transition-all duration-700 ease-out"
              style={{
                transitionTimingFunction: "cubic-bezier(0.1, 1, 0.3, 1)",
              }}
            />
          </button>
        </a>
      )}
    </div>
  );
};

export default DetailsBox;
