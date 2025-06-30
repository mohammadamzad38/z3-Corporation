import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import LatestProjects from "@/components/Projects";
import Services from "@/components/Services";
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
      <main className="mx-0">
        {/* Clients Section */}
        <section className="container py-20">
          <h1 className="text-3xl font-bold text-center  text-[#F26F21]">
            Our Valuable Clients
          </h1>
          <Clients />
        </section>

        {/* Products Section */}
        <section className="container text-center items-center pb-18 flex flex-col">
          <h1 className="text-3xl pb-14 font-bold text-[#F26F21] text-center">
            Our Products & Services
          </h1>
          <Services />
        </section>

        {/* About Z3  */}
        <section className="bg-[#F4F4F4]">
          <div className="flex flex-row gap-14 my-10 container py-10">
            <div className="w-1/2 my-10">
              <h1 className="text-3xl font-bold text-[#F26F21] pb-8">
                Z3 Corporation - A Trusted Software & ICT Services Provider in
                Bangladesh
              </h1>
              <p className="text-gray-600">
                <span className="font-bold">Z3 Corporation</span> is a trusted
                IT solutions provider in Bangladesh, offering a comprehensive
                range of services designed to meet the evolving needs of
                businesses across various sectors. With expertise in software
                development, cloud computing, cybersecurity, and IT consulting,
                Z3 helps organizations streamline their operations, enhance
                efficiency, and embrace digital transformation. <br /> <br />
                Whether it’s custom software tailored to specific business needs
                or providing robust cloud infrastructure, Z3’s team of skilled
                professionals ensures that clients receive innovative, reliable,
                and scalable technology solutions. Known for its commitment to
                quality, Z3 is dedicated to helping businesses stay competitive
                in an ever-changing digital landscape. <br /> <br /> In addition
                to its IT expertise,{" "}
                <span className="font-bold">Z3 Corporation</span> also offers
                reliable fire safety solutions, providing industries,
                businesses, and homes with the necessary tools and services to
                protect against fire hazards. With a focus on both technology
                and safety, Z3 continues to deliver exceptional services that
                meet the diverse needs of its customers.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                className="border-3 border-gray-400 hover:border-10 hover:border-[#F26F21] rounded-xl w-full h-auto"
                src="/Image/About-Z3-Corporation.webp"
                alt="About z3 Corporation"
                height={800}
                width={500}
              />
            </div>
          </div>
        </section>

        {/* Latest Projects */}
        <section className="container py-20">
          <h1 className="text-center font-bold text-3xl text-[#F26F21]">
            Our Latest Projects
          </h1>
          <LatestProjects />
        </section>

        {/* Brands section */}
        <section className="container ">
          <h1 className="text-center font-bold text-3xl text-[#F26F21]">
            Brands We Sell / Promote
          </h1>
          <Brands />
        </section>
      </main>
    </div>
  );
}
