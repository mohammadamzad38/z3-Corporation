import BlogCart from "@/components/BlogCart";
import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import LatestProjects from "@/components/Projects";
import Services from "@/components/Services";
import { Carousel } from "antd";
import Image from "next/image";

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
              className="relative w-full h-[300px] md:h-[600] mx-auto overflow-hidden"
            >
              <Image
                src={project.image}
                alt="centrepoint"
                fill
                className="object-cover w-full"
              />
              <div className="absolute bottom-5 md:bottom-10 w-full md:max-w-[70%] lg:max-w-[50%] mx-auto  bg-black opacity-75 lg:px-20 md:px-10 px-5 text-white py-2 md:py-6 md:rounded-r-2xl">
                <p className="text-xl md:text-4xl  font-bold mb-2 md:mb-4">
                  {project.title}
                </p>
                <p className="md:font-bold">{project.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Main Section */}
      <main className="mx-0">
        {/* Clients Section */}
        <section className="container py-12 md:py-20">
          <h1 className="text-xl md:text-3xl pb-10 md:pb-15 font-bold text-center  text-[#F26F21]">
            Our Valuable Clients
          </h1>
          <Clients />
        </section>
        {/* Products Section */}
        <section className="container text-center items-center pb-10 md:pb-18 flex flex-col">
          <h2 className="text-xl md:text-3xl pb-5 md:pb-14 font-bold text-[#F26F21] text-center">
            Our Products & Services
          </h2>
          <Services />
        </section>
        {/* About Z3  */}
        <section className="bg-[#F4F4F4]">
          <div className="flex flex-col md:flex-row gap-14 my-10 container px-10 lg:px-0 py-10">
            <div className="w-full md:w-1/2 my-10">
              <h2 className="text-xl md:text-3xl font-bold text-[#F26F21] pb-8">
                Z3 Corporation - Best Fire Solution Company in Bangladesh
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Z3 Corporation proudly stands as the best fire fighting
                  company in Bangladesh, renowned for its excellence in fire
                  safety solutions. As a leading fire and safety equipment
                  company, we specialize in comprehensive solutions with a
                  proven track record and the trust of so many customers.
                </p>
                <p className="text-gray-600">
                  Providing the highest quality fire safety products in
                  Bangladesh, we ensure complete protection against fire. With a
                  stellar reputation, our dedicated team ensures homes,
                  businesses and industries are well-equipped to handle
                  emergencies.
                </p>
                <p className="text-gray-600">
                  The focus on quality and performance has made us one of the
                  most trusted fire extinguisher companies in Bangladesh. So,
                  count on us for the best expertise in fire safety solutions –
                  “Your Safety Our Priority”.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
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
        <section className="container pt-18 px-10">
          <h2 className="text-center font-bold text-xl md:text-3xl text-[#F26F21]">
            Our Latest Projects
          </h2>
          <LatestProjects />
        </section>

        {/* Letest Blogs */}

        <section className="bg-[#F4F4F4]">
          <div className="container">
            <h2 className="text-center font-bold  text-xl md:text-3xl pt-15 text-[#F26F21]">
              Latest Blog Posts
            </h2>
            <div className="py-10 lg:py-0">
              <BlogCart limits={3} />
            </div>
          </div>
        </section>

        {/* Brands section */}
        <section className="container pb-15">
          <h2 className="text-center font-bold text-xl md:text-3xl py-10 md:pb-15 text-[#F26F21]">
            Brands We Sell / Promote
          </h2>
          <Brands />
        </section>
      </main>
    </div>
  );
}
