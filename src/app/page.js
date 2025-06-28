import Clients from "@/components/Clients";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const projectData = [
  {
    image: "/Image/centrepoint.jpg",
    title: "Center Point at Dhaka Airport",
    description:
      "Safeguarding shopping bliss at Dhaka Airport's Center Point with advanced Fire Protection and Detection System.",
  },
  {
    image: "/Image/everCare.jpg",
    title: "Protecting Evercare Hospital",
    description: "Securing Evercare Hospital with end-to-end Fire Solutions",
  },
  {
    image: "/Image/glanrich.webp",
    title: "Glenrich Int'l School- Protrction",
    description:
      "End-To-End fire solution provoded at country's prestigious Glenrich Int'l School",
  },
  {
    image: "/Image/everCare.jpg",
    title: "Protecting Evercare Hospital",
    description: "Securing Evercare Hospital with end-to-end Fire Solutions",
  },
];

export default function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <section className="z-0 relative">
        <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
          {projectData.map((project, index) => (
            <div
              key={index}
              className="relative w-full mx-auto h-[650] overflow-hidden"
            >
              <Image
                src={project.image}
                alt="centrepoint"
                fill
                className="object-fill h-auto w-auto"
              />
              <div className="absolute bottom-10 max-w-[50%] mx-auto  bg-black opacity-75 px-20 text-white py-10 rounded-r-2xl">
                <h2 className="text-5xl font-bold mb-4">{project.title}</h2>
                <p className="font-bold">{project.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Main Section */}
      <main className="container mx-0">
        <section className="py-20">
          <h1 className="text-3xl font-bold text-center  text-[#5F613A]">
            Our Valuable Clients
          </h1>
          <Clients />
        </section>
      </main>
    </div>
  );
}
