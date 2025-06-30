import Image from "next/image";

const projects = [
  {
    image: "/Image/matroRail.jpg",
    title: "Dhaka Metro Rail, Bangladesh.",
  },
  {
    image: "/Image/Siemens Assembly Plant.jpg",
    title: "Siemens Assembly Plant",
  },
  {
    image: "/Image/bhasan-char.avif",
    title: "Bhasan Char Island in Hatiya Upazila, Bangladesh.",
  },
  {
    image: "/Image/everCare.jpg",
    title: "Evercare Hospital Chattogram | Transforming Healthcare",
  },
  {
    image: "/Image/aircraftHanger.jpg",
    title: "Aircraft Hangars HSIA",
  },
  {
    image: "/Image/Shantasangtum.jpg",
    title: "Ghorashal Power Plant in Palash, Narsingdi, Dhaka, Bangladesh",
  },
];

export default function LatestProjects() {
  return (
    <div className="grid grid-cols-3 mt-13 border border-gray-400 p-2 rounded-2xl">
      {projects.map((project, idx) => (
        <div
          className="relative w-full border group h-[250px] shadow-2xl  "
          key={idx}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div className="absolute bottom-0 h-[100px] w-full p-3 bg-black bg-opacity-70 opacity-0 translate-y-4 ease-[cubic-bezier(0.15,0.85,0.25,1)]  group-hover:opacity-75 group-hover:translate-y-0 transition-all duration-500 justify-center items-center  flex text-white">
            <h1 className="my-5 px-3 text-xl font-bold border border-amber-700 p-3 rounded-sm w-full">
              {project.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
