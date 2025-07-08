import Image from "next/image";

const services = [
  {
    image: "/Image/softawer_development.jpg",
    title: "SOFTWARE DEVELOPMENT",
  },
  {
    image: "/Image/business_process_outsourcing.webp",
    title: "BUSINESS PROCESS OUTSOURCING",
  },
  {
    image: "/Image/graphic-design.jpeg",
    title: "DIGITAL GRAPHIC DESIGN",
  },
];

export default function ItService() {
  return (
    <div>
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-5">
        {services.map((service, idx) => (
          <div key={idx} className="space-y-8">
            <div className="relative h-[300px] w-[400px] border  border-gray-100 rounded-2xl shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="border p-2 rounded-2xl "
              />
            </div>
            <h1 className="text-[#5F613A] font-bold text-center ">
              {service.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
