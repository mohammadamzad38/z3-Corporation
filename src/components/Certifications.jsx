"use client";

import Image from "next/image";
import { useState } from "react";

import { FaWindowClose } from "react-icons/fa";

const certificatesList = [
  {
    image: "/Image/Quality-certification.png",
    description:
      "Z3 Corporation has received Excellent Contribution Award by NAFFCO in 2018. In 2020, we have been recognized as country’s most influential fire & safety service provider business by Arthokantha magazine.",
    alt: "Quality-certification",
  },
  {
    image: "/Image/naffco-authorization.jpg",
    description:
      "Z3 Corporation has received Excellent Contribution Award by NAFFCO in 2018. In 2020, we have been recognized as country’s most influential fire & safety service provider business by Arthokantha magazine.",
    alt: "naffco-authorization",
  },
  {
    image: "/Image/SHIELD-authorization.jpg",
    description:
      "Z3 Corporation has received Excellent Contribution Award by NAFFCO in 2018. In 2020, we have been recognized as country’s most influential fire & safety service provider business by Arthokantha magazine.",
    alt: "SHIELD-authorization",
  },
  {
    image: "/Image/naffco-distributor.jpg",
    description:
      "Z3 Corporation has received Excellent Contribution Award by NAFFCO in 2018. In 2020, we have been recognized as country’s most influential fire & safety service provider business by Arthokantha magazine.",
    alt: "naffco-distributor",
  },
];

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="flex justify-center items-center flex-wrap py-20 px-10">
      {certificatesList.map((certificate, idx) => (
        <div key={idx}>
          <div
            onClick={() => setSelectedImage(certificate)}
            className="relative h-[300px] w-[300px] md:h-[500px] md:w-[500px]  m-5 border"
          >
            <Image
              src={certificate.image}
              fill
              alt={certificate.alt || "Certificate Image"}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center">
          <div className="relative w-[100%] max-w-[800px] max-h-[500px] place-items-center md:max-h-[800px] bg-white rounded-lg p-4 m-10">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 -right-10 m-2 text-4xl font-bold text-white hover:text-red-500"
            >
              <FaWindowClose />
            </button>
            <div className="relative w-full h-[500px]  md:h-[700px]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.alt || "certificate image"}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
