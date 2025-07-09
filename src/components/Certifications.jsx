import Image from "next/image";

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
  return (
    <div className="flex flex-wrap py-20">
      {certificatesList.map((certificate, idx) => (
        <div key={idx}>
          <div className="relative h-[500px] w-[500px] m-5 border">
            <Image
              src={certificate.image}
              fill
              alt={certificate.alt}
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
