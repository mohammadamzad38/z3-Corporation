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
    title: "Sanctum: Serenity in the heart of Gulshan (SHANTA HOLDINGS)",
  },
];

export default function LatestProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 border border-gray-400 p-2 rounded-2xl">
      {projects.map((project, idx) => (
        <div
          className="relative w-full border border-gray-100 group h-[250px] shadow-2xl  "
          key={idx}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div className="absolute bottom-0 h-[100px] w-full p-3 bg-black bg-opacity-70 opacity-0 translate-y-6 ease-[cubic-bezier(0.75, 1.3, 0, 0.78)] group-hover:translate-y-0 group-hover:opacity-75 transition-all duration-300 justify-center items-center flex text-white">
            <p className="my-5 px-3 text-lg                                                                                                                     font-bold border border-amber-700 p-3 rounded-sm w-full">
              {project.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
